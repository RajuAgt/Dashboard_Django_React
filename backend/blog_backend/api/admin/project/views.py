from rest_framework import generics
from rest_framework.permissions import IsAdminUser
from rest_framework_jwt.authentication import JSONWebTokenAuthentication

from .serializers import AdminProjectDetailSerializer, AdminProjectListSerializer
from project.models import Project


class AdminProjectListView(generics.ListCreateAPIView):
    queryset = Project.objects.all().order_by('-created_on')
    serializer_class = AdminProjectListSerializer
    permission_classes = (IsAdminUser,)
    lookup_field = 'slug'
    authentication_classes = (JSONWebTokenAuthentication,)


class AdminProjectDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Project.objects.all()
    serializer_class = AdminProjectDetailSerializer
    permission_classes = (IsAdminUser,)
    authentication_classes = (JSONWebTokenAuthentication,)
    lookup_field = 'slug'
