FROM node:16-alpine
RUN mkdir -p /app
WORKDIR /app
## RUN adduser -S app
COPY package.json /app/
RUN yarn install --only=production

COPY . /app/
RUN yarn build
EXPOSE 3000
CMD ["yarn", "start"]

