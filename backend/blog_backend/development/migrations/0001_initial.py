# Generated by Django 2.0.5 on 2020-05-13 20:27

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('project', '0002_project_clientmanager'),
    ]

    operations = [
        migrations.CreateModel(
            name='Development',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('brg', models.TextField(max_length=20)),
                ('toDO', models.TextField(blank=True, max_length=100, null=True)),
                ('coding', models.TextField(blank=True, max_length=100, null=True)),
                ('codeReview', models.TextField(blank=True, max_length=100, null=True)),
                ('deployment', models.TextField(blank=True, max_length=100, null=True)),
                ('unitTesting', models.TextField(blank=True, max_length=100, null=True)),
                ('peerTesting', models.TextField(blank=True, max_length=100, null=True)),
                ('planPercent', models.DecimalField(decimal_places=2, max_digits=5)),
                ('actualPercent', models.DecimalField(decimal_places=2, max_digits=5)),
                ('is_displayed', models.BooleanField(default=True)),
                ('published_on', models.DateTimeField(auto_now_add=True)),
                ('project', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='developments', related_query_name='development', to='project.Project')),
            ],
        ),
    ]
