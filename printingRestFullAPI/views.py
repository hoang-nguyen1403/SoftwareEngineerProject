from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.auth import authenticate, login
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from .models import Profile, RoomCondition, Automation, AutomationStatus, ControlPanel
from django.core.paginator import Paginator
from django.utils import timezone
import pytz