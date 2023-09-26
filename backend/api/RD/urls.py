from . import views
from django.urls import path

urlpatterns =[

    path('addRisk/',views.addRisk),
    path('getRisk/',views.getRisk),
    path('updateRisk/<int:riskid>/<str:riskname>/',views.updateRisk),
    path('deleteRisk/<int:riskid>/<str:riskname>/',views.deleteRisk)
    
]