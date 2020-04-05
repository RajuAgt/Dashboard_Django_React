from rest_framework import serializers

from task.models import Task


class TaskSerializer(serializers.ModelSerializer):
    """DRF Serializer For Listing Published Task"""

    class Meta:
        model = Task
        fields = ['taskName', 'website', 'taskBody', 'published_on']


class TaskCreateSerializer(serializers.ModelSerializer):
    """DRF Serializer Fpr Creating Tasks By The User"""

    class Meta:
        model = Task
        fields = ['taskName', 'website', 'taskBody', 'project', 'email']
