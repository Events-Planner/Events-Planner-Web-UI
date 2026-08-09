# Stage 1: Build static assets using Node.js
FROM node:20-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .

# Mount the dynamically generated .env file during build
RUN --mount=type=secret,id=env,target=/app/.env npm run build

# Stage 2: Serve static files using Nginx
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]