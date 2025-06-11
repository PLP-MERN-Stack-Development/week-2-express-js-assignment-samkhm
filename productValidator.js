// validators/productValidator.js

const { body } = require('express-validator');

const validateProduct = [
  body('name')
    .trim()
    .notEmpty().withMessage('Name is required')
    .isLength({ max: 100 }).withMessage('Name must not exceed 100 characters'),

    body('description')
    .optional()
    .isLength({ max: 500 }).withMessage('Description must not exceed 500 characters'),

  body('price')
    .notEmpty().withMessage('Price is required')
    .isFloat({ gt: 0 }).withMessage('Price must be a number greater than 0'),

    body('Category')
    .optional()
    .isLength({ max: 500 }).withMessage('Category must not exceed 500 characters'),

];

module.exports = { validateProduct, };
