FROM nginx:alpine
COPY ./dist /usr/share/nginx/html
RUN find /usr/share/nginx/html | xargs chmod 777

EXPOSE 80