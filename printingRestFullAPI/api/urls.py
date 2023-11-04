from django.urls import path, include
# from rest_framework import routers
from . import views
from rest_framework import routers

app_name = 'printingRestFullAPI'

router = routers.DefaultRouter()
router.register('user', views.UserModelViewSet)
router.register('printing_history', views.PrintingHistoryViewSet)
router.register('remaining_pages', views.RemainingPagesViewSet)


urlpatterns = [
    path('', include(router.urls)),
]
