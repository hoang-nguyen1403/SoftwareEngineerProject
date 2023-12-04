from django.urls import path, include
from . import views

urlpatterns = [
    path('', include('django.contrib.auth.urls')),
    # path('user/get/', views.user_login, name='user_login'),

]