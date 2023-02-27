const { client } = require('../config/db')

const createUserTable = async () => {
    try {
        await client.query(`CREATE TABLE IF NOT EXISTS userss (
            id SERIAL PRIMARY KEY,
            name varchar(100) NOT NULL,
            email varchar(100) NOT NULL,
            phone int NOT NULL,
            gender varchar(100) NOT NULL,
            hobbies text [] NOT NULL
            );`)

    } catch (error) {
        console.log(error)

    }
}

createUserTable()
    .then(() => console.log('User table created'))
    .catch((err) => console.log(err))