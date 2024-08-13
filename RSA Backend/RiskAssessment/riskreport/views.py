from django.shortcuts import render
from riskregister.serializers import RiskRegisterSerializer
from rest_framework.decorators import api_view
from django.http import JsonResponse
from riskregister.models import RiskRegister
from rest_framework.response import Response
from rest_framework import status

# Create your views here.

@api_view(['GET'])
def risk_report(request):
    if request.method == 'GET':
        risk = RiskRegister.objects.all()


        # riskdescription = risk.risk_family
        # riskfam = risk.risk_family
        # riskdepartment = risk.department
        # risktreat = risk.risk_treatment_decision
        # risktreatcost = risk.risk_treatment_action_cost
        # actionowner = risk.action_owner
        # duedate = risk.due_date
        # riskrating = risk.rating

        # riskreport = {
        # #    'riskdescription' : RiskRegister.objects.values_list('risk_family', flat=True),
        # #    'riskfam' : riskfam,
        # #    'riskdepartment' : riskdepartment,
        # #    'risktreat' : risktreat,
        # #    'risktreatcost' : risktreatcost,
        # #    'actionowner' : actionowner,
        # #    'duedate' : duedate,
        # #    'riskrating' : riskrating,

        # }

        serializer = RiskRegisterSerializer(risk,many=True)
        return JsonResponse({'risk':serializer.data})
        