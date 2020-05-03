from rest_framework import serializers

from project.models import Project
from api.task.serializers import TaskSerializer


class ProjectListSerializer(serializers.ModelSerializer):
    """DRF Serializer Listing All The Blog Projects"""

    total_tasks = serializers.IntegerField()
    author_full_name = serializers.CharField()

    class Meta:
        model = Project
        fields = ['slug', 'projectTitle', 'projectName', 'total_tasks',
        'author_full_name', 'clientManager', 'published_on', 'last_edited']


class ProjectDetailSerializer(serializers.ModelSerializer):
    """DRF Serializer For Details Of The Blog Projects"""

    tasks_list = TaskSerializer(many=True)
    total_tasks = serializers.IntegerField()
    author_full_name = serializers.CharField()

    class Meta:
        model = Project
        fields = ['slug', 'projectTitle', 'projectName', 'author_full_name', 'clientManager',
                  'published_on', 'tasks_list', 'projectName', 'total_tasks', 'last_edited']
