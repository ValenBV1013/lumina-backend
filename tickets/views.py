from rest_framework import viewsets
from .models import TicketPurchase
from .serializers import TicketPurchaseSerializer

class TicketPurchaseViewSet(viewsets.ModelViewSet):
    queryset = TicketPurchase.objects.all().order_by('-created_at')
    serializer_class = TicketPurchaseSerializer