from django.urls import path

from .project import views as project_views
from .user import views as user_views
from .task import views as task_views
urlpatterns = [
    path('projects/', project_views.AdminProjectListView.as_view()),
    path('projects/view/<slug>/', project_views.AdminProjectDetailView.as_view()),
    path('users/', user_views.AdminUserListView.as_view()),
    path('users/detail/', user_views.AdminUserDetailView.as_view()),
    path('tasks/list/all/', task_views.AllTasksListView.as_view()),
    path('tasks/detail/<pk>/', task_views.TaskDetailView.as_view()),
    path('tasks/list/<slug>/', task_views.ProjectTasksListView.as_view()),
]
