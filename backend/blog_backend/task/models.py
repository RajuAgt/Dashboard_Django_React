from django.db import models

from project.models import Project


class Task(models.Model):
    """Model For The Tasks for Projects"""

    taskName = models.CharField(max_length=100)
    email = models.EmailField()
    website = models.URLField(blank=True, null=True)
    taskBody = models.TextField()
    project = models.ForeignKey(Project, on_delete=models.CASCADE,
                             related_name='tasks', related_query_name='task')
    is_displayed = models.BooleanField(default=True)
    published_on = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Post - "{self.project.projectTitle}", Body - "{self.taskBody}"'
