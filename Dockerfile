FROM node:lts

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]

RUN npm install

COPY . .

VOLUME /app/logs

CMD ["npm", "start"]
