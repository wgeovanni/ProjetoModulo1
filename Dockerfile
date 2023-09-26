FROM node:19.7 AS build

WORKDIR /app

COPY . .

RUN npm install

RUN npm run deploy

FROM nginx:1.24.0-alpine AS prod

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80