from django.db import models

class Parameter(models.Model):
    """Model For The Parameter for Projects """

    parameter = models.CharField(max_length=100)
    value = models.CharField(max_length=100)
    is_displayed = models.BooleanField(default=True)
    published_on = models.DateField(auto_now_add=True)

    def __str__(self):
        return f'Parameter - "{self.parameter}"'
