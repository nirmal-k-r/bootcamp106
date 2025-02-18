from django.db import models
from django.core.exceptions import ValidationError

# Create your models here.

class Fruit(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    color = models.CharField(max_length=100)
    weight = models.FloatField()
    price = models.FloatField()
    
    #django custom validator
    def clean(self):
        if len(self.name) < 3:
            raise ValidationError('Name must be at least 3 characters long')
        elif len(self.color) < 3:
            raise ValidationError('Color must be at least 3 characters long')
        

