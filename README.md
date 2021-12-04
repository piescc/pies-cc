# pies.cc

This repository contains the code for https://pies.cc
The API is powered by NestJS, uses MongoDB for the database, and runs in docker.
The pages will be a frontend built in NextJS.

# How to deploy

You will need the latest version of Docker and docker-compose installed in order to deploy pies.cc

**Deploy on the developer environment:**

1. Download the source code
2. Open up `.env.example` and configure your deployment
3. Rename `.env.example` to `.env`
4. Open a terminal window in your downloaded code
5. Run the following docker-compose command:

   ```bash
   sudo docker-compose -f docker-compose.dev.yml --env-file .env up
   ```

   pies.cc will now be running in developer mode on your local machine. The API will run on port 5000. The MongoDB database will run on port 27017, you can connect to it using MongoDBCompass.

**Deploy on the production environment:**

1. Download the source code
2. Open up `.env.example` and configure your deployment
3. Rename `.env.example` to `.env`
4. Open up `Caddyfile.example` and configure the file by replacing `YOUR_URL_HERE` with your website URL
5. Rename `Caddyfile.example` to `Caddyfile`
6. Open a terminal window in your downloaded code
7. Run the following docker-compose command:

   ```bash
   sudo docker-compose -f docker-compose.prod.yml --env-file .env up -d --build
   ```
   pies.cc will now be fully running on port 443, with HTTPS enabled automatically.
