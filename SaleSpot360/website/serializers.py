from rest_framework import serializers
from .models import Landingpage_userdetails_form, Getintouch_form, small_userdetail_form
    

class Landingpage_userdetails_form_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Landingpage_userdetails_form
        fields = ['full_name', 'country_code', 'contact_number', 'email_id', 'company_name', 'no_of_users', 'message']

class Getintouch_form_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Getintouch_form
        fields = ['full_name', 'contact_number', 'email_id', 'message']

class small_userdetail_form_Serializer(serializers.ModelSerializer):
    class Meta:
        model = small_userdetail_form
        fields = ['full_name', 'company_name', 'email_id', 'contact_number', 'country_name']