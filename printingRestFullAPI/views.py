from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from django.contrib.auth import authenticate, login
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from django.core.paginator import Paginator
from django.utils import timezone
import pytz
from django.views.decorators.csrf import csrf_exempt


@csrf_exempt
def user_login(request):
    if request.method == 'POST':
        print(request.POST)

    return JsonResponse({"json_data": ""})
