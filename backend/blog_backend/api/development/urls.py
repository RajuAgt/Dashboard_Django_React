from django.urls import path

from . import views as development_views

urlpatterns = [
    path('<slug>/', development_views.development_list_view),
    path('create/<slug>/', development_views.development_create_view),
]
