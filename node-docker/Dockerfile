FROM node:14

WORKDIR /usr/src/app

# copy package-lock.json and package.json to container
COPY package*.json ./

RUN npm install

# copy host files to container
COPY . .

EXPOSE 3333
CMD ["npm", "run", "dev"]