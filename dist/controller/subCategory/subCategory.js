"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SUB_CATEGORY_GET = exports.SUB_CATEGORYS_GET = exports.SUB_CATEGORY_DELETE = exports.SUB_CATEGORY_PATCH = exports.SUB_CATEGORY_POST = void 0;
const config_1 = require("../../config/config");
const redis_1 = require("../../config/redis");
const subCategory_entitiy_1 = require("../../entities/subCategory.entitiy");
const error_handling_1 = require("../../errors/error.handling");
const SUB_CATEGORY_GET = async (req, res, next) => {
    try {
        const redis = await (0, redis_1.Client)();
        const sub_category = await redis?.get("subCategory");
        if (!sub_category) {
            const subCategory = await config_1.AppDataSource.getRepository(subCategory_entitiy_1.SubCategory).find({
                relations: { lower: true },
            });
            await redis?.setEx("subCategory", 15, JSON.stringify(subCategory));
            return res.json({
                ststus: 200,
                message: "Greatfull successfulled...)",
                data: subCategory,
            });
        }
        return res.json({
            ststus: 200,
            message: "Greatfull successfulled...)",
            data: JSON.parse(sub_category),
        });
    }
    catch (error) {
        console.log(error);
        next(new error_handling_1.ErrorHandling(error, 500));
    }
};
exports.SUB_CATEGORY_GET = SUB_CATEGORY_GET;
const SUB_CATEGORY_POST = async (req, res, next) => {
    try {
        const { sub_category_title, categoryId } = req?.result;
        const category = categoryId;
        const subCategorys = await config_1.AppDataSource.getRepository(subCategory_entitiy_1.SubCategory)
            .createQueryBuilder()
            .insert()
            .into(subCategory_entitiy_1.SubCategory)
            .values({ sub_category_title, category })
            .execute()
            .catch((error) => next(new error_handling_1.ErrorHandling(error.message, 400)));
        res.status(200).json({
            ststus: 200,
            message: "Greatfull successfulled...)",
        });
    }
    catch (error) {
        console.log(error);
        next(new error_handling_1.ErrorHandling(error, 500));
    }
};
exports.SUB_CATEGORY_POST = SUB_CATEGORY_POST;
const SUB_CATEGORY_DELETE = async (req, res, next) => {
    try {
        const { id } = req.params;
        const category = await config_1.AppDataSource.getRepository(subCategory_entitiy_1.SubCategory)
            .createQueryBuilder()
            .delete()
            .from(subCategory_entitiy_1.SubCategory)
            .where("id = :subCategory_id", { subCategory_id: id })
            .execute()
            .catch((error) => next(new error_handling_1.ErrorHandling(error.message, 400)));
        res.status(200).json({
            status: 200,
            message: "Greatfull successfulled...)",
        });
    }
    catch (error) {
        console.log(error);
        next(new error_handling_1.ErrorHandling(error, 500));
    }
};
exports.SUB_CATEGORY_DELETE = SUB_CATEGORY_DELETE;
const SUB_CATEGORY_PATCH = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { sub_category_title, category } = req.result;
        const users = await config_1.AppDataSource.getRepository(subCategory_entitiy_1.SubCategory)
            .createQueryBuilder()
            .update(subCategory_entitiy_1.SubCategory)
            .set({ sub_category_title, category })
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
exports.SUB_CATEGORY_PATCH = SUB_CATEGORY_PATCH;
const SUB_CATEGORYS_GET = async (req, res, next) => {
    try {
        const { id } = req.params;
        console.log(id);
        const subCategory = await config_1.AppDataSource.getRepository(subCategory_entitiy_1.SubCategory)
            .find({
            where: { category: { id: id } },
            relations: { lower: true },
        })
            .catch((error) => next(new error_handling_1.ErrorHandling("Bunaqa SubCategoriy yuq ( ˘︹˘ )", 400)));
        res.status(200).json({
            status: 200,
            message: "Greatfull successfulled...)",
            data: subCategory,
        });
    }
    catch (error) {
        console.log(error);
        next(new error_handling_1.ErrorHandling(error, 500));
    }
};
exports.SUB_CATEGORYS_GET = SUB_CATEGORYS_GET;
