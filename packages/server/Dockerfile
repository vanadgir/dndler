FROM node:17-alpine3.14

ENV NODE_ENV="production"
WORKDIR /usr/src/server
COPY package.json package.json
COPY index.js index.js
COPY generators/* generators/
COPY data/*.js data/
RUN ["yarn", "install"]
EXPOSE 8000
ENTRYPOINT [ "yarn", "start" ]