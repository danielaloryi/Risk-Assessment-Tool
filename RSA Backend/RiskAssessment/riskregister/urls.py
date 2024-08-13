from django.contrib import admin
from django.urls import path, include
from .views import risk_register,risk_details, RiskRegisterView


urlpatterns = [
    path("risk",risk_register),
    path("risk/<int:id>",risk_details),
    path("risk-test/",RiskRegisterView.as_view(),name="Risk Test")
]