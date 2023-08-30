from . import views
from django.urls import path

urlpatterns = [
   
    
    path('addTAV/',views.addTAV), 
    path('getTAV/',views.getTAV),

]