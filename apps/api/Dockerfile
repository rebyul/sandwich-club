FROM npm-base:nx-base AS builder
ARG NODE_ENV
ARG BUILD_FLAG
WORKDIR /source
RUN npx nx build api ${BUILD_FLAG}

FROM node:current

WORKDIR /app
COPY --from=builder /source/dist/apps/api ./api
COPY --from=builder /source/node_modules ./api/node_modules
ENV NODE_ENV=$NODE_ENV

CMD ["node", "./api/main.js"]
