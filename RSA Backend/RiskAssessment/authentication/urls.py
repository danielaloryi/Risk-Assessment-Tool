from django.contrib import admin
from django.urls import path, include
from .views import *


app_name = 'auth'

urlpatterns = [
    path("get-details",UserDetailAPI.as_view()),
    path('register',RegisterUserAPIView.as_view()),
]