FROM node:lts AS builder 

EXPOSE 3000 35729
COPY . /app
WORKDIR /app/website
# RUN npm install --global docusaurus-init
# RUN npm install
# RUN npm run build



# COPY --from=builder /go/src/gitlab.com/ifra.io/ifra/rule_builder /go-api

# base image
FROM nginx:1.16.0-alpine

# copy artifact build from the 'build environment'
COPY --from=builder /app/website/build/ifra-doc-site/ /usr/share/nginx/html

# expose port 80
EXPOSE 80

# run nginx
CMD ["nginx", "-g", "daemon off;"]