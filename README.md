# pies.cc

This repository contains the code for https://pies.cc
The API is powered by NestJS, uses MongoDB for the database, and runs in docker.
The pages will be a frontend built in NextJS.

# How to deploy

You will need the latest version of Docker installed in order to deploy pies.cc


**Deploy on the developer environment:**

1. Download the source code
2. Open up `.env.example` and configure your deployment
3. Rename `.env.example` to `.env`
4. Open a terminal window in your downloaded code
5. Run the following docker-compose command:

   ```bash
   docker-compose --env-file .env up
   ```

   pies.cc will now be running in developer mode on your local machine. The API will run on port 5000.


**Deploy on the production environment:**

1. Download the source code
2. Open up `.env.example` and configure your deployment
3. Rename `.env.example` to `.env`
4. Open a terminal window in your downloaded code
5. Run the following docker-compose command:

   ```bash
   docker-compose --env-file .env up
   ```
   pies.cc will now be fully running on port 443, with HTTPS enabled automatically.
