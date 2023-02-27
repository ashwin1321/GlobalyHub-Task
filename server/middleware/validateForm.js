const { body } = require('express-validator');

exports.validateForm =
    [
        body('name').not().isEmpty().isLength({ min: 5 }).withMessage('enter your name in correct format'),
        body('email').isEmail().not().isEmpty().withMessage('enter your email in correct format'),
        body('phone').isNumeric().isLength({ min: 10, max: 10 }).withMessage("please enter 10 number").not().isEmpty(),
        body('gender')
            .isIn(['male', 'female', 'others'])
            .withMessage('please select a option'),
        body('hobbies').isArray({ min: 1 }).withMessage('please select a option'),
    ]
