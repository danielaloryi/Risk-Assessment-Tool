from django.db import models

# Create your models here.

class RiskRegister(models.Model):
    # TOLERANCE =(
    #     ("CATASTROPHIC", 7.5)
    # )
    #basic risk registry info
    # tolerance = model
    department = models.CharField(max_length=300)
    process = models.CharField(max_length=300)
    sub_process = models.CharField(max_length=300)
    risk_description = models.CharField(max_length=2000)
    # risk_category = models.CharField(max_length=400) 
    risk_source = models.CharField(max_length=300) #opt
    key_risk_drivers = models.CharField(max_length=300) #opt
    risk_family = models.CharField(max_length=300) #opt
    risk_grade = models.CharField(max_length=300)
    risk_owner = models.CharField(max_length=300) 

    #inherent risk
    likelihood = models.CharField(max_length=300)
    impact = models.CharField(max_length=300)
    risk_impact_area = models.CharField(max_length=2000)
    # impact_area = models.CharField(max_length=300)
    velocity = models.CharField(max_length=300)

    # fUNCTION FOR RISK RATING 
    


    rating = models.CharField(max_length=300) #gen
    mitigation_actions = models.CharField(max_length=400)

    #control effectiveness
    control_form = models.CharField(max_length=300)
    current_control_type = models.CharField(max_length=300)
    control_nature = models.CharField(max_length=300)
    impact_of_current_control = models.CharField(max_length=300)
    control_effectivness = models.CharField(max_length=300) #gen
    residual_risk_rating = models.CharField(max_length=300) #gen
    risk_treatment_rating = models.CharField(max_length=300)
    risk_level = models.CharField(max_length=300)
    risk_responds_metrix = models.CharField(max_length=300) #gen
    risk_treatment_decision = models.CharField(max_length=300)
    risk_treatment_action_cost = models.CharField(max_length=2000)
    # key_controls = models.CharField(max_length=2000)
    due_date = models.CharField(max_length=300)
    maximum_due_date = models.CharField(max_length=300) #gen
    action_owner = models.CharField(max_length=300)
    # oversight_responsibility = models.CharField(max_length=300)
    risk_escalation = models.CharField(max_length=300)
    status = models.CharField(max_length=300)