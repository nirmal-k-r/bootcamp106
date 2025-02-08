from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse, JsonResponse
from rest_framework.parsers import JSONParser
from .models import Product
from .serializers import ProductSerializer

# Create your views here.

# def product_resource(request):
#     if request.method == 'GET':
#         all_products = Product.objects.all()
#         serialised = ProductSerializer(all_products, many=True)
#         return JsonResponse(serialised.data, safe=False)
    
#     elif request.method == 'POST':
#         data = JSONParser().parse(request)
#         serialised = ProductSerializer(data=data)
#         if serialised.is_valid():
#             serialised.save()
#             return JsonResponse(serialised.data, status=201)
#         return JsonResponse(serialised.errors, status=400)

@csrf_exempt
def get_all_products(request):
    all_products = Product.objects.all()
    serialised = ProductSerializer(all_products, many=True)
    return JsonResponse(serialised.data, safe=False)

@csrf_exempt
def create_product(request):
    data = JSONParser().parse(request)
    serialised = ProductSerializer(data=data)
    if serialised.is_valid():
        serialised.save()
        return JsonResponse(serialised.data, status=201)
    return JsonResponse(serialised.errors, status=400)
        

@csrf_exempt
def delete_product(request):
    data = JSONParser().parse(request)
    product = Product.objects.get(id=data['id'])
    product.delete()
    return JsonResponse({'message': 'Product deleted successfully'}, status=204)
        
@csrf_exempt
def get_one_product(request):
    #get request
    url_id=request.GET.get('id')
    product = Product.objects.get(id=url_id)
    serialised = ProductSerializer(product)
    return JsonResponse(serialised.data, safe=False)

@csrf_exempt
def update_product(request):
    data = JSONParser().parse(request)
    product = Product.objects.get(id=data['id'])
    if 'name' in data:
        product.name = data['name']
    if 'price' in data:
        product.price = data['price']
    if 'description' in data:
        product.description = data['description']
        
    product.save()

    serialised=ProductSerializer(product)

    return JsonResponse(serialised.data, status=201)
