FROM node:18.16-alpine

ENV MONGO_DB_USERNAME=admin \
    MONGO_DB_PASSWORD=password

RUN mkdir -p /home/app

WORKDIR /home/app
COPY . /home/app

RUN npm install

CMD ["node", "/home/app/index.js"]
