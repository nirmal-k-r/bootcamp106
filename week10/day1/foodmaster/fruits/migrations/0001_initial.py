# Generated by Django 4.2.5 on 2025-01-30 15:17

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Fruit',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=100)),
                ('color', models.CharField(max_length=100)),
                ('weight', models.FloatField()),
                ('price', models.FloatField()),
            ],
        ),
    ]
