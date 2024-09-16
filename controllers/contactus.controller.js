const Contacts = require('../model/contacts');

exports.home = (req, res) => {
    return res.render('index', { message: "" });
};

exports.contactFormHandler = (req, res) => {
    Contacts.create(req.body)
        .then((data) => {
            return res.render('index', { message: "Form submitted" });
        })
        .catch(error => {
            console.log("Some error has occured!" + error);
            return res.render("index", { message: "Some error has occured!" });
        })
};