from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TicketPurchaseViewSet

router = DefaultRouter()
router.register(r'buy', TicketPurchaseViewSet)

urlpatterns = [
    path('', include(router.urls)),
]