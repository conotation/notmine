from django.shortcuts import render

# Create your views here.

def index(req):
    return render(req, 'timetable.html')

def schedule(req):
    return render(req, 'schedule2.html')

def signin(req):
    return render(req, 'signin.html')

def signup(req):
    return render(req, 'signup.html')

def st(req):
    return render(req, 'schedule2.html')