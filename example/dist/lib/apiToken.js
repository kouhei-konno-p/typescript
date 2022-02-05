"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.withApiTokenValidation = exports.getAuthToken = void 0;
const getAuthToken = function (req) {
    const bearerHeader = req.headers['authorization'];
    if (!bearerHeader) {
        throw Error('Invalid HTTP headers');
    }
    const bearer = bearerHeader.split(' ');
    const token = bearer[1];
    return token;
};
exports.getAuthToken = getAuthToken;
const withApiTokenValidation = function (fn, req) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const headerToken = (0, exports.getAuthToken)(req);
            const res = headerToken || 'test-token';
            yield fn(res);
        }
        catch (e) {
            if (e instanceof Error) {
                new Error('Invalid authorization token');
                return;
            }
            throw e;
        }
    });
};
exports.withApiTokenValidation = withApiTokenValidation;
