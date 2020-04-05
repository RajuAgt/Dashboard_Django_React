from django.contrib.auth import get_user_model

from rest_framework import serializers

from project.models import Project

User = get_user_model()


class AdminProjectDetailSerializer(serializers.ModelSerializer):
    """Serializer To List Details Of A Project In The For Admin Panel"""

    class Meta:
        model = Project
        fields = '__all__'


class AdminProjectListSerializer(serializers.ModelSerializer):
    """Serializer To List All Project In The Database For Admin Panel"""

    class Meta:
        model = Project
        fields = ['projectTitle', 'author_full_name',
                  'slug', 'is_published', 'total_tasks']
