```markdown
# Docker Command Reference

## Auth

- `docker login`  
  Log in to Docker registry.
- `docker logout`  
  Logout from Docker registry.

## Images

- `docker build -t <image> .`  
  Build an image from a Dockerfile located in the current directory (last dot).

- `docker images`  
  Display image list.

- `docker images -q`  
  Display image IDs (q = quiet).

- `docker image rm <image>`  
  Remove the given image if not in use.

- `docker image rm $(docker images -q)`  
  Remove non-used images. Works on PS/Git terminals, not on CMD.

- `docker push <image>`  
  Upload the given image to the repository.

- `docker pull <image>`  
  Pull the given image from the repository.

## Containers

- `docker ps`  
  Display running containers.

- `docker ps -a`  
  Display all containers.

- `docker ps -a -q`  
  Display container IDs.

- `docker create <image>`  
  Create a random-name container running the given image.

- `docker create --name <container> <image>`  
  Create a named container running the given image.

- `docker start <container>`  
  Start the given container in a detached mode (free terminal).

- `docker stop <container>`  
  Stop the given container.

- `docker rm <container>`  
  Remove the given non-running container (--force to remove if running).

- `docker rm $(docker ps -a -q)`  
  Remove non-running containers (--force to remove all). Works on PS/Git terminals, not on CMD.

- `docker run <image>`  
  Create/start a random-name container with the given image in a non-detached mode (busy terminal). If the image is not found, it will try to download it.

- `docker run <image> --name <container> -d`  
  Create/start the given container with the given image in a detached mode. If the image is not found, it will try to download it.

- `docker status`  
  Show running containers status.

## Volumes

- `docker volume ls`  
  Display volumes.

- `docker volume ls -q`  
  Display volume IDs.

- `docker volume rm <volume>`  
  Remove the given non-used volume.

- `docker volume rm $(docker volume ls -q)`  
  Remove non-used volumes. Works on PS/Git terminals, not on CMD.

## Network

- `docker network ls`  
  Display networks.

- `docker network ls -q`  
  Display network IDs.

- `docker network create <network>`  
  Create a new network.

## Debugging

- `docker logs <container>`  
  Display logs for the given container.

- `docker exec -it <container> /bin/bash`  
  Open a bash terminal inside the given running container (-it = interactive terminal).

- `docker exec -it <container> sh`  
  Open a shell terminal inside the given running container.

## Docker Compose

- `docker compose build`  
  Build images specified in the current `docker-compose.yml` file.

- `docker compose build --no-cache`  
  Build images specified in the current `docker-compose.yml` file, without using cached layers.

- `docker compose up -d`  
  Run the current `docker-compose.yml` file in detached mode.

- `docker compose up -d --build`  
  Build images and run the current `docker-compose.yml` file in detached mode.

- `docker compose ps`  
  Display currently running containers from `docker-compose.yml`.

- `docker compose down`  
  Stop and remove currently running containers from `docker-compose.yml`.

- `docker compose -f <file-name.yml> <command>`  
  Run a specified command on the given `docker-compose.yml` file.

- `docker compose logs`  
  Display logs from the current `docker-compose.yml` file containers.

- `docker compose push`  
  Push images specified in the current `docker-compose.yml` file to the repository.

- `docker compose pull`  
  Pull images specified in the current `docker-compose.yml` file from the repository.

## Docker Machine

- Website: [Docker Machine Releases](https://github.com/docker/machine/releases)
```
