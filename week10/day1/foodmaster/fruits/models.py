from django.db import models

# Create your models here.

class Fruit(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    color = models.CharField(max_length=100)
    weight = models.FloatField()
    price = models.FloatField()
 

