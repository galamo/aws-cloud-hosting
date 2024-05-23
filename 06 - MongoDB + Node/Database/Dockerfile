# Inherit current image from MongoDB image:
FROM mongo:7

# Copy predefined database and initial scripts into /docker-entrypoint-initdb.d special folder which executes only once:
COPY . /docker-entrypoint-initdb.d
