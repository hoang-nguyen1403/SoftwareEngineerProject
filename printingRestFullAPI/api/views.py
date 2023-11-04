from rest_framework.decorators import action
from rest_framework import viewsets

from rest_framework.authentication import BasicAuthentication

from rest_framework.permissions import IsAuthenticated

from rest_framework.response import Response

from printingRestFullAPI.api.serializers import *


class UserModelViewSet(viewsets.ModelViewSet):
    queryset = UserModel.objects.all()
    serializer_class = UserSerializer

    @action(detail=True,
            methods=['post'],
            serializer_class=UserSerializer)
            # authentication_classes=[BasicAuthentication])
            # permission_classes=[IsAuthenticated])
    def addaction(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({'added': True})

    @action(detail=True,
            methods=['get'],
            serializer_class=UserSerializer,
            authentication_classes=[BasicAuthentication],
            permission_classes=[IsAuthenticated])
    def contents(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)


class PrintingHistoryViewSet(viewsets.ModelViewSet):
    queryset = PrintingHistory.objects.all()
    serializer_class = PrintingHistorySerializer

    @action(detail=True,
            methods=['post'],
            authentication_classes=[BasicAuthentication],
            permission_classes=[IsAuthenticated])
    def addaction(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({'added': True})

    @action(detail=True,
            methods=['get'],
            serializer_class=PrintingHistorySerializer,
            authentication_classes=[BasicAuthentication],
            permission_classes=[IsAuthenticated])
    def contents(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)


class RemainingPagesViewSet(viewsets.ModelViewSet):
    queryset = RemainingPages.objects.all()
    serializer_class = RemainingPagesSerializer

    @action(detail=True,
            methods=['post'],
            authentication_classes=[BasicAuthentication],
            permission_classes=[IsAuthenticated])
    def addaction(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({'added': True})

    @action(detail=True,
            methods=['get'],
            serializer_class=RemainingPagesSerializer,
            authentication_classes=[BasicAuthentication],
            permission_classes=[IsAuthenticated])
    def contents(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)