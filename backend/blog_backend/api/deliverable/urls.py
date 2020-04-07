from django.urls import path

from . import views as deliverable_views

urlpatterns = [
    path('<slug>/', deliverable_views.deliverable_list_view),
    path('create/<slug>/', deliverable_views.deliverable_create_view),
]
