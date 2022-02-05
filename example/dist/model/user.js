"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = void 0;
const userModel = function (s) {
    // TODO: DBから取得
    const user = { id: s, name: 'username', email: 'aaa@exam.com' };
    return user;
};
exports.userModel = userModel;
