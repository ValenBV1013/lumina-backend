from rest_framework import viewsets, status
from rest_framework.response import Response
from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string
from django.utils.html import strip_tags
import threading

from .models import TicketPurchase
from .serializers import TicketPurchaseSerializer


def send_async_email(subject, text_content, html_content, user_email):
    """Función auxiliar que corre en segundo plano para no congelar la compra"""
    try:
        msg = EmailMultiAlternatives(
            subject=subject,
            body=text_content,
            from_email=None,
            to=[user_email]
        )
        msg.attach_alternative(html_content, "text/html")
        msg.send()
    except Exception as e:
        print(f"Fallo al enviar correo en segundo plano: {e}")


class TicketPurchaseViewSet(viewsets.ModelViewSet):
    queryset = TicketPurchase.objects.all().order_by('-created_at')
    serializer_class = TicketPurchaseSerializer

    def create(self, request, *args, **kwargs):
        # 1. Guardar la compra de inmediato
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        ticket_instance = serializer.save()

        # 2. Extraer datos
        user_email = getattr(ticket_instance, 'email', request.data.get('email'))
        user_name = getattr(ticket_instance, 'name', request.data.get('name', 'Customer'))
        ticket_type = getattr(ticket_instance, 'ticket_type', request.data.get('ticket_type', 'General Access'))
        ticket_quantity = getattr(ticket_instance, 'quantity', request.data.get('quantity', 1))
        total_amount = getattr(ticket_instance, 'total_amount', request.data.get('total_amount', 0))
        order_id = getattr(ticket_instance, 'id', request.data.get('order_id', '100001'))

        context = {
            'user_name': user_name,
            'order_id': order_id,
            'ticket_type': ticket_type,
            'ticket_quantity': ticket_quantity,
            'total_amount': total_amount,
        }

        # 3. Intentar renderizar el correo
        try:
            html_content = render_to_string('tickets/ticket_confirmation.html', context)
            text_content = strip_tags(html_content)
            subject = f"⚡ Your Ticket Confirmation - Lumina Festival #{order_id}"

            # Lanzar el envío en un HILO SEPARADO (Background Thread)
            # Esto evita que Render bloquee o dé timeout al hilo principal de la compra.
            email_thread = threading.Thread(
                target=send_async_email, 
                args=(subject, text_content, html_content, user_email)
            )
            email_thread.daemon = True
            email_thread.start()
        except Exception as e:
            print(f"Error preparando el correo: {e}")

        # 4. Retornar éxito a la interfaz web de manera instantánea
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)