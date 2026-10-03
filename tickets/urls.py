from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TicketPurchaseViewSet

router = DefaultRouter()
# Agregamos basename='ticket-purchase' para asegurar el correcto enrutamiento
router.register(r'buy', TicketPurchaseViewSet, basename='ticket-purchase')

urlpatterns = [
    path('', include(router.urls)),
]