# Generated by Django 4.1.10 on 2023-08-08 15:37

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ("printingRestFullAPI", "0004_profile"),
    ]

    operations = [
        migrations.AlterField(
            model_name="profile",
            name="user",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                related_name="userprofile",
                to=settings.AUTH_USER_MODEL,
            ),
        ),
    ]