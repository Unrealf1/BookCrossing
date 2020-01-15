# Create your models here.
from django.db import models

# this 2 will be deleted later


class Article(models.Model):
    article_title = models.CharField('название статьи', max_length=200)
    article_text = models.TextField('текст статьи')
    pub_date = models.DateTimeField('дата публикации')


class Comment(models.Model):
    article = models.ForeignKey(Article, on_delete=models.CASCADE)
    author_name = models.CharField('имя автора', max_length=50)
    comment_text = models.CharField('текст клмментария', max_length=200)


#  my project

class Author(models.Model):
    id = models.IntegerField('id автора', primary_key=True)
    name = models.CharField('имя автора', max_length=100)
    name2 = models.CharField('имя автора на другом языке', max_length=100)

    def __str__(self):
        return self.name


class User(models.Model):
    id = models.IntegerField('id пользователя', primary_key=True)
    login = models.CharField('логин', max_length=30)
    password_hash = models.CharField('password hash', max_length=256)
    mail_index = models.IntegerField('почтовый индекс')  # мб будет адрес, еще подумаем
    user_chosen_info = models.CharField('то, что пользователь заполняет сам', max_length=200)


class WantedBook(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    author_id = models.ForeignKey(Author, on_delete=models.CASCADE)
    name = models.CharField('имя книги', max_length=100)


class FavouriteAuthor(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    author_id = models.ForeignKey(Author, on_delete=models.CASCADE)


class Book(models.Model):
    id = models.IntegerField('id книги', primary_key=True)
    name = models.CharField('название книги', max_length=100)
    owner_id = models.ForeignKey(User, on_delete=models.CASCADE, related_name='owner_id')
    taken_by_id = models.ForeignKey(User, on_delete=models.CASCADE, related_name='taken_by_id')


class BookAuthor(models.Model):
    book_id = models.ForeignKey(Book, on_delete=models.CASCADE)
    author_id = models.ForeignKey(Author, on_delete=models.CASCADE)


class BorrowRequest(models.Model):
    book_id = models.ForeignKey(Book, on_delete=models.CASCADE)
    requester_id = models.ForeignKey(User, on_delete=models.CASCADE, related_name='requester_id')
    requestee_id = models.ForeignKey(User, on_delete=models.CASCADE, related_name='requestee_id')
    status = models.IntegerField('статус запроса')
    date = models.DateTimeField('дата и время запроса')
    user_text = models.CharField('текст пользователя при запросе', max_length=200)


class ExchangeRequest(models.Model):
    book_id = models.ForeignKey(Book, on_delete=models.CASCADE, related_name='book_id')
    exchange_book_id = models.ForeignKey(Book, on_delete=models.CASCADE, related_name='exchange_book_id')
    requester_id = models.ForeignKey(User, on_delete=models.CASCADE, related_name='requester_id_ex')
    requestee_id = models.ForeignKey(User, on_delete=models.CASCADE, related_name='requestee_id_ex')
    status = models.IntegerField('статус запроса')
    date = models.DateTimeField('дата и время запроса')
    user_text = models.CharField('текст пользователя при запросе', max_length=200)
