from django.urls import path
from .views import  Landing_Page ,Home_Page, pricing, Resources, contact_us, location_tracking, attendance, task_management, beat_plan, expenses, orders, target, \
save_user_response, getintouch_response, error_page, small_userdetail_form_response

urlpatterns = [

    #
    path('landing_page/', Landing_Page, name='landing_page'), 
    path('home/', Home_Page, name='home'),
    path('pricing/', pricing, name='pricing'),
    path('resources/', Resources, name='resources'),
    path('contactus/', contact_us, name='contactus'),

    path('location_tracking/', location_tracking, name='location_tracking'),
    path('attendance/', attendance, name='attendance'),
    path('task_management/', task_management, name='task_management'),
    path('beat_plan/', beat_plan, name='beat_plan'),
    path('expenses/', expenses, name='expenses'),
    path('orders/', orders, name='orders'),
    path('target/', target, name='target'),

    path('save_user_response/', save_user_response, name='save_user_response'),
    path('getintouch_response/', getintouch_response, name='getintouch_response'),
    path('small_userdetail_form_response/', small_userdetail_form_response, name='small_userdetail_form_response'),

    path('error_page/', error_page, name='error_page'),
]
