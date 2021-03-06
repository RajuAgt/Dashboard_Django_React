# Generated by Django 2.0.5 on 2020-04-29 11:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('phase', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='phase',
            name='comments',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='phase',
            name='duration',
            field=models.IntegerField(null=True),
        ),
        migrations.AddField(
            model_name='phase',
            name='endDateRev',
            field=models.DateTimeField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='phase',
            name='startDateRev',
            field=models.DateTimeField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='phase',
            name='statusRAG',
            field=models.CharField(choices=[('Red', 'Red'), ('Amber', 'Amber'), ('Green', 'Green')], max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='phase',
            name='status',
            field=models.IntegerField(null=True),
        ),
    ]
