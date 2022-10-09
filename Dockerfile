FROM node

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 10000

CMD [ "node", "app.js" ]