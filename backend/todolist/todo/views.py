from rest_framework import viewsets
from todo.models import TodoModel
from todo.serializers import TodoSerializer

class TodoView(viewsets.ModelViewSet):
    queryset = TodoModel.objects.all()
    serializer_class = TodoSerializer