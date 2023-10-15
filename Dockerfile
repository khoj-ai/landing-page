# Build Stage
FROM node:current-alpine as build
WORKDIR /app
ARG POSTHOG_API_KEY
ENV REACT_APP_POSTHOG_API_KEY=$POSTHOG_API_KEY
COPY package.json .
COPY yarn.lock .
RUN yarn install
COPY . .
RUN yarn build

# Deploy Stage
FROM nginx:stable-alpine
COPY default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
