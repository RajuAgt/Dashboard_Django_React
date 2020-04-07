from django.contrib import admin

from .models import Project
from task.models import Task
from deliverable.models import Deliverable


class TaskInline(admin.StackedInline):
    model = Task

class DeliverableInline(admin.StackedInline):
    model = Deliverable

class ProjectAdmin(admin.ModelAdmin):

    def project_task_count(self, obj):
        return Task.objects.filter(project=obj).count()

    project_task_count.short_description = 'Total Tasks'

    inlines = [
        TaskInline,
    ]
    list_display = ['projectTitle', 'projectName', 'is_published', 'project_task_count']

    # Deliverable
    def project_deliverable_count(self, obj):
        return Deliverable.objects.filter(project=obj).count()

    project_deliverable_count.short_description = 'Total Deliverable'

    inlines = [
        DeliverableInline,
    ]
    list_display = ['projectTitle', 'projectName', 'is_published', 'project_deliverable_count']


admin.site.register(Project, ProjectAdmin)
