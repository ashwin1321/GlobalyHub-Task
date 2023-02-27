const express = require('express')
const formActions = require('./routes/formActions')
const cors = require('cors')

const app = express()

// middleware
app.use(express.json());
app.use(cors())

// routes
app.use('/form', formActions)


const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))