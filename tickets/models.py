from django.db import models

class TicketPurchase(models.Model):
    TICKET_TYPES = [
        ('General Pass', 'General Pass - $250,000 COP'),
        ('VIP Experience', 'VIP Experience - $500,000 COP'),
        ('Camping Pass', 'Camping Pass - $150,000 COP'),
    ]

    full_name = models.CharField(max_length=150)
    email = models.EmailField()
    ticket_type = models.CharField(max_length=50, choices=TICKET_TYPES)
    quantity = models.PositiveIntegerField(default=1)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.full_name} - {self.ticket_type} ({self.quantity})"