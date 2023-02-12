"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.category_patch = exports.level_joi = exports.chegirma = exports.zakas = exports.comments_put = exports.comments = exports.users_pacht = exports.login_joi = exports.users_joi = exports.products_joi = exports.lower_patch = exports.lower_joi = exports.subCategory_patch = exports.subCategory = exports.category = void 0;
const joi_1 = __importDefault(require("joi"));
//Category validation
exports.category = joi_1.default.object().keys({
    category_title: joi_1.default.string().required().max(100).min(2),
});
//subCategory validation
exports.subCategory = joi_1.default.object().keys({
    sub_category_title: joi_1.default.string().required().max(100).min(2),
});
//subCategory_patch validation
exports.subCategory_patch = joi_1.default.object().keys({
    sub_category_title: joi_1.default.string().max(100).min(2),
    categoryId: joi_1.default.string(),
});
//lower_joi validation
exports.lower_joi = joi_1.default.object().keys({
    lower_title: joi_1.default.string().required().max(100).min(2),
    subCategoryId: joi_1.default.string().required(),
});
//lower_patch validation
exports.lower_patch = joi_1.default.object().keys({
    lower_title: joi_1.default.string().max(100).min(2),
    subCategoryId: joi_1.default.string(),
});
//products_joi validation
exports.products_joi = joi_1.default.object().keys({
    protuctes_brend: joi_1.default.string(),
    protuctes_brendname: joi_1.default.string(),
    protuctes_descirption: joi_1.default.string(),
    protuctes_price: joi_1.default.number(),
    protuctes_size: joi_1.default.string(),
    protuctes_razmer: joi_1.default.string(),
    protuctes_manufacturers_size: joi_1.default.string(),
    packed_weight_kg: joi_1.default.string(),
    lowerId: joi_1.default.string(),
    protuctes_title: joi_1.default.string(),
    aftur: joi_1.default.string(),
});
//users_joi validation
exports.users_joi = joi_1.default.object().keys({
    first_name: joi_1.default.string().required(),
    last_name: joi_1.default.string().required(),
    email: joi_1.default.string().required(),
    phone: joi_1.default.string().required(),
    password: joi_1.default.string().required(),
});
//login_joi validation
exports.login_joi = joi_1.default.object().keys({
    email: joi_1.default.string().required(),
    password: joi_1.default.string().required(),
});
//users_pacht validation
exports.users_pacht = joi_1.default.object().keys({
    first_name: joi_1.default.string(),
    last_name: joi_1.default.string(),
    email: joi_1.default.string(),
    phone: joi_1.default.string(),
    gendry: joi_1.default.string(),
    password: joi_1.default.string(),
});
//comments validation
exports.comments = joi_1.default.object().keys({
    comment_title: joi_1.default.string().required(),
    productsId: joi_1.default.string().required(),
});
//comments_put validation
exports.comments_put = joi_1.default.object().keys({
    comment_title: joi_1.default.string(),
});
//zakas validation
exports.zakas = joi_1.default.object().keys({
    productsId: joi_1.default.string().required(),
    soni: joi_1.default.number().required(),
});
//chegirma validation
exports.chegirma = joi_1.default.object().keys({
    chegirma: joi_1.default.number().required(),
});
//level_joi validation
exports.level_joi = joi_1.default.object().keys({
    star: joi_1.default.number().required(),
});
//category_patch validation
exports.category_patch = joi_1.default.object().keys({
    category_title: joi_1.default.string().required(),
});
