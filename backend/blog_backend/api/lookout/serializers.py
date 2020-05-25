from rest_framework import serializers

from lookout.models import Lookout


class LookoutSerializer(serializers.ModelSerializer):
    """DRF Serializer For Listing Published Lookout"""

    class Meta:
        model = Lookout
        fields = ['lookout', 'publishDate',  'published_on']


class LookoutCreateSerializer(serializers.ModelSerializer):
    """DRF Serializer Fpr Creating Lookout By The User"""

    class Meta:
        model = Lookout
        fields = ['lookout', 'publishDate']
