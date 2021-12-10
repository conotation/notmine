from django.urls import path
from . import views

urlpatterns = [
    path('', views.signin),
    path('schedule', views.schedule),
    path('st', views.st),
    path('signin', views.signin),
    path('signup', views.signup),
]
