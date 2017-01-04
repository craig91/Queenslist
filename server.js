import express from 'express';
<<<<<<< HEAD
const path = require('path');
const bodyParser = require('body-parser');


let app = express();

// app.use(express.static('public'));


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public')));


app.get('/api/tags', (req, res) => {
  // Do Something
  //
});



=======
import Sequelize from 'sequelize';
import sequelizeConnection from './sequelizeConnection';
import bodyParser from 'body-parser';

let app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
>>>>>>> 87b8cb5f6daecb36ceab971ec7a920f62459eda7

app.listen(3000);
