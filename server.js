const express = require('express');
const app = express();
const dotenv = require('dotenv');
const { dbConnection } = require("./config/db");
const routes = require('./routes/routes');
const bodyParser = require('body-parser');
const path = require('path');
dotenv.config();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));



app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use('/', routes);

app.listen(process.env.PORT, ()=>{
    console.log(`App running on port ${5000}`);
    dbConnection();
});