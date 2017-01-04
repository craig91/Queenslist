import express from 'express';
import Sequelize from 'sequelize';
import sequelizeConnection from './sequelizeConnection';
import bodyParser from 'body-parser';

let app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.listen(3000);
