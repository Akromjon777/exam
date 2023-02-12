"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LOWER_GET = exports.LOWERS_GET = exports.LOWER_PATCH = exports.LOWER_DELETE = exports.LOWER_POST = void 0;
const config_1 = require("../../config/config");
const lower_entitiy_1 = require("../../entities/lower.entitiy");
const error_handling_1 = require("../../errors/error.handling");
const LOWER_GET = async (req, res, next) => {
    try {
        const { id } = req.params;
        const lower = await config_1.AppDataSource.getRepository(lower_entitiy_1.Lower)
            .find({
            where: { subCategory: { id: id } },
            relations: { products: true },
        })
            .catch((error) => next(new error_handling_1.ErrorHandling(error.message, 400)));
        res.status(200).json({
            ststus: 200,
            message: "Greatfull successfulled...)",
            data: lower,
        });
    }
    catch (error) {
        console.log(error);
        next(new error_handling_1.ErrorHandling(error, 500));
    }
};
exports.LOWER_GET = LOWER_GET;
const LOWERS_GET = async (req, res, next) => {
    try {
        const lower = await config_1.AppDataSource.getRepository(lower_entitiy_1.Lower)
            .find({
            relations: { products: true },
        })
            .catch((error) => next(new error_handling_1.ErrorHandling(error.message, 400)));
        res.status(200).json({
            ststus: 200,
            message: "Greatfull successfulled...)",
            data: lower,
        });
    }
    catch (error) {
        console.log(error);
        next(new error_handling_1.ErrorHandling(error, 500));
    }
};
exports.LOWERS_GET = LOWERS_GET;
const LOWER_POST = async (req, res, next) => {
    try {
        const { lower_title, subCategoryId } = req?.result;
        const subCategory = subCategoryId;
        const subCategorys = await config_1.AppDataSource.getRepository(lower_entitiy_1.Lower)
            .createQueryBuilder()
            .insert()
            .into(lower_entitiy_1.Lower)
            .values({ lower_title, subCategory })
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
exports.LOWER_POST = LOWER_POST;
const LOWER_DELETE = async (req, res, next) => {
    try {
        const { id } = req.params;
        console.log(id);
        const lower = await config_1.AppDataSource.getRepository(lower_entitiy_1.Lower)
            .createQueryBuilder()
            .delete()
            .from(lower_entitiy_1.Lower)
            .where("lower_id = :lower_id", { lower_id: id })
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
exports.LOWER_DELETE = LOWER_DELETE;
const LOWER_PATCH = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { lower_title, subCategoryId } = req.result;
        const users = await config_1.AppDataSource.getRepository(lower_entitiy_1.Lower)
            .createQueryBuilder()
            .update(lower_entitiy_1.Lower)
            .set({ lower_title, subCategory: subCategoryId })
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
exports.LOWER_PATCH = LOWER_PATCH;
