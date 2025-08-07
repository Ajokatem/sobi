FROM node:18

WORKDIR /usr/src/app

COPY src/package*.json ./
RUN npm ci

COPY src/ .

EXPOSE 3000
CMD [ "node", "app.js" ]
