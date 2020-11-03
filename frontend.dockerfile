FROM node:lts

LABEL maintainers="Anson Kao <anson.kao@yyc.com.tw>"

WORKDIR /home
RUN mkdir build
COPY build build/
COPY server.js /home/server.js

RUN touch pagckage.json
RUN npm install express

EXPOSE 5000

CMD node server.js
