from django.contrib import admin

from .models import Project
from task.models import Task
from deliverable.models import Deliverable
from risk.models import Risk
from action.models import Action
from issue.models import Issue


class TaskInline(admin.StackedInline):
    model = Task

class DeliverableInline(admin.StackedInline):
    model = Deliverable

class RiskInline(admin.StackedInline):
    model = Risk

class ActionInline(admin.StackedInline):
    model = Action

class IssueInline(admin.StackedInline):
    model = Issue

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

    # Risk
    def project_risk_count(self, obj):
        return Risk.objects.filter(project=obj).count()

    project_risk_count.short_description = 'Total Risk'

    inlines = [
        RiskInline,
    ]
    list_display = ['projectTitle', 'projectName', 'is_published', 'project_risk_count']

    # Action
    def project_action_count(self, obj):
        return Action.objects.filter(project=obj).count()

    project_action_count.short_description = 'Total Action'

    inlines = [
        ActionInline,
    ]
    list_display = ['projectTitle', 'projectName', 'is_published', 'project_action_count']

    # Issue
    def project_issue_count(self, obj):
        return Issue.objects.filter(project=obj).count()

    project_issue_count.short_description = 'Total Issue'

    inlines = [
        IssueInline,
    ]
    list_display = ['projectTitle', 'projectName', 'is_published', 'project_issue_count']


admin.site.register(Project, ProjectAdmin)
