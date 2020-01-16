from rest_framework import serializers
from django.contrib.auth.models import User, AnonymousUser


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = AnonymousUser
        fields = ('username',)
