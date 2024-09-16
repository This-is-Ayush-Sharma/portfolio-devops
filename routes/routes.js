
const router = require('express').Router();

const contactUsController = require('../controllers/contactus.controller');

// middleware 
const { validate } = require('../middleware/formDataValidator');

router.get('/', contactUsController.home);

router.post('/submit', validate, contactUsController.contactFormHandler);


module.exports = router;

