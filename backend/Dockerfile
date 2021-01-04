FROM node:14 as build-stage
WORKDIR /srv/app
COPY package*.json ./
ENV NODE_ENV=production
RUN npm install
COPY ./ .
RUN npm run build
CMD ["npm", "run", "start"]
#RUN npm run build

#FROM nginx:latest
#COPY --from=build-stage /app/build /usr/share/nginx/html
#RUN rm /etc/nginx/conf.d/default.conf
#COPY nginx.conf /etc/nginx/conf.d
#EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]

