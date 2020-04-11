from rest_framework import serializers

from risk.models import Risk


class RiskSerializer(serializers.ModelSerializer):
    """DRF Serializer For Listing Published Risk"""

    class Meta:
        model = Risk
        fields = ['riskName', 'website', 'riskBody', 'published_on']


class RiskCreateSerializer(serializers.ModelSerializer):
    """DRF Serializer Fpr Creating Risks By The User"""

    class Meta:
        model = Risk
        fields = ['riskName', 'website', 'riskBody', 'project', 'email']
