# # FROM: node:21-alpine3.17

# # COPY . /. 
# FROM ubuntu
# RUN apt-get update \
#     && apt-get upgrade -y
# WORKDIR /
# COPY package*.json ./
# COPY cypress /cypress
# RUN apt-get update
# RUN apt-get -y install curl
# RUN curl -sL https://deb.nodesource.com/setup_18.x  | bash -
# RUN apt-get -y install nodejs 
# RUN npm install

FROM cypress/included:3.2.0
RUN mkdir /cypress-docker
WORKDIR /cypress-docker
COPY . /cypress-docker
RUN npm install
# RUN $(npm bin)/cypress verify
RUN ["npm","run","cypress-test"]
