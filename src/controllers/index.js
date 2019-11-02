const router = require('express').Router();

router.use('/users', require('./UserController'));
router.use('/', require('./IndexController'));

module.exports = router;