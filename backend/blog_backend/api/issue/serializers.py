from rest_framework import serializers

from issue.models import Issue


class IssueSerializer(serializers.ModelSerializer):
    """DRF Serializer For Listing Published Issue"""

    class Meta:
        model = Issue
        fields = ['issueName', 'website', 'issueBody', 'impact', 'published_on']


class IssueCreateSerializer(serializers.ModelSerializer):
    """DRF Serializer Fpr Creating Issues By The User"""

    class Meta:
        model = Issue
        fields = ['issueName', 'website', 'issueBody', 'impact', 'project', 'email']


class IssueStatusSerializer(serializers.ModelSerializer):
    """DRF Serializer For Listing Published Issue"""

    class Meta:
        model = Issue
        fields = ['impact', 'angle', 'name']
