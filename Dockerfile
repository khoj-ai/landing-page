# Build Stage
FROM node:current-alpine as build
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn install
COPY . .
ARG REACT_APP_KHOJ_API_URL
ENV REACT_APP_KHOJ_API_URL=$REACT_APP_KHOJ_API_URL
RUN yarn build

# Deploy Stage
FROM nginx:stable-alpine
COPY default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
