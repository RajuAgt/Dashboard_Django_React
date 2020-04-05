from django.urls import path

from .project import views as project_views
from .user_profile import views as user_profile_views

urlpatterns = [
    path('profile/', user_profile_views.UserProfileView.as_view()),
    path('user-status/', user_profile_views.UserStatusView.as_view()),
    #Updated
    path('create-new-project/', project_views.project_create_view),
    path('project-list/', project_views.ProjectListView.as_view()),
    path('update-project/', project_views.project_update_view),
    path('delete-project/', project_views.project_delete_view),
]
