from rest_framework import generics

from deliverable.models import Deliverable
from .serializers import DeliverableListSerializer, DeliverableDetailSerializer
from rest_framework_jwt.authentication import JSONWebTokenAuthentication
from rest_framework.permissions import IsAdminUser
from rest_framework import status
from rest_framework.response import Response


class AllDeliverablesListView(generics.ListAPIView):
    """View For Listing All The Deliverables"""

    queryset = Deliverable.objects.all().order_by('-published_on')
    serializer_class = DeliverableListSerializer
    permission_classes = (IsAdminUser,)
    authentication_classes = (JSONWebTokenAuthentication,)


class DeliverableDetailView(generics.RetrieveUpdateDestroyAPIView):
    """View To Get The Details Of A Deliverable"""

    queryset = Deliverable.objects.all()
    serializer_class = DeliverableDetailSerializer
    permission_classes = (IsAdminUser,)
    authentication_classes = (JSONWebTokenAuthentication,)


class DeliverableTasksListView(generics.ListAPIView):
    """View To Get The List Of Deliverables Of A Particular Project"""

    def get(self, request, *args, **kwargs):
        queryset = Deliverable.objects.filter(
            project__slug=kwargs.get('slug')).order_by('-published_on')
        serializer = DeliverableListSerializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
