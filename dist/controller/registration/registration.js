"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.USER_TOKEN = exports.USER_PATCH = exports.USER_POST = void 0;
const config_1 = require("../../config/config");
const users_entitiy_1 = require("../../entities/users.entitiy");
const error_handling_1 = require("../../errors/error.handling");
const jwt_1 = __importDefault(require("../../lib/jwt"));
const USER_TOKEN = async (req, res, next) => {
    try {
        const { token } = req?.headers;
        const user_id = jwt_1.default.verify(token);
        console.log(user_id);
        const users = await config_1.AppDataSource.getRepository(users_entitiy_1.Users).find({
            where: { id: user_id },
        });
        if (!users.length) {
            return next(new error_handling_1.ErrorHandling("Token xato", 400));
        }
        res.status(200).json({
            message: "Greatfull successfulled...)",
            status: 200,
            data: users,
        });
    }
    catch (error) {
        console.log(error);
        next(new error_handling_1.ErrorHandling(error, 400));
    }
};
exports.USER_TOKEN = USER_TOKEN;
const USER_POST = async (req, res, next) => {
    try {
        const { first_name, last_name, email, phone, password } = req.result;
        const conplic = await config_1.AppDataSource.getRepository(users_entitiy_1.Users).find({
            where: { email: email, password: password },
        });
        if (conplic.length) {
            return next(new error_handling_1.ErrorHandling("email va password uzgartirnig", 409));
        }
        const { raw: [{ user_id }], } = await config_1.AppDataSource.getRepository(users_entitiy_1.Users)
            .createQueryBuilder()
            .insert()
            .into(users_entitiy_1.Users)
            .values({
            first_name,
            last_name,
            email,
            phone,
            password,
        })
            .execute();
        res.status(200).json({
            message: "Greatfull successfulled...)",
            status: 201,
            token: jwt_1.default.sign(user_id),
        });
    }
    catch (error) {
        console.log(error);
        next(new error_handling_1.ErrorHandling(error, 400));
    }
};
exports.USER_POST = USER_POST;
const USER_PATCH = async (req, res, next) => {
    try {
        const { token } = req?.headers;
        const user_id = jwt_1.default.verify(token);
        const user = await config_1.AppDataSource.getRepository(users_entitiy_1.Users)
            .findOne({
            where: { id: user_id },
        })
            .catch((error) => next(new error_handling_1.ErrorHandling(error.message, 400)));
        const { first_name, last_name, email, phone, gendry, password } = req.result;
        const { filename } = req.file;
        const avatar = filename;
        const id = user_id;
        const users = await config_1.AppDataSource.createQueryBuilder()
            .update(users_entitiy_1.Users)
            .set({
            first_name,
            last_name,
            email,
            phone,
            gendry,
            password,
            avatar,
        })
            .where("id = :id", { id: id })
            .execute();
        res.status(200).json({
            message: "Greatfull successfulled...)",
            status: 201,
        });
    }
    catch (error) {
        console.log(error);
        next(new error_handling_1.ErrorHandling(error, 400));
    }
};
exports.USER_PATCH = USER_PATCH;
