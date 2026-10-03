from rest_framework import viewsets, status
from rest_framework.response import Response
from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string
from django.utils.html import strip_tags

from .models import TicketPurchase
from .serializers import TicketPurchaseSerializer


class TicketPurchaseViewSet(viewsets.ModelViewSet):
    queryset = TicketPurchase.objects.all().order_by('-created_at')
    serializer_class = TicketPurchaseSerializer

    def create(self, request, *args, **kwargs):
        # 1. Validar y guardar la compra con el serializador
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        ticket_instance = serializer.save()

        # 2. Extraer datos del ticket guardado (o de request.data)
        # Ajusta los nombres de los campos según tu modelo TicketPurchase
        user_email = getattr(ticket_instance, 'email', request.data.get('email'))
        user_name = getattr(ticket_instance, 'name', request.data.get('name', 'Customer'))
        ticket_type = getattr(ticket_instance, 'ticket_type', request.data.get('ticket_type', 'General Access'))
        ticket_quantity = getattr(ticket_instance, 'quantity', request.data.get('quantity', 1))
        total_amount = getattr(ticket_instance, 'total_amount', request.data.get('total_amount', 0))
        order_id = getattr(ticket_instance, 'id', request.data.get('order_id', '100001'))

        # 3. Contexto para llenar la plantilla HTML
        context = {
            'user_name': user_name,
            'order_id': order_id,
            'ticket_type': ticket_type,
            'ticket_quantity': ticket_quantity,
            'total_amount': total_amount,
        }

        # 4. Renderizar la plantilla HTML
        try:
            html_content = render_to_string('tickets/ticket_confirmation.html', context)
            text_content = strip_tags(html_content)

            # 5. Enviar correo vía Gmail SMTP
            subject = f"⚡ Your Ticket Confirmation - Lumina Festival #{order_id}"
            msg = EmailMultiAlternatives(
                subject=subject,
                body=text_content,
                from_email=None,  # Toma DEFAULT_FROM_EMAIL de settings.py
                to=[user_email]
            )
            msg.attach_alternative(html_content, "text/html")
            msg.send()

        except Exception as e:
            # Si falla el envío de correo, la compra ya quedó registrada en la BD
            print(f"Error al enviar correo: {e}")

        # 6. Retornar la respuesta estándar del ModelViewSet
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)