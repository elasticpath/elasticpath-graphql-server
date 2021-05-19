FROM node:16-alpine

WORKDIR /app/

COPY package.json .
COPY yarn.lock .
COPY build/dist/ .

RUN yarn install

EXPOSE 4000

CMD ["node", "/app/"]
