from django.contrib import admin

# Register your models here.
from .models import *

# Register your models here.
admin.site.register(Article)
admin.site.register(Comment)
admin.site.register(Author)
admin.site.register(User)
admin.site.register(WantedBook)
admin.site.register(FavouriteAuthor)
admin.site.register(Book)
admin.site.register(BookAuthor)
admin.site.register(BorrowRequest)
admin.site.register(ExchangeRequest)
admin.site.register(RequestBookFront)
admin.site.register(RequestAddBook)
admin.site.register(Answers)
