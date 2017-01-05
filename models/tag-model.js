const Sequelize = require('sequelize');
const sequelizeConnection = require('../sequelize-connection');

//////////
// YOUR CODE HERE:
//////////
const Tag = sequelizeConnection.define('tag', {
  title: {type: Sequelize.STRING,
          validate: {
            len: [1, 1000]
          }
  }
})

module.exports = Tag;
