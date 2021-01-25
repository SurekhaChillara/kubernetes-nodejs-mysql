FROM node:latest

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json /usr/src/app/package.json

RUN npm i

COPY . /usr/src/app/

EXPOSE 9095

CMD [ "npm", "run" "dev"]

ENTRYPOINT ["sh", "/usr/local/bin/docker-entrypoint.sh"]

RUN ["chmod", "+x", "/usr/local/bin/docker-entrypoint.sh"]