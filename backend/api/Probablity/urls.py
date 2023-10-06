from . import views
from django.urls import path

urlpatterns =[

    path('addProbablity/',views.addProbablity),
    path('getProbablity/',views.getProbablity),
    path('updateRisk/<int:probablityid>/<str:probablityname>/',views.updateProbablity),
    path('deleteRisk/<int:probablityid>/<str:probablityname>/',views.deleteProbablity)
    
]