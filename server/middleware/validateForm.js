const { body } = require('express-validator');

exports.validateForm =
    [
        body('name').not().isEmpty().isLength({ min: 5 }).withMessage('enter your name in correct format'),
        body('email').isEmail().not().isEmpty().withMessage('enter your email in correct format'),
        body('phone').isNumeric(10).not().isEmpty().withMessage('enter your phone number in correct format'),
        body('gender')
            .isIn(['male', 'female', 'others'])
            .withMessage('please select a option'),
        body('hobbies').isArray({ min: 1 }).withMessage('please select a option'),
    ]
