const { body } = require('express-validator');

exports.validateForm =
    [
        body('name').notEmpty().withMessage('name cannot be empty').isLength({ min: 5 }).withMessage("name must be greater than 5 character"),
        body('email').notEmpty().withMessage("email cannot be empty").isEmail().withMessage('enter your email in correct format'),
        body('phone').notEmpty().withMessage("number cannot be empty").isNumeric().withMessage("number has to be a numeric value.").isLength({ min: 10, max: 10 }).withMessage("please enter 10 number"),
        body('gender')
            .isIn(['male', 'female', 'others'])
            .withMessage('please select a option'),
        body('hobbies').isArray({ min: 1 }).withMessage('please select a option'),
    ]
