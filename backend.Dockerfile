FROM python:3.6

COPY ./django_rest django_rest

WORKDIR /django_rest

RUN pip install -r requirements.txt

RUN python manage.py migrate
