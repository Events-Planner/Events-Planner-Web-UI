# Stage 1: Build static assets using Node.js
FROM node:20-alpine AS build
WORKDIR /app

# Accept dynamic build arguments
ARG VITE_BASE_PATH=/
ARG ADMIN_UI_URL
ARG VITE_API_URL

# Expose as ENVs for Vite compilation
ENV VITE_BASE_PATH=$VITE_BASE_PATH
ENV ADMIN_UI_URL=$ADMIN_UI_URL
ENV VITE_API_URL=$VITE_API_URL

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve static files using Nginx
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]