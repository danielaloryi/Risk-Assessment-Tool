# Generated by Django 4.1 on 2022-08-27 20:37

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='RiskRegister',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('department', models.CharField(max_length=300)),
                ('process', models.CharField(max_length=300)),
                ('sub_process', models.CharField(max_length=300)),
                ('risk_description', models.CharField(max_length=2000)),
                ('risk_source', models.CharField(max_length=300)),
                ('risk_family', models.CharField(max_length=300)),
                ('risk_grade', models.CharField(max_length=300)),
                ('risk_owner', models.CharField(max_length=300)),
                ('likelihood', models.CharField(max_length=300)),
                ('impact', models.CharField(max_length=300)),
                ('key_drivers_of_impact', models.CharField(max_length=2000)),
                ('impact_area', models.CharField(max_length=300)),
                ('velocity', models.CharField(max_length=300)),
                ('rating', models.CharField(max_length=300)),
                ('key_controls', models.CharField(max_length=2000)),
                ('current_control_type', models.CharField(max_length=300)),
                ('control_nature', models.CharField(max_length=300)),
                ('impact_of_current_control', models.CharField(max_length=300)),
                ('control_effectivness', models.CharField(max_length=300)),
                ('residual_risk_rating', models.CharField(max_length=300)),
                ('risk_treatment_rating', models.CharField(max_length=300)),
                ('risk_level', models.CharField(max_length=300)),
                ('risk_responds_metrix', models.CharField(max_length=300)),
                ('risk_treatment_decision', models.CharField(max_length=300)),
                ('risk_treatment_action_cost', models.CharField(max_length=2000)),
                ('due_date', models.CharField(max_length=300)),
                ('maximum_due_date', models.CharField(max_length=300)),
                ('action_owner', models.CharField(max_length=300)),
                ('risk_escalation', models.CharField(max_length=300)),
                ('status', models.CharField(max_length=300)),
            ],
        ),
    ]