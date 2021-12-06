from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request, 'timetable.html')

def Details(request):
    return render(request, 'Details.html')

def login(request):
    return render(request, 'login.html')