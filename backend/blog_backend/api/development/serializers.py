from rest_framework import serializers

from development.models import Development


class DevelopmentSerializer(serializers.ModelSerializer):
    """DRF Serializer For Listing Published Development"""

    class Meta:
        model = Development
        fields = ['brg', 'toDO', 'coding', 'codeReview', 'deployment', 'unitTesting', 'peerTesting',
        'planPercent', 'actualPercent', 'published_on']


class DevelopmentCreateSerializer(serializers.ModelSerializer):
    """DRF Serializer Fpr Creating Developments By The User"""

    class Meta:
        model = Development
        fields = ['brg', 'toDO', 'project', 'coding', 'codeReview', 'deployment', 'unitTesting', 'peerTesting',
        'planPercent', 'actualPercent']
