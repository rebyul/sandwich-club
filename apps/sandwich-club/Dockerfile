FROM node:lts-alpine as BUILDER
WORKDIR /app
COPY ./dist/apps/sandwich-club .
RUN npm install --only=prod

FROM nginx:1-alpine
WORKDIR /usr/share/nginx/html
COPY --from=BUILDER /app ./
COPY ./apps/sandwich-club/nginx.conf /etc/nginx/nginx.conf
