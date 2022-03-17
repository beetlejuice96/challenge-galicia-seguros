FROM node:16-alpine3.12 AS builder
WORKDIR /app
# ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY yarn.lock ./
COPY . ./
RUN yarn install
# RUN npm install --global yarn
RUN yarn build


FROM nginx:1.20.0-alpine
WORKDIR /usr/share/nginx/html
# Remove default nginx static resources
RUN rm -rf ./*
COPY --from=builder /app/build .
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


