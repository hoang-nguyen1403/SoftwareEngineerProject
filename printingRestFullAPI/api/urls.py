from django.urls import path, include
# from rest_framework import routers
from . import views
from rest_framework import routers
# from rest_framework_simplejwt import views as jwt_views


app_name = 'printingRestFullAPI'

router = routers.DefaultRouter()
router.register('user', views.UserModelViewSet)
# router.register('user/<userTokenId>/login/', views.UserLoginModelViewset.as_view(), basename="login")
# router.register('printing_history', views.PrintingHistoryViewSet)
# router.register('remaining_pages', views.RemainingPagesViewSet)


urlpatterns = [
    path('', include(router.urls)),
    path('user/<googleId>/login/', views.UserLoginModelViewset.as_view(), name='login'),
]
