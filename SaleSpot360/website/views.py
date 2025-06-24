from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from django.views.decorators.http import require_http_methods
from .models import Landingpage_userdetails_form, Getintouch_form, small_userdetail_form
from .serializers import Landingpage_userdetails_form_Serializer, Getintouch_form_Serializer, small_userdetail_form_Serializer
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

# Create your views here.

# ================================================================================
# Landing page
def Landing_Page(request):
    return render(request, 'salespot_website/landing_page.html')

# ================================================================================
# HomePage
def Home_Page(request):
    return render(request, 'salespot_website/index.html')

# ================================================================================
# Pricing
def pricing(request):
    return render(request, 'salespot_website/pricing.html')

# ================================================================================
# Resources
def Resources(request):
    return render(request, 'salespot_website/resources.html')

# ================================================================================
# Contact Us
def contact_us(request):
    return render(request, 'salespot_website/contact.html')

# ================================================================================
# Location Tracking Feature
def location_tracking(request):
    return render(request, 'salespot_website/location_tracking.html')

# ================================================================================
# Attendance Feature
def attendance(request):
    return render(request, 'salespot_website/attendance_feature.html')

# ================================================================================
# Task Management Feature
def task_management(request):
    return render(request, 'salespot_website/task_management_feature.html')

# ================================================================================
# Beat Plan Feature
def beat_plan(request):
    return render(request, 'salespot_website/beat_plan_feature.html')

# ================================================================================
# Expenses Feature
def expenses(request):
    return render(request, 'salespot_website/expenses_feature.html')

# ================================================================================
# Orders Feature
def orders(request):
    return render(request, 'salespot_website/orders_features.html')

# ================================================================================
# Target Feature
def target(request):
    return render(request, 'salespot_website/target_feature.html')

# ===============================================================================================================
#                                           Landing Page Form Data
    
# @csrf_exempt
@require_http_methods(["POST"])
def save_user_response(request):

    if request.method == 'POST':
        # Collect the form data from POST
        data = {
            'full_name': request.POST.get('full_name'),
            'country_code': request.POST.get('country_code'),
            'contact_number': request.POST.get('contact_number'),
            'email_id': request.POST.get('email_id'),
            'company_name': request.POST.get('company_name'),
            'no_of_users': request.POST.get('no_of_users'),
            'message': request.POST.get('message')
        }

        serializer = Landingpage_userdetails_form_Serializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse({
                'status_code': 200,
                'message': 'LandingPage Form Data submitted successfully.',
                'data': serializer.data,
            })
        else:
            return JsonResponse({
                'status_code': 400,
                'errors': serializer.errors,
            }, status=400)
        
# ===============================================================================================================
#                                           Landing Page Form Data
    
# @csrf_exempt
@require_http_methods(["POST"])
def getintouch_response(request):

    if request.method == 'POST':
        # Collect the form data from POST
        data = {
            'full_name': request.POST.get('full_name'),
            'contact_number': request.POST.get('contact_number'),
            'email_id': request.POST.get('email_id'),
            'message': request.POST.get('message')
        }
        # print('Get In Touch Response Data : ', data)

        # Validate and save feedback using the serializer
        serializer = Getintouch_form_Serializer(data=data)
        if serializer.is_valid():
            serializer.save()
            # print(' Success ')
            return JsonResponse({
                'status_code': 200,
                'message': 'GetInTouch Data submitted successfully.',
                'data': serializer.data,
            })
        else:
            # print(' Fail ')
            return JsonResponse({
                'status_code': 400,
                'errors': serializer.errors,
            }, status=400)
        
# ===============================================================================================================
#                                           Small User Details Form Data
    
# @csrf_exempt
@require_http_methods(["POST"])
def small_userdetail_form_response(request):

    if request.method == 'POST':
        # Collect the form data from POST
        data = {
            'full_name': request.POST.get('full_name'),
            'company_name': request.POST.get('company_name'),
            'email_id': request.POST.get('email_id'),
            'contact_number': request.POST.get('contact_number'),
            'country_name': request.POST.get('country_name'),
        }
        # print('small_userdetail_form_response : ', data)

        # Validate and save feedback using the serializer
        serializer = small_userdetail_form_Serializer(data=data)
        if serializer.is_valid():
            serializer.save()
            # print(' Success ')
            return JsonResponse({
                'status_code': 200,
                'message': 'Data submitted successfully.',
                'data': serializer.data,
            })
        else:
            # print(' Fail ')
            return JsonResponse({
                'status_code': 400,
                'errors': serializer.errors,
            }, status=400)
        

# ================================================================================
# 

def error_page(request):
    return render(request, 'admin/error_page.html')