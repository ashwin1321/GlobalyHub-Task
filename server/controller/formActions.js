// const { client } = require('../config/db')
const { validationResult } = require('express-validator')


exports.submitForm = async (req, res) => {
    try {
        const error = validationResult(req)

        // if (error) {
        //     return res.status(400).json({ message: error.array() })           // error is and array so even its empty it will return true
        // }

        // so we have to check if its empty or not
        if (!error.isEmpty()) {
            return res.status(400).json({ message: error.array() })
        }

        const { name, email, phone, gender, hobbies } = req.body;
        res.status(400).json({ message: 'success' })

    } catch (error) {
        res.status(500).json({ message: error.message })

    }
}
