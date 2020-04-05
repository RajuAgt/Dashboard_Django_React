from rest_framework import serializers

from project.models import Project


class ProjectCreateSerializer(serializers.ModelSerializer):
    """Serializer For Creating A Project For Logged In Users"""

    class Meta:
        model = Project
        fields = ('projectTitle', 'projectName', 'projectPhase', 'author')


class ProjectListSerializer(serializers.ModelSerializer):
    """Serializer For Listing Only Relevant Information
    Of Projects Of A Particular User"""

    total_tasks = serializers.IntegerField()

    class Meta:
        model = Project
        fields = ('projectTitle', 'is_published', 'slug',
                  'total_tasks', 'created_on')

class ProjectUpdateSerializer(serializers.ModelSerializer):
    """Serializer For Creating A Project For Logged In Users"""

    class Meta:
        model = Project
        fields = ('projectTitle', 'projectName', 'projectPhase')
