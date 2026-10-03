from rest_framework import serializers
from .models import TicketPurchase

class TicketPurchaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = TicketPurchase
        fields = '__all__'