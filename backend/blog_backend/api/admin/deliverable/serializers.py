from rest_framework import serializers

from deliverable.models import Deliverable


class DeliverableListSerializer(serializers.ModelSerializer):
    """DRF Serializer For Listing Deliverables"""

    project_title = serializers.CharField(source='project.projectTitle')

    class Meta:
        model = Deliverable
        fields = ['id', 'deliverableName', 'email', 'project_title',
                  'is_displayed', 'published_on']


class DeliverableDetailSerializer(serializers.ModelSerializer):
    """DRF Serializer For The Detail Of A Deliverable"""

    project_title = serializers.CharField(source='project.projectTitle')

    class Meta:
        model = Deliverable
        fields = ['deliverableName', 'email', 'website', 'deliverableBody',
                  'project_title', 'is_displayed', 'published_on']
