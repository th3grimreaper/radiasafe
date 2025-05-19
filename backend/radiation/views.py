from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import *
from .serlializers import *
import logging
from django.shortcuts import get_object_or_404

logger=logging.getLogger("custom_logger")

# Create your views here.
class UsersAPIView(APIView):
    def get(self, requests):
        try:
            users=Users.objects.all()
            userSerializer=UserSerializer(users, many=True)
            userData=userSerializer.data
            return Response({"msg":"Success", "users": userData}, 200)
        except Exception as e:
            logger.error(f"{e}")
            return Response({"error": "Something went wrong"}, 500)


#example views
# views.py

class ProductDetailAPIView(APIView):

    def get(self, request, pk):
        product = get_object_or_404(Product, pk=pk)
        serializer = ProductSerializer(product)
        return Response(serializer.data)

    def put(self, request, pk):
        product = get_object_or_404(Product, pk=pk)
        serializer = ProductSerializer(product, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def patch(self, request, pk):
        product = get_object_or_404(Product, pk=pk)
        serializer = ProductSerializer(product, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        product = get_object_or_404(Product, pk=pk)
        product.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

