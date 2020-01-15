from django.shortcuts import render
from .models import *
from django.http import Http404, HttpResponseRedirect
from rest_framework import viewsets
from .serializers import *


class AuthorViewSet(viewsets.ModelViewSet):
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer

    def perform_create(self, serializer):
        serializer.save()


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def perform_create(self, serializer):
        serializer.save()


class WantedBookViewSet(viewsets.ModelViewSet):
    queryset = WantedBook.objects.all()
    serializer_class = WantedBookSerializer

    def perform_create(self, serializer):
        serializer.save()


class FavoriteAuthorViewSet(viewsets.ModelViewSet):
    queryset = FavouriteAuthor.objects.all()
    serializer_class = FavouriteAuthorSerializer

    def perform_create(self, serializer):
        serializer.save()


class BookAuthorViewSet(viewsets.ModelViewSet):
    queryset = BookAuthor.objects.all()
    serializer_class = BookAuthorSerializer

    def perform_create(self, serializer):
        serializer.save()


class BorrowRequestViewSet(viewsets.ModelViewSet):
    queryset = BorrowRequest.objects.all()
    serializer_class = BorrowRequestSerializer

    def perform_create(self, serializer):
        serializer.save()


class ExchangeRequestViewSet(viewsets.ModelViewSet):
    queryset = ExchangeRequest.objects.all()
    serializer_class = ExchangeRequestSerializer

    def perform_create(self, serializer):
        serializer.save()