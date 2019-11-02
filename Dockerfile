FROM node:12.13.0-alpine
WORKDIR /usr/src/app

COPY package.js
RUN npm install

COPY src /app

CMD ["node", "insex.js"]