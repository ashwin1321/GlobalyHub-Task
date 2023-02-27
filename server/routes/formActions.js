const router = require('express').Router();
const { submitForm } = require('../controller/formActions');
const { validateForm } = require('../middleware/validateForm');

router.route('/submit-form')
    .post(validateForm, submitForm)


module.exports = router;