const router = require('express').Router()

router.use('/api', require('./api-routes'))
router.use('/*', require('./front-routes'))

module.exports = router;
