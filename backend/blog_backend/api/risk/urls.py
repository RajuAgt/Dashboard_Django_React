from django.urls import path

from . import views as risk_views

urlpatterns = [
    path('<slug>/', risk_views.risk_list_view),
    path('create/<slug>/', risk_views.risk_create_view),
]
