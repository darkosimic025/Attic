# pull official base image
FROM node:lts-alpine

# set working directory
WORKDIR /jdp-attic-frontend

# add `/app/node_modules/.bin` to $PATH
ENV PATH /jdp-attic-frontend/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY yarn.lock ./
RUN yarn install --silent

# add app
COPY . ./

# start app
CMD ["yarn", "start"]