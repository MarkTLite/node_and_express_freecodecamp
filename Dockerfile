# syntax=docker/dockerfile:1

FROM node:12.18.1
ENV NODE_ENV=production


WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production
RUN npm install express
RUN npm install dotenv

COPY . .

CMD [ "node", "server.js" ]