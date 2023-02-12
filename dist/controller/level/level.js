"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DARAJASI_PUT = void 0;
const config_1 = require("../../config/config");
const level_entitiy_1 = require("../../entities/level.entitiy");
const error_handling_1 = require("../../errors/error.handling");
const DARAJASI_PUT = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { star } = req.result;
        const darajasi = (await config_1.AppDataSource.getRepository(level_entitiy_1.Darajasi).findOne({
            where: { products: { id: id } },
        }));
        if (!darajasi) {
            console.log(star);
            const zakas = await config_1.AppDataSource.getRepository(level_entitiy_1.Darajasi)
                .createQueryBuilder()
                .insert()
                .into(level_entitiy_1.Darajasi)
                .values({ increment: 1, ortachas: star, star: star, products: id })
                .returning(["*"])
                .execute();
            res.status(200).json({
                message: "Greatfull successfulled...)",
                status: 201,
            });
        }
        const increment = darajasi?.increment + 1;
        const stars = darajasi?.star + star;
        const ortachas = (stars / increment).toFixed(2);
        const asd = darajasi.id;
        const zakas = await config_1.AppDataSource.createQueryBuilder()
            .update(level_entitiy_1.Darajasi)
            .set({
            increment: increment,
            ortachas: ortachas,
            star: stars,
            products: id,
        })
            .where("id = :id", { id: asd })
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
exports.DARAJASI_PUT = DARAJASI_PUT;
