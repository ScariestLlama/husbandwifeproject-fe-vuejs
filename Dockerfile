# Stage 1: Build the Vue application
FROM node:14 as build-stage
WORKDIR /app
COPY app/package*.json ./
RUN npm install
COPY app/. .
RUN npm run build

# Stage 2: Serve the app using nginx
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]