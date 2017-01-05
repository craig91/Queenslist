// const Sequelize = require('sequelize');
// const sequelizeConnection = require('../sequelize-connection');
// const PostModel = require('./post-model')
//
// const TagCounter = sequelizeConnection.define('tag'{
//   tag: {
//     type: Sequelize.STRING,
//     validate: {
//       len: [1, 20]
//     }
//   },
//   count: {
//     type: Sequelize.INTEGER,
//     validate: {
//       min: 0
//     }
//   }
// })
//
// TagCounter.belongsToMany(PostModel, {through: 'posts-tags'})
// PostModel.belongsToMany(TagCounter, {through: 'posts-tags'})
//
// module.exports = TagCounter;
