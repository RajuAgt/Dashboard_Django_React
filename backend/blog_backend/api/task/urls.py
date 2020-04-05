from django.urls import path

from . import views as task_views

urlpatterns = [
    path('<slug>/', task_views.task_list_view),
    path('create/<slug>/', task_views.task_create_view),
]
