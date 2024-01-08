# Use the official PostgreSQL image as a base
FROM postgres:latest

# Set environment variables
ENV POSTGRES_DB=outfitoracleDB
ENV POSTGRES_USER=ctp_user
ENV POSTGRES_PASSWORD=ctp_pass

# Copy init.sql and data.sql to the docker entrypoint directory
COPY zdataDB.sql /docker-entrypoint-initdb.d/
COPY initDB.sql /docker-entrypoint-initdb.d/


 
# The base image's entrypoint script executes SQL files in docker-entrypoint-initdb.d
# docker command to run 
# docker run -d -p 5433:5432 outfit-oracle-db
# login with: psql -U ctp_user outfitoracleDB -p 5433 -h localhost