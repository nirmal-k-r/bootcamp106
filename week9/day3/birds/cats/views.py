from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request): #my first view
    return HttpResponse('Welcome to cats')

def description(request):
    return HttpResponse('Cats are cute')