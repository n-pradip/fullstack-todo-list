from django.db import models

class TodoModel(models.Model):
    title = models.CharField(max_length=128)
    description = models.CharField(max_length=512)
    status = models.BooleanField(default=False)
    def __str__(self):
        return str(self.title) 