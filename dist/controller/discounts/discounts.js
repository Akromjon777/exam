"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DISCOUNTS_GET = exports.DISCOUNTS_DELETE = exports.DISCOUNTS_PUT = void 0;
const config_1 = require("../../config/config");
const products_entitiy_1 = require("../../entities/products.entitiy");
const error_handling_1 = require("../../errors/error.handling");
const DISCOUNTS_GET = async (req, res, next) => {
    try {
        const products = await config_1.AppDataSource.getRepository(products_entitiy_1.Products)
            .createQueryBuilder()
            .orderBy("Products.chegirma", "DESC")
            .getMany();
        res.status(200).json({
            status: 200,
            message: "Greatfull succssefulled...",
            data: products,
        });
    }
    catch (error) {
        console.log(error);
        next(new error_handling_1.ErrorHandling(error, 400));
    }
};
exports.DISCOUNTS_GET = DISCOUNTS_GET;
const DISCOUNTS_PUT = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { chegirma } = req.result;
        if (chegirma < 0 || 100 <= chegirma) {
            return next(new error_handling_1.ErrorHandling("Please enter a number greater than 1 and less than 100", 400));
        }
        const products = await config_1.AppDataSource.getRepository(products_entitiy_1.Products).find({
            where: { id: id },
        });
        let asd = [];
        const productsFilter = products.filter((e) => {
            if (e.protuctes_price) {
                asd.push(e.protuctes_price);
                return e.protuctes_price;
            }
        });
        let disContPrice = +((asd[0] * (100 - chegirma)) / 100).toFixed(2);
        const discounts = await config_1.AppDataSource.getRepository(products_entitiy_1.Products)
            .createQueryBuilder()
            .update(products_entitiy_1.Products)
            .set({ chegirma: chegirma, newPriceCount: disContPrice })
            .where("id = :id", { id: id })
            .execute()
            .catch((error) => next(new error_handling_1.ErrorHandling(error.message, 403)));
        res.status(200).json({
            status: 201,
            message: "Greatfull successfulled...)",
            data: `${disContPrice} new price`,
        });
    }
    catch (error) {
        console.log(error);
        next(new error_handling_1.ErrorHandling(error, 400));
    }
};
exports.DISCOUNTS_PUT = DISCOUNTS_PUT;
const DISCOUNTS_DELETE = async (req, res, next) => {
    try {
        const { id } = req.params;
        const chegirma = 0;
        const newPriceCount = 0;
        const discounts = await config_1.AppDataSource.getRepository(products_entitiy_1.Products)
            .createQueryBuilder()
            .update(products_entitiy_1.Products)
            .set({ chegirma: chegirma, newPriceCount })
            .where("id = :id", { id: id })
            .execute()
            .catch((error) => next(new error_handling_1.ErrorHandling(error.message, 403)));
        res.status(200).json({
            status: 200,
            message: "Greatfull successfulled...)",
        });
    }
    catch (error) {
        console.log(error);
        next(new error_handling_1.ErrorHandling(error, 400));
    }
};
exports.DISCOUNTS_DELETE = DISCOUNTS_DELETE;
