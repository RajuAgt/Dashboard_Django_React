from django.db import models

from project.models import Project

ACTION_STATUS = [
    ('New', 'New'),
    ('Open', 'Open'),
    ('In Progress', 'In Progress'),
    ('Closed', 'Closed'),
]

class Action(models.Model):
    """Model For The Actions for Projects"""

    actionName = models.CharField(max_length=100)
    actionBody = models.TextField()
    assignedTo = models.CharField(max_length=100)
    email = models.EmailField()
    actionStatus = models.CharField(max_length=20, choices = ACTION_STATUS)
    project = models.ForeignKey(Project, on_delete=models.CASCADE,
                             related_name='actions', related_query_name='action')
    is_displayed = models.BooleanField(default=True)
    published_on = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Post - "{self.project.projectTitle}", Body - "{self.actionBody}"'
