FROM node:10.13.0-alpine

WORKDIR /app
COPY package.json package-lock.json /app/
RUN npm ci
COPY . .

CMD ["npm", "run", "start"]

# docker run -p 3005:3005 -v $(pwd)/schema.graphql:/app/schema.graphql devmasx/graphql-server-mock
