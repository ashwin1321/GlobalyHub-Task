const router = require('express').Router();
const { submitForm } = require('../controller/formActions');

router.route('/submit-form')
    .post(submitForm)