FROM node:lts-alpine
WORKDIR /app
COPY ./dist/apps/api .
ENV PORT=3001
EXPOSE ${PORT}
RUN npm install --only=prod
ENTRYPOINT [ "node", "./main.js" ]
