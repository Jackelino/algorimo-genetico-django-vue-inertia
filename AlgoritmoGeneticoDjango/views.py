from django.shortcuts import render

from inertia import render


# Create your views here.

def index(request):
    return render(request, 'welcome/Index')
