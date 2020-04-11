from django.urls import path

from . import views as action_views

urlpatterns = [
    path('<slug>/', action_views.action_list_view),
    path('create/<slug>/', action_views.action_create_view),
]
