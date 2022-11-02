from django.shortcuts import render
from django.http import HttpResponse
from inertia import render


# Create your views here.

def show(request):
    lista = []
    lista.append(12)
    return render(request, 'simple-algorithm/SimpleAlgorithm', props={
        'data': lista
    })
