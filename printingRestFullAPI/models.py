from django.db import models
# Create your models here.
from django.conf import settings


class UserModel(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    email = models.CharField(max_length=250)
    familyName = models.CharField(max_length=250)
    givenName = models.CharField(max_length=250)
    googleId = models.CharField(max_length=250)
    imageUrl = models.CharField(max_length=250)
    name = models.CharField(max_length=250, default="name")


class PrintingHistory(models.Model):
    googleId = models.CharField(max_length=250)
    print_date = models.DateTimeField(auto_now_add=True)
    pages_printed = models.PositiveIntegerField()
    document_name = models.CharField(max_length=250)
    document_type = models.CharField(max_length=250)
    num_pages = models.PositiveIntegerField(default=1)
    is_two_sides = models.BooleanField(default=False)
    department = models.CharField(max_length=250, default="B4")
    floors = models.IntegerField(default=1)
    printer_name = models.CharField(max_length=250, default="HP5000")
    CHOICES = (
        ('option1', 'Dọc'),
        ('option2', 'Ngang'),
    )
    page_type = models.CharField(
        max_length=20,  # Set the maximum length as needed
        choices=CHOICES,
        default='option1'  # Set the default option
    )


class RemainingPages(models.Model):
    googleId = models.CharField(max_length=250)
    remainder_pages = models.IntegerField()