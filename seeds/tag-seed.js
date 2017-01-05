const Sequelize = require('sequelize');
const sequelizeConnection = require('../sequelize-connection');
const Tag = require('../models/tag-model');

//Tag.sync will create the tags table
Tag.sync({force: true})
//add the following three tags to the database:
.then(() => Tag.bulkCreate([
  {title: 'cars', counter: 2},
  {title: 'cheap', counter: 1},
  {title: 'brownstone', counter: 1},
], {validate: true}))
//the following tag should NOT be added to your database:
//(if your validations are setup correctly)
.then(() => Tag.create({title: ''}))
.then(() => Tag.create({title: ['sdsd', 'genrsadfse2']}))
// if everything is correct, you should only have THREE tags in your database
.catch((err) => console.log(err));
