from django.contrib import admin
from django.urls import path, include
from .views import risk_report


urlpatterns = [
    path("riskreport",risk_report)
    
]