const Sequelize = require('sequelize');
const sequelizeConnection = require('../sequelize-connection');
const Tag = require('./tag-model.js');

const Post = sequelizeConnection.define('post', {
  category: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
    }
  },
  title: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
      len: [1, 1000]
    }
  },
  description: {
    type: Sequelize.STRING,
    validate: {
      len: [0, 10000]
    }
  },
  email: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
      isEmail: true
    }
  }
})

Tag.belongsToMany(Post, {through: 'postTag', foreignKey: 'tagId'});
Post.belongsToMany(Tag, {through: 'postTag', foreignKey: 'postId'});

module.exports = Post;
