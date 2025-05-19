from django.contrib import admin
from django.utils.html import format_html
from django.conf import settings
from django.urls import reverse
from .models import *

# Register your models here.

@admin.register(Users)
class Useradmin(admin.ModelAdmin):
    list_display = ('f_name', 'l_name', 'username')

@admin.register(Product)
class Productadmin(admin.ModelAdmin):
    list_display = ('view_link' ,'id', 'name', 'price',)

    def view_link(self, obj):
        # this name is '<app_label>_<model_name>_change'
        url = reverse('admin:radiation_product_change', args=[obj.pk])
        return format_html(
            "<a class='button' style='background-color:#10b981;color:#fff;padding:3px 6px;border-radius:4px;' "
            "href='{}' target='_blank'>View</a>",
            url
        )
    view_link.short_description = 'View'