
from django.urls import path,include
from . import views

urlpatterns = [
    path('getAllProducts', views.get_all_products, name='getAll'),
    path('createProduct', views.create_product, name='create'),
    path('deleteProduct', views.delete_product, name='delete'),
    path('getOneProduct', views.get_one_product, name='getOne'),
    path('updateProduct', views.update_product, name='update'),
]
