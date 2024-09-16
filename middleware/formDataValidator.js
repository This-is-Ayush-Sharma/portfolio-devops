const { log } = require('console');
const Joi = require('joi');

exports.validate = (req, res, next) => {

    const schema = Joi.object({

        email: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),

        number: Joi.number()
            .min(1000000000) // Minimum 10-digit number
            .max(9999999999) // Maximum 10-digit number
            .required(),
        message: Joi.string()
            .max(300)

    });

    if (schema.validate(req.body).error) {
        return res.render('index', { message: schema.validate(req.body).error });
    }
    next();
};