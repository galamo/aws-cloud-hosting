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

# Inherit current image from an Alpine image containing node (for latest versions use node:alpine, but it is highly not recommended cause it might break in some future version):
FROM node:20-alpine3.19

# Install ts-node globally for running typescript:
RUN npm i -g ts-node

# Create an empty directory for project files and set it as the Current Directory:
WORKDIR /app

# Copy local package.json & package-lock.json into /app:
COPY package*.json /app

# Install npm dependencies & devDependencies:
RUN npm i

# Copy project local files (first dot) into /app:
COPY . /app

# Execute 'npm start' inside /app (WORKDIR) when container starts:
ENTRYPOINT npm start
