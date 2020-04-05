from rest_framework import serializers

from task.models import Task


class TaskListSerializer(serializers.ModelSerializer):
    """DRF Serializer For Listing Tasks"""

    project_title = serializers.CharField(source='project.projectTitle')

    class Meta:
        model = Task
        fields = ['id', 'taskName', 'email', 'project_title',
                  'is_displayed', 'published_on']


class TaskDetailSerializer(serializers.ModelSerializer):
    """DRF Serializer For The Detail Of A Task"""

    project_title = serializers.CharField(source='project.projectTitle')

    class Meta:
        model = Task
        fields = ['taskName', 'email', 'website', 'taskBody',
                  'project_title', 'is_displayed', 'published_on']
