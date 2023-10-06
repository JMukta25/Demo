from . import views
from django.urls import path

urlpatterns =[

    path('addProbablity/',views.addProbablity),
    path('getProbablity/',views.getProbablity),
    path('updateRisk/<str:probablity>/',views.updateProbablity),
    path('deleteRisk/<str:probablity>/',views.deleteProbablity)
    
]