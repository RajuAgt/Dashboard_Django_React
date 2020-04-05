from rest_framework import generics

from task.models import Task
from .serializers import TaskListSerializer, TaskDetailSerializer
from rest_framework_jwt.authentication import JSONWebTokenAuthentication
from rest_framework.permissions import IsAdminUser
from rest_framework import status
from rest_framework.response import Response


class AllTasksListView(generics.ListAPIView):
    """View For Listing All The Tasks"""

    queryset = Task.objects.all().order_by('-published_on')
    serializer_class = TaskListSerializer
    permission_classes = (IsAdminUser,)
    authentication_classes = (JSONWebTokenAuthentication,)


class TaskDetailView(generics.RetrieveUpdateDestroyAPIView):
    """View To Get The Details Of A Task"""

    queryset = Task.objects.all()
    serializer_class = TaskDetailSerializer
    permission_classes = (IsAdminUser,)
    authentication_classes = (JSONWebTokenAuthentication,)


class ProjectTasksListView(generics.ListAPIView):
    """View To Get The List Of Tasks Of A Particular Project"""

    def get(self, request, *args, **kwargs):
        queryset = Task.objects.filter(
            project__slug=kwargs.get('slug')).order_by('-published_on')
        serializer = TaskListSerializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
