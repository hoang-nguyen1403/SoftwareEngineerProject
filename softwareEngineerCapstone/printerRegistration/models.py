from django.db import models
from django.contrib.auth.models import User
# Create your models here.
from django.conf import settings


class Profile(models.Model):
    # user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="userprofile")
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    date_of_birth = models.DateField(blank=True, null=True)
    photo = models.ImageField(upload_to='users/%Y/%m/%d/', blank=True)
    about_you = models.CharField(max_length=255, blank=True, default='')
    def __str__(self):
        return f'Profile of {self.user.username}'