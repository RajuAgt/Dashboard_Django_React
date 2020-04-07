from rest_framework import serializers

from task.models import Deliverable


class DeliverableSerializer(serializers.ModelSerializer):
    """DRF Serializer For Listing Published Deliverable"""

    class Meta:
        model = Deliverable
        fields = ['deliverableName', 'website', 'deliverableBody', 'published_on']


class DeliverableCreateSerializer(serializers.ModelSerializer):
    """DRF Serializer Fpr Creating Deliverables By The User"""

    class Meta:
        model = Deliverable
        fields = ['deliverableName', 'website', 'deliverableBody', 'project', 'email']
