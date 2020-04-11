from django.db import models

from project.models import Project


class Issue(models.Model):
    """Model For The Issues for Projects"""

    issueName = models.CharField(max_length=100)
    email = models.EmailField()
    website = models.URLField(blank=True, null=True)
    issueBody = models.TextField()
    project = models.ForeignKey(Project, on_delete=models.CASCADE,
                             related_name='issues', related_query_name='issue')
    is_displayed = models.BooleanField(default=True)
    published_on = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Post - "{self.project.projectTitle}", Body - "{self.issueBody}"'
