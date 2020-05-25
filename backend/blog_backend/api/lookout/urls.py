from django.urls import path

from . import views as lookout_views

urlpatterns = [
    path('', lookout_views.lookout_list_view),
    path('create/<slug>/', lookout_views.lookout_create_view),
]
