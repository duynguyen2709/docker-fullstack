FROM node:16.17-alpine as module-install-stage
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json

RUN apk add yarn
RUN yarn install --production

# build
FROM node:16.17-alpine as build-stage
COPY --from=module-install-stage /app/node_modules/ /app/node_modules
WORKDIR /app
COPY . .
RUN yarn build