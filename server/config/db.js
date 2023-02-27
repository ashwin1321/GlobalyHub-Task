const { Client } = require('pg');
require('dotenv').config();

const client = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: `${process.env.DB_PASS}`,
    port: "5432",
})

const connect = async () => {
    try {
        await client.connect();
        console.log('Connected to database');
    } catch (err) {
        console.log('Error connecting to database');
    }
}

connect();

module.exports = { client, connect };