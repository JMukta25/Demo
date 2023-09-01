from . import views
from django.urls import path

urlpatterns = [
   
    
    path('addTAV/',views.addTAV), 
    path('getTAV/',views.getTAV),
    path('updateTAV/<str:threat_name>/',views.updateTAV),
    path('deleteTAV/<str:threat_name>/',views.deleteTAV)

]