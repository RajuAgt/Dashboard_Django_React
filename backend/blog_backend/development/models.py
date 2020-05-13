from django.db import models

from project.models import Project

class Development(models.Model):
    """Model For The Phases of Projects"""

    brg = models.CharField(max_length=20)
    toDO = models.CharField(max_length=100, null=True, blank=True)
    coding = models.CharField(max_length=100, null=True, blank=True)
    codeReview = models.CharField(max_length=100, null=True, blank=True)
    deployment = models.CharField(max_length=100, null=True, blank=True)
    unitTesting = models.CharField(max_length=100, null=True, blank=True)
    peerTesting = models.CharField(max_length=100, null=True, blank=True)
    planPercent = models.DecimalField(max_digits=5, decimal_places=2)
    actualPercent = models.DecimalField(max_digits=5, decimal_places=2)
    project = models.ForeignKey(Project, on_delete=models.CASCADE,
                             related_name='developments', related_query_name='development')
    is_displayed = models.BooleanField(default=True)
    published_on = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Post - "{self.project.projectTitle}", Body - "{self.brg}"'
