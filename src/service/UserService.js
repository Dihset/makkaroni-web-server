import userValidator from "../validators/UserValidator";
import {User} from "../models/User";

const mongoose = require('../db/MongooseClient');

export async function registerUser(user) {
    if (!userValidator(user)) {
        return message(false, "не все нужные поля заполнены")
    }
    return findUserByUsername(user.username).then((docs, error) => {
        if (docs.length) {
            return message(false, "пользователь с таким ником уже зарегестрирован")
        }
        return saveUser(user);
    });
}

async function findUserByUsername(username) {
    return await User.find({username: username})
}

function saveUser(user) {
    const userModel = new User(user);
    userModel.save(e => {
        if (e)
            console.error(e);
    });
    console.log("user " + userModel)
    return userModel;

}

function loginUser() {

}

function message(success, message) {
    return {
        success: success,
        message: message
    }
}