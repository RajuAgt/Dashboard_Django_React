from rest_framework import serializers

from phase.models import Phase


class PhaseSerializer(serializers.ModelSerializer):
    """DRF Serializer For Listing Published Phase"""

    class Meta:
        model = Phase
        fields = ['projectPhase', 'startDate', 'endDate', 'status', 'published_on']


class PhaseCreateSerializer(serializers.ModelSerializer):
    """DRF Serializer Fpr Creating Phases By The User"""

    class Meta:
        model = Phase
        fields = ['projectPhase', 'startDate', 'endDate', 'status', 'project']
