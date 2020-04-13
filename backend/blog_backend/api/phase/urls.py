from django.urls import path

from . import views as phase_views

urlpatterns = [
    path('<slug>/', phase_views.phase_list_view),
    path('create/<slug>/', phase_views.phase_create_view),
]
