"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.index = void 0;
const user_1 = require("../services/user");
const user_2 = require("../model/user");
const index = (req, res) => {
    const data = (0, user_1.getUserData)(user_2.userModel, '1');
    res.send(data);
};
exports.index = index;
