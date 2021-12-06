from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('Details', views.Details),
    path('login', views.login)
]
