# Generated by Django 2.0.5 on 2020-05-24 22:05

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Lookout',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('lookout', models.CharField(max_length=500)),
                ('publishDate', models.DateField(blank=True, null=True)),
                ('is_displayed', models.BooleanField(default=True)),
                ('published_on', models.DateField(auto_now_add=True)),
            ],
        ),
    ]
