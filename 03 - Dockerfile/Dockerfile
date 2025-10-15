# Dockerfile: describing how to build a docker image.
# Note: for pushing an image into a repository, the image must start with the repository username. e.g: assaffink/kittens-image:1.0 for pushing into Docker Hub.

# Build image:                      docker build -t kittens-image .
# Build Docker Hub suitable image:  docker build -t assaffink/kittens-image:1.0 .
# Create container:                 docker create --name kittens-container -p 81:4000 kittens-image
# Start container:                  docker start kittens-container
# Stop container:                   docker stop kittens-container
# Delete container:                 docker rm kittens-container
# Delete image:                     docker image rm kittens-image
# Login to docker registry:         docker login
# Push image to the registry:       docker push kittens-image
# Pull image from registry:         docker pull kittens-image

FROM node:22-alpine3.19

WORKDIR /app
COPY package*.json /app
COPY . /app
RUN npm i
RUN npm run compile
CMD ["npm", "start"]
