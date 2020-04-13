# Generated by Django 2.0.5 on 2020-04-12 18:36

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('project', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Action',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('actionName', models.CharField(max_length=100)),
                ('actionBody', models.TextField()),
                ('assignedTo', models.CharField(max_length=100)),
                ('email', models.EmailField(max_length=254)),
                ('actionStatus', models.CharField(choices=[('New', 'New'), ('Open', 'Open'), ('In Progress', 'In Progress'), ('Closed', 'Closed')], max_length=20)),
                ('is_displayed', models.BooleanField(default=True)),
                ('published_on', models.DateTimeField(auto_now_add=True)),
                ('project', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='actions', related_query_name='action', to='project.Project')),
            ],
        ),
    ]