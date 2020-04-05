from django.contrib import admin

from .models import Project
from task.models import Task


class TaskInline(admin.StackedInline):
    model = Task


class ProjectAdmin(admin.ModelAdmin):

    def project_task_count(self, obj):
        return Task.objects.filter(project=obj).count()

    project_task_count.short_description = 'Total Tasks'

    inlines = [
        TaskInline,
    ]
    list_display = ['projectTitle', 'projectName', 'is_published', 'project_task_count']


admin.site.register(Project, ProjectAdmin)
