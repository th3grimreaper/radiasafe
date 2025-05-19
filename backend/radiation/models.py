from django.db import models
from ckeditor.fields import RichTextField

# Create your models here.
class Users(models.Model):
    f_name = models.CharField(max_length=50)
    l_name = models.CharField(max_length=50)
    username = models.CharField(max_length=50)

    class Meta:
        verbose_name_plural="Users"

    def __str__(self):
        return self.f_name

#Products
from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=8, decimal_places=2)
    description = RichTextField(blank=True)

    def __str__(self):
        return self.name
