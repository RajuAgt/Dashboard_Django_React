from django.shortcuts import get_object_or_404

from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .serializers import LookoutSerializer, LookoutCreateSerializer
from lookout.models import Lookout
#from project.models import Project


@api_view(['GET'])
def lookout_list_view(request):
    #project_instance = get_object_or_404(Project, slug=slug)
    lookout_list = Lookout.objects.filter(is_displayed=True)
    serializer = LookoutSerializer(lookout_list, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['POST'])
def lookout_create_view(request, slug):
    #project_instance = get_object_or_404(Project, slug=slug)
    request.data['project'] = project_instance.pk
    serializer = LookoutCreateSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
