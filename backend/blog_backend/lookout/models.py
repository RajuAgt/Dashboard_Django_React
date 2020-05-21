from django.db import models

class Lookout(models.Model):
    """Model For The Deliverable for Projects """

    lookout = models.CharField(max_length=500)
    publishDate = models.DateField(null=True, blank=True)
    is_displayed = models.BooleanField(default=True)
    published_on = models.DateField(auto_now_add=True)

    def __str__(self):
        return f'Lookout - "{self.lookout}"'
