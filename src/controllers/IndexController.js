const router = require('express').Router();

router.get("/", (req, resp) => {
    resp.send("test")
});
module.exports = router;
