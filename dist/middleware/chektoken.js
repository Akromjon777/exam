"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_js_1 = require("../config/config.js");
const users_entitiy_js_1 = require("../entities/users.entitiy.js");
const error_handling_js_1 = require("../errors/error.handling.js");
const jwt_js_1 = __importDefault(require("../lib/jwt.js"));
exports.default = async (req, res, next) => {
    try {
        const { token } = req.headers;
        if (!token) {
            return next(new error_handling_js_1.ErrorHandling("Token is required", 400));
        }
        const user_id = jwt_js_1.default.verify(token);
        const users = await config_js_1.AppDataSource.getRepository(users_entitiy_js_1.Users)
            .findOne({
            where: { id: user_id },
        })
            .catch((error) => next(new error_handling_js_1.ErrorHandling(error.message, 400)));
        if (users == null) {
            return next(new error_handling_js_1.ErrorHandling("Your token is incorrect", 400));
        }
        if (users.email != "akromjoncikrahimdijonob@gmail.com") {
            return next(new error_handling_js_1.ErrorHandling("You are not an admin(", 400));
        }
        return next();
    }
    catch (error) {
        return next(new error_handling_js_1.ErrorHandling("The token is invalid", 500));
    }
};
