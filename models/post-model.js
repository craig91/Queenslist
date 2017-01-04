const Sequelize = require('sequelize');
const sequelizeConnection = require('../sequelize-connection');

const PostModel = sequelizeConnection.define('post', {
  category: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
    }
  },
  tags: {
    type: Sequelize.STRING,
    validate: {
      isArray: true
    }
  },
  title: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
      len: [1, 120]
    }
  },
  description: {
    type: Sequelize.STRING,
    validate: {
      len: [0, 10000]
    }
  },
  images: {
    type: Sequelize.STRING,
    validate: {
      isArray: true
    }
  },
  email: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
      isEmail: true
    }
  }
})

module.exports = PostModel
