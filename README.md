
## 🚀 About Us
We are IT students at Epitech Lille, and learn full stack developers...



# JobBoard

Development of a full-stack web leaderboard including:

    - A dynamic front-end using ReactJS - NodeJS - MySQL
    - A back-end with a CRUD API in the language of your choice (PHP, Javascript, Python, ...)
    - Interacting with a database
    - The usage of a dependencies manager


## Tech Stack

**Client:** React, Bootstrap

**Server:** Node, Express

**DATABASE:** MySQL 
## Appendix

Make you sur your port :3000 for frontend & :1999 for backend is enable.

Make you sur to add the good port & password into backend/server.js on the top of file.

And create in MySQL a "jobboard" schemas with 3 tables inside:




## Schemas MySQL:
    jobboard
        |-> card
        |-> message
        |-> users

    card:
        - uid           [vachar(45)]
        - cid           [vachar(45)]
        - jobtitle      [vachar(45)]
        - society       [vachar(45)]
        - city          [vachar(45)]
        - contract      [vachar(45)] 
        - salary        [vachar(45)]
        - description   [vachar(500)]
        - email         [vachar(45)]

    message:
        - eid           [vachar(45)]
        - mid           [vachar(45)]
        - jobtitle      [vachar(45)]
        - name          [vachar(45)]
        - email         [vachar(45)]
        - message       [vachar(500)]

    users:
        - uid           [vachar(45)]
        - name          [vachar(45)]
        - username      [vachar(45)]
        - email         [vachar(45)]
        - password      [vachar(45)]
        - status        [vachar(45)]

## How launch
Make you sur the port :1999 & :3000 is eneable.

Client 
````
cd client
npm i react || npm i react-scripts
npm start
````
Serveur
````
cd server
npm i nodemon
npm run dev
````

