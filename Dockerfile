FROM ubuntu:18.04

RUN apt update
RUN apt install -y nodejs
RUN apt install -y npm
RUN apt install -y git
RUN apt install -y mongodb

RUN git --version
RUN node --version
RUN npm --version
RUN mongo --version

RUN mkdir -p /data/db 
RUN mongod --fork --syslog

RUN git clone https://github.com/theteapot/recycle-centre-server.git
WORKDIR /recycle-centre-server
RUN npm install
EXPOSE 5142
CMD ["npm", "start"]