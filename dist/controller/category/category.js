"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CATEGORY_POST = exports.CATEGORY_PATCH = exports.CATEGORY_DELETE = exports.CATEGORY_GET = void 0;
const config_1 = require("../../config/config");
const redis_1 = require("../../config/redis");
const category_entitiy_1 = require("../../entities/category.entitiy");
const error_handling_1 = require("../../errors/error.handling");
const CATEGORY_GET = async (req, res, next) => {
    try {
        const cilint = await (0, redis_1.Client)();
        const category = await cilint?.get("category");
        if (!category) {
            const categorys = await config_1.AppDataSource.getRepository(category_entitiy_1.Category)
                .find({
                relations: { subCategory: true },
            })
                .catch((error) => next(new error_handling_1.ErrorHandling(error.message, 400)));
            await cilint?.setEx("category", 15, JSON.stringify(categorys));
            return res.json({
                ststus: 200,
                message: "Greatfull successfulled...)",
                data: categorys,
            });
        }
        if (category) {
            res.json({
                ststus: 200,
                message: "Greatfull successfulled...)",
                data: JSON.parse(category),
            });
        }
    }
    catch (error) {
        console.log(error);
        next(new error_handling_1.ErrorHandling(error, 500));
    }
};
exports.CATEGORY_GET = CATEGORY_GET;
const CATEGORY_POST = async (req, res, next) => {
    try {
        const { category_title } = req.result;
        console.log(category_title);
        const category = await config_1.AppDataSource.getRepository(category_entitiy_1.Category)
            .createQueryBuilder()
            .insert()
            .into(category_entitiy_1.Category)
            .values({ category_title })
            .execute()
            .catch((error) => next(new error_handling_1.ErrorHandling(error.message, 400)));
        res.status(200).json({
            ststus: 200,
            message: "Greatfull successfulled...)",
            data: category,
        });
    }
    catch (error) {
        console.log(error);
        next(new error_handling_1.ErrorHandling(error, 500));
    }
};
exports.CATEGORY_POST = CATEGORY_POST;
const CATEGORY_DELETE = async (req, res, next) => {
    try {
        const { id } = req.params;
        const category = await config_1.AppDataSource.getRepository(category_entitiy_1.Category)
            .createQueryBuilder()
            .delete()
            .from(category_entitiy_1.Category)
            .where("id = :category_id", { category_id: id })
            .execute();
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
exports.CATEGORY_DELETE = CATEGORY_DELETE;
const CATEGORY_PATCH = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { category_title } = req.result;
        console.log(category_title);
        console.log(id);
        const users = await config_1.AppDataSource.getRepository(category_entitiy_1.Category)
            .createQueryBuilder()
            .update(category_entitiy_1.Category)
            .set({ category_title })
            .where("id = :id", { id: id })
            .execute();
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
exports.CATEGORY_PATCH = CATEGORY_PATCH;
