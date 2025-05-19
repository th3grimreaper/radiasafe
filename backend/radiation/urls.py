from django.urls import path

from .views import *

urlpatterns = [
    path('users/', UsersAPIView.as_view(), name="users"),
    path('products/<int:pk>/', ProductDetailAPIView.as_view(), name='product-detail'),
]