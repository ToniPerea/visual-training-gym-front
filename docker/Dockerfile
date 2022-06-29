# docker build -t front/server .  -f docker/Dockerfile
# docker run -it -p 4200 front/server

FROM node:18.4.0
WORKDIR /home/node
COPY . .

RUN npm install -g @angular/cli
RUN npm install --force

EXPOSE 4200

CMD ["ng","serve","--host", "0.0.0.0"]

