const router = require("express").Router();
const path = require("path")
const PostModel = require(path.join(__dirname, '../../models/post-model'))
const TagModel = require(path.join(__dirname, '../../models/tag-model'))

router.route('/findTag/:tagname')
.get((req, res) => {
  TagModel.findAll({
    where: {title: req.params.tagname},
    include: [PostModel]
  })
  .then((data) => {
    res.send(data)
  })
  .catch((err) => {
    console.log(err)
    res.sendStatus(500)
  })
})

router.route('/findModels')
.get((req, res) => {
  PostModel.findAll({
    include: [{model: TagModel, where: {title: ['cars', 'cheap']}}]
  })
  .then((data) => {
    res.send(data)
  })
  .catch((err) => {
    console.log(err)
    res.sendStatus(500)
  })
})

module.exports = router
