from django.db import models

from project.models import Project


class Action(models.Model):
    """Model For The Actions for Projects"""

    actionName = models.CharField(max_length=100)
    email = models.EmailField()
    website = models.URLField(blank=True, null=True)
    actionBody = models.TextField()
    project = models.ForeignKey(Project, on_delete=models.CASCADE,
                             related_name='actions', related_query_name='action')
    is_displayed = models.BooleanField(default=True)
    published_on = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Post - "{self.project.projectTitle}", Body - "{self.actionBody}"'
