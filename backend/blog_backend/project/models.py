from django.db import models
from django.contrib.auth import get_user_model
from django.db.models.signals import post_save, pre_save
from django.dispatch import receiver
from django.utils import timezone

from .utils import unique_slug_generator


User = get_user_model()


class Project(models.Model):
    """Model For Projects"""

    projectTitle = models.CharField(max_length=100)
    projectName = models.TextField()
    projectPhase = models.TextField(max_length=255)
    startDate = models.DateTimeField(null=True, blank=True)
    endDate = models.DateTimeField(null=True, blank=True)
    status = models.TextField()
    author = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='projects', related_query_name='project')
    slug = models.SlugField(blank=True, null=True)
    is_published = models.BooleanField(default=False)
    created_on = models.DateTimeField(auto_now_add=True)
    published_on = models.DateTimeField(null=True, blank=True)
    last_edited = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.projectTitle

    # Tasks
    @property
    def tasks_list(self):
        return self.tasks.filter(is_displayed=True)

    @property
    def total_tasks(self):
        return self.tasks_list.count()

    # Deliverable
    @property
    def deliverables_list(self):
        return self.deliverables.filter(is_displayed=True)

    @property
    def total_deliverables(self):
        return self.deliverables.count()

    # Risks
    @property
    def risks_list(self):
        return self.risks.filter(is_displayed=True)

    @property
    def total_risks(self):
        return self.risks_list.count()

    # Actions
    @property
    def actions_list(self):
        return self.actions.filter(is_displayed=True)

    @property
    def total_actions(self):
        return self.actions_list.count()

    # Issues
    @property
    def issues_list(self):
        return self.issues.filter(is_displayed=True)

    @property
    def total_issues(self):
        return self.issues_list.count()


    @property
    def author_full_name(self):
        try:
            return f'{self.author.first_name} {self.author.last_name}'
        except:
            return "Name Not Set"

    class Meta:
        indexes = [models.Index(fields=['slug'])]
        ordering = ['-published_on']


@receiver(post_save, sender=Project)
def generate_unique_slug_for_project(sender, instance, created, *args, **kwargs):

    if created:
        instance.slug = unique_slug_generator(instance)
        instance.save()


@receiver(pre_save, sender=Project)
def update_published_on(sender, instance, **kwargs):
    """Update The Date Of 'Published On' When The Project Gets Published"""

    if instance.id:
        old_value = Project.objects.get(pk=instance.id).published_on
        if not old_value:
            instance.published_on = timezone.now()
