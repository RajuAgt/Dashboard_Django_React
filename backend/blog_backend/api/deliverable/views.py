from django.shortcuts import get_object_or_404

from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .serializers import DeliverableSerializer, DeliverableCreateSerializer
from deliverable.models import Deliverable
from project.models import Project


@api_view(['GET'])
def deliverable_list_view(request, slug):
    project_instance = get_object_or_404(Project, slug=slug)
    deliverable_list = Deliverable.objects.filter(
        project=project_instance, is_displayed=True)
    serializer = DeliverableSerializer(deliverable_list, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['POST'])
def deliverable_create_view(request, slug):
    project_instance = get_object_or_404(Project, slug=slug)
    request.data['project'] = project_instance.pk
    serializer = DeliverableCreateSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
