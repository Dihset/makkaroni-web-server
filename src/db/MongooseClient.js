const mongoose = require('mongoose');
mongoose.connect("mongodb://root:root@192.168.1.98:27017/makkaroni", {useNewUrlParser: true}, (error) => {
    console.log(error)
});
console.log("connected to mongo");

module.exports = mongoose;