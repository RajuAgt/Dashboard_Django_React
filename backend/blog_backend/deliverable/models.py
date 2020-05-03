from django.db import models

from project.models import Project

RAG_OPTIONS = [
    ('Red', 'Red'),
    ('Amber', 'Amber'),
    ('Green', 'Green'),
]

class Deliverable(models.Model):
    """Model For The Deliverable for Projects """

    deliverableName = models.CharField(max_length=100)
    deliverableBody = models.TextField()
    planDate = models.DateTimeField()
    reviseDate = models.DateTimeField()
    deliveredDate = models.DateTimeField(null=True, blank=True)
    comments = models.CharField(max_length=100)
    statusRAG = models.CharField(max_length=10, choices = RAG_OPTIONS)
    project = models.ForeignKey(Project, on_delete=models.CASCADE,
                             related_name='deliverables', related_query_name='deliverable')
    is_displayed = models.BooleanField(default=True)
    published_on = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Post - "{self.project.projectTitle}", Body - "{self.deliverableBody}"'
