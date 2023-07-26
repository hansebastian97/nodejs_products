# Placeholder
FROM node:current-alpine3.18
WORKDIR srv/service_products
COPY package.json .
RUN npm install
COPY . .
EXPOSE 8002
CMD ["npm", "run", "start"]