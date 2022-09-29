<a name="readme-top"></a>
# ArgentBank

![ArgentBank logo](designs/img/argentBankLogo.png)

Training project to experiment with Redux, Redux Toolkit (RTK), RTK Query and JSON Web Token (JWT).

## Getting Started

### Prerequisites

Argent Bank uses the following tech stack:

- [Node.js v12](https://nodejs.org/en/)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community)

Make sure you have the right versions and download both packages. You can verify this by using the following commands in your terminal:

```bash
# Check Node.js version
node --version

# Check Mongo version
mongo --version
```

### Instructions to run the backend

1. Fork this repo
1. Clone the repo onto your computer
1. Open a terminal window in the cloned project
1. Run the following commands:

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev:server

# Populate database with two users
npm run populate-db
```

Your server should now be running at http://locahost:3001 and you will now have two users in your MongoDB database!


#### Tony Stark

- First Name: `Tony`
- Last Name: `Stark`
- Email: `tony@stark.com`
- Password: `password123`

#### Steve Rogers

- First Name: `Steve`,
- Last Name: `Rogers`,
- Email: `steve@rogers.com`,
- Password: `password456`



### Instructions to run the frontend

1. Open a terminal window in the cloned project
1. Navigate to the frontend folder (cd argentbank-front)
1. Run the following commands

```bash
# Install dependencies
npm install

# Start react app
npm start
```

Your should be able to view the ArgentBank app in your browser at http://localhost:3000.


## API Documentation

To learn more about how the API works, once you have started your local environment, you can visit: http://localhost:3001/api-docs


<p align="right">(<a href="#readme-top">back to top</a>)</p>