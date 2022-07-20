# docker build -t vtg/front .  -f docker/Dockerfile
# docker run -it -p 80:80 vtg/fcdront

FROM node:18.4.0 as builder
WORKDIR /home/node
COPY . /home/node

RUN npm install -g @angular/cli
RUN npm install --force
RUN npm run build

# EXPOSE 4200

# CMD ["ng","serve","--host", "0.0.0.0"]


FROM nginx:1.22-alpine


COPY --from=builder /home/node/dist/app /usr/share/nginx/html
COPY --from=builder /home/node/nginx/nginx.conf /etc/nginx/conf.d/default.conf