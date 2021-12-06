from django.urls import path
from . import views

urlpatterns = [
    path('', views.login),
    path('schedule', views.schedule),
    path('login', views.login),
    path('signup', views.signup),
]
