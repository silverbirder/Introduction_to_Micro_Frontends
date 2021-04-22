FROM node:14.16.0-alpine

WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .
RUN npm config set @bit:registry https://node.bit.dev
RUN npm install

COPY . .

EXPOSE 3000

CMD npm run start
