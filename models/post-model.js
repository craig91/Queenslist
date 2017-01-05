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
      len: [1, 500]
    }
  },
  description: {
    type: Sequelize.TEXT,
    validate: {
      len: [0, 10000]
    }
  },
  images : {
    type: Sequelize.ARRAY(Sequelize.TEXT)

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
