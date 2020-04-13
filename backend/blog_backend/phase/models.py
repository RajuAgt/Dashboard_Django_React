from django.db import models

from project.models import Project


class Phase(models.Model):
    """Model For The Phases of Projects"""

    projectPhase = models.TextField(max_length=100)
    startDate = models.DateTimeField(null=True, blank=True)
    endDate = models.DateTimeField(null=True, blank=True)
    status = models.IntegerField()
    project = models.ForeignKey(Project, on_delete=models.CASCADE,
                             related_name='phases', related_query_name='phase')
    is_displayed = models.BooleanField(default=True)
    published_on = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Post - "{self.project.projectTitle}", Body - "{self.projectPhase}"'
