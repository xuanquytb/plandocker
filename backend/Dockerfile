FROM node:14-alpine

WORKDIR /cat/backend

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "npm","start" ]