from django.contrib import admin

from .models import *


@admin.register(UserModel)
class UserModelAdmin(admin.ModelAdmin):
    list_display = ['id', 'email', "familyName", "givenName", "googleId", "imageUrl", "name"]


@admin.register(PrintingHistory)
class PrintingHistoryAdmin(admin.ModelAdmin):
    list_display = ['id', 'googleId', "print_date", "pages_printed", "document_name", "document_type",
                    "page_type", "num_pages", "is_two_sides", "department", "floors", "printer_name"]


@admin.register(RemainingPages)
class RemainingPagesAdmin(admin.ModelAdmin):
    list_display = ['id', 'googleId', "remainder_pages"]
