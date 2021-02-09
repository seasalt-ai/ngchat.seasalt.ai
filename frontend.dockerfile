FROM node:12.12.0 as builder

LABEL maintainers="Anson Kao <anson.kao@yyc.com.tw>"

# build source code in temporarily image "builder"
RUN mkdir /ngChat
COPY . /ngChat/
WORKDIR /ngChat
RUN yarn install
RUN yarn run build

FROM nginx:stable-alpine
COPY --from=builder /ngChat/build /usr/share/nginx/html
COPY --from=builder /ngChat/nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 5000
CMD ["nginx", "-g", "daemon off;"]


# FROM node:lts

# LABEL maintainers="Anson Kao <anson.kao@yyc.com.tw>"

# WORKDIR /home
# RUN mkdir build
# COPY build build/
# COPY server.js /home/server.js

# RUN touch pagckage.json
# RUN npm install express

# EXPOSE 5000

# CMD node server.js
