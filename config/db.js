const mongoose = require('mongoose');

exports.dbConnection = () => {
    mongoose.connect(`${process.env.DB_URI}/${process.env.DB_Name}`).then(() => {
        console.log("Connection success");
    })
    .catch(error => {
        console.log("Could not connect to db "+error);
    });
};