########## Build Stage ##########
FROM node:24-alpine AS builder

WORKDIR /app

# Copy dependency files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

ARG VITE_APP_URL
ENV VITE_APP_URL=$VITE_APP_URL

# Build Vite app
RUN npm run build


########## Production Stage ##########
FROM nginx:stable-alpine AS production

# Remove default nginx files
RUN rm -rf /usr/share/nginx/html/*

# Copy build output
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose nginx port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]