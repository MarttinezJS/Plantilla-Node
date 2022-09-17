FROM node:alpine
EXPOSE 25025
WORKDIR /app
COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

ENTRYPOINT [ "npm", "start"]