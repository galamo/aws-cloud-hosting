# Inherit current image from an Alpine image containing node:
FROM node:20-alpine3.19

# Install nodemon globally for hot-reloading using a Host Volume on project directory:
RUN npm i -g nodemon

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
