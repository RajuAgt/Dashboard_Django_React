from rest_framework import serializers

from action.models import Action


class ActionSerializer(serializers.ModelSerializer):
    """DRF Serializer For Listing Published Action"""

    class Meta:
        model = Action
        fields = ['actionName', 'website', 'actionBody', 'published_on']


class ActionCreateSerializer(serializers.ModelSerializer):
    """DRF Serializer Fpr Creating Actions By The User"""

    class Meta:
        model = Action
        fields = ['actionName', 'website', 'actionBody', 'project', 'email']
