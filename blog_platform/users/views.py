from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from rest_framework.permissions import AllowAny

@api_view(['POST'])
def register(request):
    if request.method == 'POST':
        username = request.data['username']
        password = request.data['password']
        user = User.objects.create_user(username=username, password=password)
        user.save()
        return Response({"message": "User created successfully!"}, status=status.HTTP_201_CREATED)
