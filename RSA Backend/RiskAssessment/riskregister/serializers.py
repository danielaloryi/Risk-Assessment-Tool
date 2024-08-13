from rest_framework import serializers
from .models import RiskRegister

class RiskRegisterSerializer(serializers.ModelSerializer):
  class Meta:
    model = RiskRegister
    fields = [
        "id",
        "department",
        "process", 
        "sub_process",
        "risk_description",
        "risk_source",
        "key_risk_drivers",
        "risk_family",
        "risk_grade",
        "risk_owner",
        "likelihood",
        "impact",
        "risk_impact_area",
        "velocity",
        "rating",
        "mitigation_actions",
        "control_form",
        "current_control_type",
        "control_nature",
        "impact_of_current_control",
        "control_effectivness",
        "residual_risk_rating",
        "risk_treatment_rating",
        "risk_level",
        "risk_responds_metrix",
        "risk_treatment_decision",
        "risk_treatment_action_cost",
        "due_date",
        "maximum_due_date",
        "action_owner",
        "risk_escalation",
        "status"
        ]
