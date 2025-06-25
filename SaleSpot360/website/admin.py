from django.contrib import admin
from .models import Getintouch_form, small_userdetail_form, Landingpage_userdetails_form

# Register your models here.

@admin.register(Landingpage_userdetails_form)
class LandingpageUserDetailsAdmin(admin.ModelAdmin):
    list_display = (
        'full_name',
        'company_name',
        'email_id',
        'contact_number',
        'country_code',
        'no_of_users',
    )
    search_fields = ('full_name', 'email_id', 'company_name')
    list_filter = ('country_code',)

@admin.register(Getintouch_form)
class GetInTouchFormAdmin(admin.ModelAdmin):
    list_display = (
        'full_name',
        'email_id',
        'contact_number',
    )
    search_fields = ('full_name', 'email_id')
    list_filter = ('email_id',)

@admin.register(small_userdetail_form)
class SmallUserDetailFormAdmin(admin.ModelAdmin):
    list_display = (
        'full_name',
        'company_name',
        'email_id',
        'contact_number',
        'country_name',
    )
    search_fields = ('full_name', 'company_name', 'email_id')
    list_filter = ('country_name',)