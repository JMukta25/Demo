from django.contrib import admin
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
 
    path('TV/', include('api.TV.urls')),
    path('RD/',include('api.RD.urls'))
]
