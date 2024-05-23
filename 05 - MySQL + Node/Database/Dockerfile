# Inherit current image from MySQL image:
FROM mysql:8

# Copy northwind.sql into /docker-entrypoint-initdb.d special folder which executes scripts only once:
COPY ./northwind.sql /docker-entrypoint-initdb.d
