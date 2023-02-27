const { client } = require('../config/db')
const { validationResult } = require('express-validator')


exports.submitForm = async (req, res) => {
    try {
        const error = validationResult(req)
        const { name, email, phone, gender, hobbies } = req.body;

        // if (error) {
        //     return res.status(400).json({ message: error.array() })           // error is and array so even its empty it will return true
        // }

        // so we have to check if its empty or not
        if (!error.isEmpty()) {
            return res.json({ error: error.array() })
        }

        const query = `insert into userss (name, email, phone, gender, hobbies) values ($1, $2, $3, $4, $5);`;
        const values = [name, email, phone, gender, hobbies]

        const result = await client.query(query, values)
        res.status(201).json({ message: 'Form submitted successfully' })

    } catch (err) {
        res.status(500).json({ error: err.message })

    }
}
