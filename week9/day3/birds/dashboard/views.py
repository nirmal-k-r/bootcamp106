from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def index(request): #my first view
    return HttpResponse('Hello, World!')


def about(request):
    return HttpResponse('About birds')  