FROM node:latest

WORKDIR /usr/src/app

RUN npm install -g nodemon

COPY ./package-lock.json /usr/src/app
COPY ./package.json /usr/src/app

RUN npm install

COPY ./server.js /usr/src/app

EXPOSE 4555

CMD node ./server.js
