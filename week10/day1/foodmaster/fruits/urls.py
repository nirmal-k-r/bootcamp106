from django.urls import path #path function
from . import views # . is shorthand for the current directory

# one urlpattern per line
urlpatterns = [
    path('', views.index, name='index'),
    path('fruit', views.fruit, name='fruit'),
    path('fruit/<id>', views.fruitbyid, name='fruitbyid'),
    path('about', views.about, name='about')
]