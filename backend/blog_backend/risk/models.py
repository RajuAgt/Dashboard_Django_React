from django.db import models

from project.models import Project

IMPACT_OPTIONS = [
    ('High', 'High'),
    ('Medium', 'Medium'),
    ('Low', 'Low'),
]
PROB_OPTIONS = [
    ('High', 'High'),
    ('Medium', 'Medium'),
    ('Low', 'Low'),
]

class Risk(models.Model):
    """Model For The Risks for Projects"""

    riskName = models.CharField(max_length=100)
    riskBody = models.TextField()
    phaseDetected = models.CharField(max_length=50)
    impact = models.CharField(max_length=20, choices = IMPACT_OPTIONS)
    probability = models.CharField(max_length=20, choices = PROB_OPTIONS)
    owner = models.CharField(max_length=50)
    prjectPhase = models.CharField(max_length=50)
    mitigation = models.TextField()
    impactDate = models.DateTimeField()
    project = models.ForeignKey(Project, on_delete=models.CASCADE,
                             related_name='risks', related_query_name='risk')
    is_displayed = models.BooleanField(default=True)
    published_on = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Post - "{self.project.projectTitle}", Body - "{self.riskBody}"'
