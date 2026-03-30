FROM node:21-alpine3.19

# Instala o bash
RUN apk add --no-cache bash

# Define o usuário e o diretório de trabalho
ENV HOME=/home/js
WORKDIR $HOME
