# Fetching the Node.js image
FROM node:14.21.3-bullseye

# Declaring environment variable
ENV NODE_ENV development

# Setting up the work directory
WORKDIR /client

# Copying all the files in our project
COPY . .

# Installing dependencies
RUN npm install

# Exposing server port
EXPOSE 3000

# Starting our application
CMD ["npm", "start"]
# docker run -d -p 3000:3000 outfitoracle-frontend