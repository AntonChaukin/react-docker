#Specify a base image
FROM node:16-alpine as builder

#Specify work directory
WORKDIR /app

#Install some dependencies
COPY package.json .
RUN npm install

#Copy work files
COPY . .

#Build app
RUN ["npm", "run", "build"]

#Specify ngix base
FROM nginx

#Define port
EXPOSE 3000

#Copy nginx default config file
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

#Copy build directory to nginx work directory
COPY --from=builder /app/build /usr/share/nginx/html