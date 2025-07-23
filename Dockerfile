# --- Стадия 1: Сборка приложения ---
FROM node:22-alpine AS builder

WORKDIR /app

# Объявляем аргумент, который получим из docker-compose
ARG VITE_API_URL

COPY package.json yarn.lock ./
RUN npm install
COPY . .

ENV NODE_ENV=production
RUN VITE_API_URL=${VITE_API_URL} npm run build

FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/dist /usr/share/nginx/html