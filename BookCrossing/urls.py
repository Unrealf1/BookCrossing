"""BookCrossing URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from book_crossing.views import *

router1 = routers.DefaultRouter()
router1.register('author', AuthorViewSet)
router2 = routers.DefaultRouter()
router2.register('user', UserViewSet)
router3 = routers.DefaultRouter()
router3.register('wanted_book', WantedBookViewSet)
router4 = routers.DefaultRouter()
router4.register('fav_author', FavoriteAuthorViewSet)
router5 = routers.DefaultRouter()
router5.register('book_author', BookAuthorViewSet)
router6 = routers.DefaultRouter()
router6.register('borrow_req', BorrowRequestViewSet)
router7 = routers.DefaultRouter()
router7.register('exchange_req', ExchangeRequestViewSet)
router8 = routers.DefaultRouter()
router8.register('book', BookViewSet)

urlpatterns = [
    path('api/', include(router1.urls)),
    path('api/', include(router2.urls)),
    path('api/', include(router3.urls)),
    path('api/', include(router4.urls)),
    path('api/', include(router5.urls)),
    path('api/', include(router6.urls)),
    path('api/', include(router7.urls)),
    path('api/', include(router8.urls)),
    path('admin/', admin.site.urls),
]
