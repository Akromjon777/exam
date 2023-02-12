"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.COMMENTS_PUT = exports.COMMENTS_DELETE = exports.COMMENTS_GET = exports.COMMENTS_POST = void 0;
const config_1 = require("../../config/config");
const comments_entitiy_1 = require("../../entities/comments.entitiy");
const users_entitiy_1 = require("../../entities/users.entitiy");
const error_handling_1 = require("../../errors/error.handling");
const jwt_1 = __importDefault(require("../../lib/jwt"));
const COMMENTS_GET = async (req, res, next) => {
    try {
        const { id } = req.params;
        const comment = await config_1.AppDataSource.getRepository(comments_entitiy_1.Comments)
            .find({
            where: { products: { id: id } },
            relations: { users: true },
            select: {
                comment_title: true,
                users: {
                    last_name: true,
                    first_name: true,
                    avatar: true,
                },
            },
        })
            .catch((error) => next(new error_handling_1.ErrorHandling(error.message, 400)));
        res.status(200).json({
            status: 200,
            message: "Greatfull succssefulled...",
            data: comment,
        });
    }
    catch (error) {
        console.log(error);
        next(new error_handling_1.ErrorHandling(error, 500));
    }
};
exports.COMMENTS_GET = COMMENTS_GET;
const COMMENTS_POST = async (req, res, next) => {
    try {
        const { token } = req?.headers;
        const user_id = jwt_1.default.verify(token);
        const user = await config_1.AppDataSource.getRepository(users_entitiy_1.Users)
            .findOne({
            where: { id: user_id },
        })
            .catch((error) => next(new error_handling_1.ErrorHandling(error.message, 400)));
        if (!user) {
            return next(new error_handling_1.ErrorHandling("Users not found", 400));
        }
        const { comment_title, productsId } = req.result;
        const users = user_id;
        const products = productsId;
        const comment = await config_1.AppDataSource.getRepository(comments_entitiy_1.Comments)
            .createQueryBuilder()
            .insert()
            .into(comments_entitiy_1.Comments)
            .values({ comment_title, products, users })
            .execute()
            .catch((error) => next(new error_handling_1.ErrorHandling(error.message, 400)));
        res.status(200).json({
            status: 200,
            message: "Greatfull succssefulled...",
        });
    }
    catch (error) {
        console.log(error);
        next(new error_handling_1.ErrorHandling(error, 400));
    }
};
exports.COMMENTS_POST = COMMENTS_POST;
const COMMENTS_PUT = async (req, res, next) => {
    try {
        const { user_id } = req.params;
        const { comment_title } = req.result;
        const id = user_id;
        const users = await config_1.AppDataSource.getRepository(comments_entitiy_1.Comments)
            .createQueryBuilder()
            .update()
            .set({ comment_title })
            .where("id = :id", { id: id })
            .execute()
            .catch((error) => next(new error_handling_1.ErrorHandling(error.message, 400)));
        res.status(200).json({
            message: "Greatfull succssefulled...",
            status: 201,
        });
    }
    catch (error) {
        console.log(error);
        next(new error_handling_1.ErrorHandling(error, 400));
    }
};
exports.COMMENTS_PUT = COMMENTS_PUT;
const COMMENTS_DELETE = async (req, res, next) => {
    try {
        const { id } = req.params;
        const category = await config_1.AppDataSource.getRepository(comments_entitiy_1.Comments)
            .createQueryBuilder()
            .delete()
            .from(comments_entitiy_1.Comments)
            .where("id = :id", { id: id })
            .execute()
            .catch((error) => next(new error_handling_1.ErrorHandling(error.message, 400)));
        res.status(200).json({
            status: 200,
            message: "Greatfull successfulled...)",
            data: category,
        });
    }
    catch (error) {
        console.log(error);
        next(new error_handling_1.ErrorHandling(error, 500));
    }
};
exports.COMMENTS_DELETE = COMMENTS_DELETE;
