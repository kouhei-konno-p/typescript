"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.index = void 0;
const index_service_1 = require("../services/index.service");
const printToConsole = function (s) {
    return s;
};
const index = (req, res) => {
    const data = (0, index_service_1.getData)(printToConsole);
    console.log(data);
    res.send(data);
};
exports.index = index;
