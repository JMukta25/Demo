from . import views
from django.urls import path

urlpatterns = [
   
    
    path('addTAV/',views.addTAV), 
    path('getTAV/',views.getTAV),
    path('updateTAV/<int:threatid>/<str:threatname>/',views.updateTAV),
    path('deleteTAV/<int:threatid>/<str:threatname>/',views.deleteTAV)

]