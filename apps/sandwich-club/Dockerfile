FROM sandwich-club/nx-base AS nxbase

ARG NODE_ENV
ARG BUILD_FLAG
WORKDIR /source
RUN npx nx build sandwich-club ${BUILD_FLAG}

FROM nginx:1-alpine

WORKDIR /usr/share/nginx/html

COPY --from=nxbase /source/dist/apps/sandwich-club ./
COPY --from=nxbase /source/apps/sandwich-club/nginx.conf /etc/nginx/nginx.conf
