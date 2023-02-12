"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LOGIN_POST = void 0;
const config_1 = require("../../config/config");
const users_entitiy_1 = require("../../entities/users.entitiy");
const error_handling_1 = require("../../errors/error.handling");
const jwt_1 = __importDefault(require("../../lib/jwt"));
const LOGIN_POST = async (req, res, next) => {
    try {
        const { email, password } = req.result;
        const users = (await config_1.AppDataSource.getRepository(users_entitiy_1.Users).findOne({
            where: { email, password },
        }));
        if (!users) {
            return next(new error_handling_1.ErrorHandling("Xato kirgizdingiz", 500));
        }
        res.status(200).json({
            message: "Greatfull successfulled...)",
            status: 200,
            token: jwt_1.default.sign(users?.id),
        });
    }
    catch (error) {
        console.log(error);
        next(new error_handling_1.ErrorHandling(error, 400));
    }
};
exports.LOGIN_POST = LOGIN_POST;
