FROM ubuntu:18.04
RUN apt-get -y update &&  \
    apt-get -y upgrade &&  \
    apt-get -y install sudo && \
    apt-get update &&  \
    apt-get -y install curl && \
    curl -fsSL https://deb.nodesource.com/setup_17.x | sudo -E bash - && \
    sudo apt-get install -y nodejs
WORKDIR /var/www
COPY . .
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]
