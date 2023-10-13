from django.urls import path, include
from django.contrib.auth import views as auth_views
from . import views


urlpatterns = [
    # previous login view
    # path('control_device/', views.control_device, name='control'),
    # path('check_room_status/', views.check_room_status, name='room_status'),
    # path('update_room_data/', views.update_room_data, name='room_data'),

    path('login/', auth_views.LoginView.as_view(), name='login'),
    path('logout/', auth_views.LogoutView.as_view(), name='logout'),


    path('', include('django.contrib.auth.urls')),
    path('dashboard/', views.dashboard, name='dashboard'),
    path('register/', views.register, name='register'),
    path('edit/', views.edit, name='edit'),
    path('', views.home, name='home'),
]