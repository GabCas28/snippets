FROM node:14.18 as node

WORKDIR /frontend

RUN npm install -g @angular/cli 

COPY frontend/. .
