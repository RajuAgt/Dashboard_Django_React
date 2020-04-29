from django.db import models

from project.models import Project

RAG_OPTIONS = [
    ('Red', 'Red'),
    ('Amber', 'Amber'),
    ('Green', 'Green'),
]

class Phase(models.Model):
    """Model For The Phases of Projects"""

    projectPhase = models.TextField(max_length=100)
    startDate = models.DateTimeField(null=True, blank=True)
    endDate = models.DateTimeField(null=True, blank=True)
    startDateRev = models.DateTimeField(null=True, blank=True)
    endDateRev = models.DateTimeField(null=True, blank=True)
    duration = models.IntegerField(null=True)
    status = models.IntegerField(null=True)
    comments = models.CharField(max_length=100, null=True)
    statusRAG = models.CharField(max_length=10, choices = RAG_OPTIONS, null=True)
    project = models.ForeignKey(Project, on_delete=models.CASCADE,
                             related_name='phases', related_query_name='phase')
    is_displayed = models.BooleanField(default=True)
    published_on = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Post - "{self.project.projectTitle}", Body - "{self.projectPhase}"'
