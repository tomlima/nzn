FROM node:14 as builder

ARG NODE_ENV

ENV NODE_ENV=${NODE_ENV}}

WORKDIR /app

COPY package*.json /

RUN npm install

COPY . .

RUN npm run build

EXPOSE 1337

CMD [ "npm", "start" ]


