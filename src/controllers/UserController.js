import {registerUser} from "../service/UserService";

const router = require('express').Router();
const mongoose = require('../db/MongooseClient')

router.post("/", (req, resp) => {
    resp.send(registerUser(req.body));
});
module.exports = router;
