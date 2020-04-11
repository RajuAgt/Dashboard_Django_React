from django.urls import path

from . import views as issue_views

urlpatterns = [
    path('<slug>/', issue_views.issue_list_view),
    path('create/<slug>/', issue_views.issue_create_view),
]
