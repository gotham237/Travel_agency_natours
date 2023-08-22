FROM node:16

USER node

RUN mkdir -p home/node/app
WORKDIR home/node/app

COPY --chown=node:node ./package.json ./
COPY --chown=node:node ./package-lock.json ./

RUN npm ci

COPY --chown=node:node ./ ./

EXPOSE 3000

CMD ["npm", "run", "start"]
