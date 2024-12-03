from django.db import models
from django.contrib.auth.models import User

class Post(models.Model):
    title = models.CharField(max_length=256)
    content = models.TextField()
    author = models.ForeignKey(User, default=1, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    summarize=models.TextField(null=True)
    def __str__(self):
        return self.title
