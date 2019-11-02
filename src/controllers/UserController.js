const router = require('express').Router();

router.put("/register", (req, resp) => {
    const login = req.headers['login'];
    console.log(login)
});
module.exports = router;
