from rest_framework.routers import DefaultRouter
from todo.views import TodoView


router = DefaultRouter()
router.register(r'todo', TodoView, basename='todo_list')

urlpatterns = router.urls