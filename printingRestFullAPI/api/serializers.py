from rest_framework import serializers
from printingRestFullAPI.models import *


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserModel
        fields = ["email", "googleId"]


class PrintingHistorySerializer(serializers.ModelSerializer):
    class Meta:
        model = PrintingHistory
        fields = '__all__'


class RemainingPagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = RemainingPages
        fields = '__all__'
