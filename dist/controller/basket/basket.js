"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZAKAS_POST = exports.ZAKAS_GET = void 0;
const config_1 = require("../../config/config");
const basket_entitiy_1 = require("../../entities/basket.entitiy");
const products_entitiy_1 = require("../../entities/products.entitiy");
const users_entitiy_1 = require("../../entities/users.entitiy");
const error_handling_1 = require("../../errors/error.handling");
const jwt_1 = __importDefault(require("../../lib/jwt"));
const ZAKAS_POST = async (req, res, next) => {
    try {
        const { token } = req.headers;
        const usersId = jwt_1.default.verify(token);
        const { productsId, soni } = req.result;
        console.log(productsId, usersId);
        const zakas = await config_1.AppDataSource.getRepository(basket_entitiy_1.Korzinka).findOne({
            where: { products: { id: productsId }, users: { id: usersId } },
        });
        if (!zakas) {
            const products_id = (await config_1.AppDataSource.getRepository(products_entitiy_1.Products).findOne({
                where: { id: productsId },
            }));
            console.log(products_id);
            const id_prod = products_id?.nechta_sotdi + 1;
            const users = await config_1.AppDataSource.getRepository(products_entitiy_1.Products)
                .createQueryBuilder()
                .update(products_entitiy_1.Products)
                .set({
                nechta_sotdi: id_prod,
            })
                .where("id = :id", { id: productsId })
                .execute();
            const zakas = await config_1.AppDataSource.getRepository(basket_entitiy_1.Korzinka)
                .createQueryBuilder()
                .insert()
                .into(basket_entitiy_1.Korzinka)
                .values({ products: productsId, users: usersId, zakas_soni: soni })
                .returning(["*"])
                .execute();
            return res.status(200).json({
                message: "Greatfull successfulled...)",
                status: 201,
            });
        }
        if (zakas) {
            const products_id = await config_1.AppDataSource.getRepository(products_entitiy_1.Products).findOne({
                where: { id: productsId },
            });
            console.log(products_id);
            const id_prod = (products_id?.nechta_sotdi + 1);
            console.log(id_prod);
            const users = await config_1.AppDataSource.getRepository(products_entitiy_1.Products)
                .createQueryBuilder()
                .update(products_entitiy_1.Products)
                .set({
                nechta_sotdi: id_prod
            })
                .where("id = :id", { id: productsId })
                .execute();
            const zak = zakas.zakas_soni + 1;
            const korzinka = await config_1.AppDataSource.getRepository(basket_entitiy_1.Korzinka)
                .createQueryBuilder()
                .update(basket_entitiy_1.Korzinka)
                .set({
                zakas_soni: zak
            })
                .where("id = :id", { id: zakas.id })
                .execute();
            return res.status(200).json({
                message: "Greatfull successfulled...)",
                status: 201,
            });
        }
    }
    catch (error) {
        console.log(error);
        next(new error_handling_1.ErrorHandling(error, 400));
    }
};
exports.ZAKAS_POST = ZAKAS_POST;
const ZAKAS_GET = async (req, res, next) => {
    try {
        const { token } = req.headers;
        const user_id = jwt_1.default.verify(token);
        const zakaslar = await config_1.AppDataSource.getRepository(users_entitiy_1.Users).findOne({
            where: { id: user_id },
            relations: { korzinka: { products: true } },
            select: {
                korzinka: {
                    zakas_soni: true,
                    products: {
                        img: true,
                        chegirma: true,
                        protuctes_brendname: true,
                        protuctes_price: true,
                        newPriceCount: true,
                    }
                }
            }
        });
        return res.status(200).json({
            message: "Greatfull successfulled...)",
            status: 201,
            data: zakaslar
        });
    }
    catch (error) {
        console.log(error);
        next(new error_handling_1.ErrorHandling(error, 400));
    }
};
exports.ZAKAS_GET = ZAKAS_GET;
