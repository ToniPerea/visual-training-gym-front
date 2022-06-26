# docker build -t front/server .

FROM node:18.4.0 AS front-build
WORKDIR /Users/antonioperea/Desktop/TFG/TFG-FINAL/visual-training-gym-front
COPY . .
RUN npm install @angular/cli && npm install && npm run start


EXPOSE 4200

