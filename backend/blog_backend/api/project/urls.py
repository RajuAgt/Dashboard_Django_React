from django.urls import path

from . import views

urlpatterns = [
    path('', views.ProjectListView.as_view()),
    path('view/<slug>/', views.ProjectDetailView.as_view(), name='project-detail'),
]
