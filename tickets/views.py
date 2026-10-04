from rest_framework import viewsets, status
from rest_framework.response import Response

from .models import TicketPurchase
from .serializers import TicketPurchaseSerializer


class TicketPurchaseViewSet(viewsets.ModelViewSet):
    queryset = TicketPurchase.objects.all().order_by('-created_at')
    serializer_class = TicketPurchaseSerializer

    def create(self, request, *args, **kwargs):
        # 1. Validar y guardar la compra en la base de datos de inmediato
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        # 2. Retornar la respuesta exitosa al frontend al instante
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)