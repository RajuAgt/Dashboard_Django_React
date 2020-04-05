from rest_framework import generics

from .serializers import ProjectListSerializer, ProjectDetailSerializer
from project.models import Project

class ProjectListView(generics.ListAPIView):
    """View For List All Published Projects"""

    queryset = Project.objects.filter(is_published=True)
    serializer_class = ProjectListSerializer
    lookup_field = 'slug'


class ProjectDetailView(generics.RetrieveAPIView):
    """View For The Details Of A Single Post"""

    queryset = Project.objects.all()
    serializer_class = ProjectDetailSerializer
    lookup_field = 'slug'
