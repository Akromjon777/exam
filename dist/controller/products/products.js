"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PRODUCTS_GET = exports.PRODUCTS_DELETE = exports.PRODUCTS_PATCH = exports.PRODUCTS_GET_ID = exports.PRODUCTS_GET_ONE = exports.CHEAP_ONES = exports.PRODUCTS_TIME = exports.PRODUCTS_POST = exports.PRODUCTS_REYTING = void 0;
const config_1 = require("../../config/config");
const redis_1 = require("../../config/redis");
const products_entitiy_1 = require("../../entities/products.entitiy");
const users_entitiy_1 = require("../../entities/users.entitiy");
const error_handling_1 = require("../../errors/error.handling");
const PRODUCTS_REYTING = async (req, res, next) => {
    try {
        const cilint = await (0, redis_1.Client)();
        const reyting = await cilint?.get("reyting");
        if (!reyting) {
            const product = await config_1.AppDataSource.getRepository(products_entitiy_1.Products).find({
                relations: { darajasi: true },
                order: { darajasi: { ortachas: "ASC" } },
                select: {
                    chegirma: true,
                    darajasi: { ortachas: true },
                    protuctes_brend: true,
                    protuctes_price: true,
                    img: true,
                    protuctes_brendname: true,
                    newPriceCount: true,
                    time: true,
                },
            });
            await cilint?.setEx("reyting", 15, JSON.stringify(product));
            res.status(200).json({
                status: 200,
                message: "Greatfull succssefulled...",
                data: product,
            });
        }
        if (reyting) {
            res.status(200).json({
                status: 200,
                message: "Greatfull succssefulled...",
                data: JSON.parse(reyting),
            });
        }
    }
    catch (error) {
        console.log(error);
        next(new error_handling_1.ErrorHandling(error, 400));
    }
};
exports.PRODUCTS_REYTING = PRODUCTS_REYTING;
const PRODUCTS_TIME = async (req, res, next) => {
    try {
        const cilint = await (0, redis_1.Client)();
        const time = await cilint?.get("time");
        if (!time) {
            const product = await config_1.AppDataSource.getRepository(products_entitiy_1.Products)
                .find({
                relations: { darajasi: true },
                order: { time: "DESC" },
                select: {
                    chegirma: true,
                    darajasi: { ortachas: true },
                    protuctes_brend: true,
                    protuctes_price: true,
                    img: true,
                    protuctes_brendname: true,
                    newPriceCount: true,
                    time: true,
                },
            })
                .catch((error) => next(new error_handling_1.ErrorHandling(error.message, 400)));
            await cilint?.setEx("time", 15, JSON.stringify(product));
            res.status(200).json({
                status: 200,
                message: "Greatfull succssefulled...",
                data: product,
            });
        }
        if (time) {
            res.status(200).json({
                status: 200,
                message: "Greatfull succssefulled...",
                data: JSON.parse(time),
            });
        }
    }
    catch (error) {
        console.log(error);
        next(new error_handling_1.ErrorHandling(error, 400));
    }
};
exports.PRODUCTS_TIME = PRODUCTS_TIME;
const CHEAP_ONES = async (req, res, next) => {
    try {
        const cilint = await (0, redis_1.Client)();
        const ones = await cilint?.get("ones");
        if (!ones) {
            const product = await config_1.AppDataSource.getRepository(products_entitiy_1.Products)
                .find({
                relations: { darajasi: true },
                order: { protuctes_price: "ASC" },
                select: {
                    chegirma: true,
                    darajasi: { ortachas: true },
                    protuctes_brend: true,
                    protuctes_price: true,
                    img: true,
                    protuctes_brendname: true,
                    newPriceCount: true,
                    time: true,
                },
            })
                .catch((error) => next(new error_handling_1.ErrorHandling(error.message, 400)));
            await cilint?.setEx("ones", 15, JSON.stringify(product));
            res.status(200).json({
                status: 200,
                message: "Greatfull succssefulled...",
                data: product,
            });
        }
        if (ones) {
            res.status(200).json({
                status: 200,
                message: "Greatfull succssefulled...",
                data: JSON.parse(ones),
            });
        }
    }
    catch (error) {
        console.log(error);
        next(new error_handling_1.ErrorHandling(error, 400));
    }
};
exports.CHEAP_ONES = CHEAP_ONES;
const PRODUCTS_GET_ONE = async (req, res, next) => {
    try {
        const { id } = req.params;
        const cilint = await (0, redis_1.Client)();
        const product = await cilint?.get("one");
        if (!product) {
            const find_product = await config_1.AppDataSource.getRepository(products_entitiy_1.Products)
                .findOne({
                where: { id: id },
                relations: {
                    darajasi: true,
                },
                select: {
                    darajasi: {
                        ortachas: true,
                    },
                },
            })
                .catch((error) => next(new error_handling_1.ErrorHandling(error.message, 400)));
            await cilint?.setEx("one", 15, JSON.stringify(find_product));
            res.status(200).json({
                status: 200,
                message: "Greatfull succssefulled...",
                data: find_product,
            });
        }
        if (product) {
            res.status(200).json({
                status: 200,
                message: "Greatfull succssefulled...",
                data: JSON.parse(product),
            });
        }
    }
    catch (error) {
        console.log(error);
        next(new error_handling_1.ErrorHandling(error, 400));
    }
};
exports.PRODUCTS_GET_ONE = PRODUCTS_GET_ONE;
const PRODUCTS_GET = async (req, res, next) => {
    try {
        const { take, skip } = req.query;
        const page = take ? take : 1;
        const limit = skip ? skip : 10;
        const pag = (page - 1) * limit;
        const lim = page * limit;
        const users = await config_1.AppDataSource.getRepository(users_entitiy_1.Users).find();
        const products = await config_1.AppDataSource.getRepository(products_entitiy_1.Products)
            .find({
            take: pag,
            skip: lim,
            // relations: { darajasi: true },
            // select: {
            //   chegirma: true,
            //   darajasi: { ortachas: true },
            //   protuctes_brend: true,
            //   protuctes_price: true,
            //   img: true,
            //   protuctes_brendname: true,
            //   newPriceCount: true,
            // },
        })
            .catch((error) => next(new error_handling_1.ErrorHandling(error.message, 400)));
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
exports.PRODUCTS_GET = PRODUCTS_GET;
const PRODUCTS_GET_ID = async (req, res, next) => {
    try {
        const { id } = req.params;
        const cilint = await (0, redis_1.Client)();
        const category = await cilint?.get("product");
        if (!category) {
            const products = await config_1.AppDataSource.getRepository(products_entitiy_1.Products)
                .find({
                where: { lower: { id: id }, darajasi: true },
                relations: { darajasi: true },
                select: {
                    chegirma: true,
                    darajasi: { ortachas: true },
                    protuctes_brend: true,
                    protuctes_price: true,
                    img: true,
                    protuctes_brendname: true,
                    newPriceCount: true,
                },
            })
                .catch((error) => next(new error_handling_1.ErrorHandling(error.message, 400)));
            await cilint?.setEx("product", 15, JSON.stringify(products));
            res.status(200).json({
                status: 200,
                message: "Greatfull succssefulled...",
                data: products,
            });
        }
        if (category) {
            res.status(200).json({
                status: 200,
                message: "Greatfull succssefulled...",
                data: JSON.parse(category),
            });
        }
    }
    catch (error) {
        console.log(error);
        next(new error_handling_1.ErrorHandling(error, 400));
    }
};
exports.PRODUCTS_GET_ID = PRODUCTS_GET_ID;
const PRODUCTS_POST = async (req, res, next) => {
    try {
        const { protuctes_brend, protuctes_brendname, protuctes_descirption, protuctes_price, protuctes_size, protuctes_razmer, protuctes_manufacturers_size, packed_weight_kg, protuctes_title, lowerId, aftur, } = req.result;
        const { filename } = req.file;
        const lower = lowerId;
        const img = filename;
        const products = await config_1.AppDataSource.getRepository(products_entitiy_1.Products)
            .createQueryBuilder()
            .insert()
            .into(products_entitiy_1.Products)
            .values({
            aftur,
            protuctes_brend,
            protuctes_brendname,
            protuctes_descirption,
            protuctes_price,
            protuctes_size,
            protuctes_razmer,
            protuctes_manufacturers_size,
            packed_weight_kg,
            protuctes_title,
            img,
            lower,
        })
            .execute()
            .catch((error) => next(new error_handling_1.ErrorHandling(error.message, 400)));
        res.status(200).json({
            status: 201,
            message: "Greatfull succssefulled...",
        });
    }
    catch (error) {
        console.log(error);
        next(new error_handling_1.ErrorHandling(error, 400));
    }
};
exports.PRODUCTS_POST = PRODUCTS_POST;
const PRODUCTS_PATCH = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { protuctes_brend, protuctes_brendname, protuctes_descirption, protuctes_price, protuctes_size, protuctes_razmer, protuctes_manufacturers_size, packed_weight_kg, protuctes_title, lowerId, aftur, } = req.result;
        const lower = lowerId;
        const users = await config_1.AppDataSource.getRepository(products_entitiy_1.Products)
            .createQueryBuilder()
            .update(products_entitiy_1.Products)
            .set({
            protuctes_brend,
            protuctes_brendname,
            protuctes_descirption,
            protuctes_price,
            protuctes_size,
            protuctes_razmer,
            protuctes_manufacturers_size,
            packed_weight_kg,
            protuctes_title,
            lower,
            aftur,
        })
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
exports.PRODUCTS_PATCH = PRODUCTS_PATCH;
const PRODUCTS_DELETE = async (req, res, next) => {
    try {
        const { id } = req.params;
        const category = await config_1.AppDataSource.getRepository(products_entitiy_1.Products)
            .createQueryBuilder()
            .delete()
            .from(products_entitiy_1.Products)
            .where("id = :id", { id: id })
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
exports.PRODUCTS_DELETE = PRODUCTS_DELETE;
