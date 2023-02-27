# Task

## To validate form from the backend and display the erorr

## Fields

- Name (Text) - Must be required and at least 5 characters
- Email (Text) - Must be required and invalid email format
- Phone (Number) - Must be required and numeric
- Gender (Radio button) - Must be Male/Female/Others
- Hobbies (Checkbox) eg. Reading, Traveling, Listening to music, etc.

##

## Server Side Installation

### Npm Initialization

```bash
  npm init -y
```

### Install packages

```bash
 yarn add express, pg, cors, express-validator, dotenv
```

### Setup Database

```js
const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: `${process.env.DB_PASS}`,
  port: "5432",
});
```

### create table

```js
await client.query(`CREATE TABLE IF NOT EXISTS userss (
            id SERIAL PRIMARY KEY,
            name varchar(100) NOT NULL,
            email varchar(100) NOT NULL,
            phone int NOT NULL,
            gender varchar(100) NOT NULL,
            hobbies text [] NOT NULL
            );`);
```

### start server

```
node index.js
```

##

## Client Side Installation

### create Vite App

```
yarn create vite
```

### add axios

```
yarn add axios
```

### run the development server

```
yarn run dev
```

##

## Usage

- Add the details in the form.
- submit the form.

### If error occurs

- The error message will be shown right under the form field.
- Fill the form according to the error message and submit.
