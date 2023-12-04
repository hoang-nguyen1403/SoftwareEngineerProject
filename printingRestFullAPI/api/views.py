import json
from rest_framework.decorators import action
from rest_framework import viewsets

from rest_framework.authentication import BasicAuthentication

from rest_framework.permissions import IsAuthenticated, AllowAny

from rest_framework.response import Response

from printingRestFullAPI.api.serializers import *
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token

from ..models import UserModel
from rest_framework import status
from django.shortcuts import get_object_or_404
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse


class UserLoginModelViewset(APIView):
    queryset = UserModel.objects.all()
    serializer_class = UserSerializer
    # authentication_classes = [BasicAuthentication]
    permission_classes = (AllowAny, )
    # authentication_classes = []
    def initialize_request(self, request, *args, **kwargs):
        setattr(request, 'csrf_processing_done', True)
        return super().initialize_request(request, *args, **kwargs)

    def post(self, request, googleId, format=None):
        queryset = UserModel.objects.filter(googleId=googleId)
        # token = UserModel.objects.create(user=...)
        if queryset.exists():
            userModel = get_object_or_404(UserModel, googleId=googleId)
            print(" ----------user", userModel)
            if userModel is not None:
                try:
                    token = Token.objects.create(user=userModel.user)
                except:
                    token = Token.objects.get(user=userModel.user)
                print(token)
                return Response({
                    'token': token.key,
                    # 'access_token': str(token.access_token),
                    'user_id': userModel.googleId,
                    'email': userModel.email
                }, status=status.HTTP_200_OK)

        res = {'status': status.HTTP_400_BAD_REQUEST, 'data': "serializer.errors"}
        return Response(res, status=status.HTTP_400_BAD_REQUEST)


class UserProfileModelViewSet(viewsets.ModelViewSet):
    queryset = UserModel.objects.all()
    serializer_class = UserProfileSerializer

    @action(detail=True,
            methods=['post'],
            serializer_class=UserProfileSerializer,
            authentication_classes=[BasicAuthentication],
            permission_classes=[IsAuthenticated])
    def addaction(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({'added': True})

    @action(detail=True,
            methods=['get'],
            serializer_class=UserProfileSerializer,
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


@csrf_exempt
def get_profile_from_id(request):
    if request.method == 'POST':
        data = list(dict(request.POST).keys())[0]
        print(" ----------data", data)
        data = json.loads(data)
        googleId = data.get("googleId")
        print(" ----------user", )
        userModel = get_object_or_404(UserModel, googleId=googleId)

        return JsonResponse({
            'user_id': userModel.googleId,
            'email': userModel.email,
            'imageUrl':userModel.imageUrl,
            "familyName": userModel.familyName,
            "givenName": userModel.familyName,
            "name": userModel.email
        }, status=status.HTTP_200_OK)

    return JsonResponse({"json_data": ""})