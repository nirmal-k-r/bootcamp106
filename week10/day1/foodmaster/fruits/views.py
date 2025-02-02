from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from .models import Fruit
import json
from django.http import JsonResponse

# Create your views here.


def index(request):
    # return HttpResponse("Hello, world. You're at the fruits index.")
    return render(request, 'fruits/index.html')


def fruit(request):
    context={
        'name': 'Apple',
        'color': 'Red',
        'weight': '150g',
        'price': '20'
    }
    return render(request, 'fruits/fruit.html', context)

def fruitbyid(request,id):
    myfruit=Fruit.objects.get(id=id) #get the fruit with the id

    context={
        'name': myfruit.name,
        'color': myfruit.color,
        'weight': myfruit.weight,
        'price': myfruit.price
    }
    # return JsonResponse(context)
    return render(request, 'fruits/fruit.html', context)

def about(request):
    template=loader.get_template('fruits/about.html')
    context={
        'title': 'About Us',
        'content': 'This is the about page',
        'owner': 'John Doe',
        'phone': '123-456-7890'
    }

    response=template.render(context, request)
    return HttpResponse(response)