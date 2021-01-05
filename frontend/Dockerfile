FROM node:latest as build-stage
WORKDIR /
RUN git clone https://github.com/highlightjs/highlight.js.git
WORKDIR /highlight.js
RUN npm install
RUN node tools/build.js -t node -n apache bash c cmake cpp css django dns dockerfile go http javascript latex lua makefile markdown nginx objectivec php plaintext protobuf python scss sql swift typescript yaml xml ruby
RUN npm install -g @vue/cli
WORKDIR /app
COPY package*.json ./
RUN npm cache clean -f
#ENV NODE_ENV=production
RUN npm install
COPY ./ .
RUN npm run build

FROM nginx:latest
COPY --from=build-stage /app/dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]