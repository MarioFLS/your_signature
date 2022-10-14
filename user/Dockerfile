FROM node:16-alpine

WORKDIR /app

COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .

EXPOSE 4100

CMD [ "npm", "install" ]