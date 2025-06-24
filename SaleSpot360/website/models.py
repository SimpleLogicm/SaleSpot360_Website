from django.db import models

# Create your models here.

class BaseModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    is_active = models.BooleanField(default=True)

    class Meta:
        abstract = True

class Landingpage_userdetails_form(BaseModel):
    full_name = models.CharField(max_length=255)
    country_code = models.CharField(max_length=50)
    contact_number = models.CharField(max_length=15)
    email_id = models.EmailField()
    company_name = models.CharField(max_length=255)
    no_of_users = models.CharField(max_length=255)
    message = models.TextField()

    class Meta:
        verbose_name = "Long User Detail Form Data"
        verbose_name_plural = "Long User Detail Form Data"


class Getintouch_form(BaseModel):
    full_name = models.CharField(max_length=255)
    contact_number = models.CharField(max_length=15)
    email_id = models.EmailField()
    message = models.TextField()

    class Meta:
        verbose_name = "Get In Touch Form Data"
        verbose_name_plural = "Get In Touch Form Data"

class small_userdetail_form(BaseModel):
    full_name = models.CharField(max_length=255)
    company_name = models.CharField(max_length=255)
    email_id = models.EmailField()
    contact_number = models.CharField(max_length=15)
    country_name = models.CharField(max_length=255)

    class Meta:
        verbose_name = "Small User Detail Form Data"
        verbose_name_plural = "Small User Detail Form Data"