FROM node:latest

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json /usr/src/app/package.json

RUN npm install \
 && npm install express \
 && npm install mysql

COPY . /usr/src/app/

EXPOSE 9191

ENTRYPOINT [ "npm","run","dev"]
# CMD [ "npm", "run" "dev"]