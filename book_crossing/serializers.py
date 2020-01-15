from rest_framework import serializers
from .models import *


class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Author
        fields = ('id', 'name', 'name2')


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'login', 'password_hash', 'mail_index', 'user_chosen_info')


class WantedBookSerializer(serializers.ModelSerializer):
    class Meta:
        model = WantedBook
        fields = ('user_id', 'author_id', 'name')


class FavouriteAuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = FavouriteAuthor
        fields = ('user_id', 'author_id')


class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ('id', 'name', 'owner_id', 'taken_by_id')


class BookAuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = BookAuthor
        fields = ('book_id', 'author_id')


class BorrowRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = BorrowRequest
        fields = ('book_id', 'requester_id', 'requestee_id', 'status', 'date', 'user_text')


class ExchangeRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExchangeRequest
        fields = ('book_id', 'exchange_book_id', 'requester_id', 'requestee_id', 'status', 'date', 'user_text')


class RequestBookFrontSerializer(serializers.ModelSerializer):
    class Meta:
        model = RequestBookFront
        fields = ('user_id', 'req_id')


class RequestAddBookSerializer(serializers.ModelSerializer):
    class Meta:
        model = RequestAddBook
        fields = ('username', 'name', 'author')


class AnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Answers
        fields = ('requested_id', 'name', 'author')
