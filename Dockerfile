FROM node:lts

EXPOSE 3000 35729
COPY . /app
WORKDIR /app/website
RUN npm install

CMD ["npm", "start"]
