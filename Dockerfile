FROM node:lts

EXPOSE 3000 35729
COPY . /app
WORKDIR /app/website
# RUN yarn install

CMD ["npm", "start"]
