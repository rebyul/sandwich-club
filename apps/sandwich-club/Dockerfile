FROM npm-base:nx-base AS builder

ARG NODE_ENV
ARG BUILD_FLAG
WORKDIR /source
RUN npx nx build sandwich-club ${BUILD_FLAG}

FROM nginx:1-alpine

WORKDIR /usr/share/nginx/html

COPY --from=builder /source/dist/apps/sandwich-club ./
COPY --from=builder /source/apps/sandwich-club/nginx.conf /etc/nginx/nginx.conf