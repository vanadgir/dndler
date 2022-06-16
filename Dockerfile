FROM node:17-alpine3.14 as build

WORKDIR /app
COPY packages/client/package.json ./
RUN yarn install
COPY packages/client/ ./
RUN yarn build

FROM node:17-alpine3.14

ENV NODE_ENV="production"
WORKDIR /usr/src/app
COPY packages/server/package.json package.json
COPY packages/server/app.js app.js
COPY packages/server/generators/* generators/
COPY packages/server/data/*.js data/
COPY packages/server/config/ config/
COPY packages/server/routes/ routes/
COPY --from=build /app/build client/
RUN ["yarn", "install"]
EXPOSE 8000
ENTRYPOINT [ "yarn", "start" ]