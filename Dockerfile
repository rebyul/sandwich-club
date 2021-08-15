FROM node:current
ARG NODE_ENV
ARG BUILD_FLAG
WORKDIR /source
COPY . .
RUN npm i