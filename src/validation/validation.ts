import Joi from "joi"
//Category validation
export const category = Joi.object().keys({
  category_title: Joi.string().required().max(100).min(2),
})
//subCategory validation
export const subCategory = Joi.object().keys({
  sub_category_title: Joi.string().required().max(100).min(2),
})
//subCategory_patch validation
export const subCategory_patch = Joi.object().keys({
  sub_category_title: Joi.string().max(100).min(2),
  categoryId: Joi.string(),
})
//lower_joi validation
export const lower_joi = Joi.object().keys({
  lower_title: Joi.string().required().max(100).min(2),
  subCategoryId: Joi.string().required(),
})
//lower_patch validation
export const lower_patch = Joi.object().keys({
  lower_title: Joi.string().max(100).min(2),
  subCategoryId: Joi.string(),
})
//products_joi validation
export const products_joi = Joi.object().keys({
  protuctes_brend: Joi.string(),
  protuctes_brendname: Joi.string(),
  protuctes_descirption: Joi.string(),
  protuctes_price: Joi.number(),
  protuctes_size: Joi.string(),
  protuctes_razmer: Joi.string(),
  protuctes_manufacturers_size: Joi.string(),
  packed_weight_kg: Joi.string(),
  lowerId: Joi.string(),
  protuctes_title: Joi.string(),
  aftur: Joi.string(),
})
//users_joi validation
export const users_joi = Joi.object().keys({
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  password: Joi.string().required(),
})
//login_joi validation
export const login_joi = Joi.object().keys({
  email: Joi.string().required(),
  password: Joi.string().required(),
})
//users_pacht validation
export const users_pacht = Joi.object().keys({
  first_name: Joi.string(),
  last_name: Joi.string(),
  email: Joi.string(),
  phone: Joi.string(),
  gendry: Joi.string(),
  password: Joi.string(),
})
//comments validation
export const comments = Joi.object().keys({
  comment_title: Joi.string().required(),
  productsId: Joi.string().required(),
})
//comments_put validation
export const comments_put = Joi.object().keys({
  comment_title: Joi.string(),
})
//zakas validation
export const zakas = Joi.object().keys({
  productsId: Joi.string().required(),
  soni: Joi.number().required(),
})
//chegirma validation
export const chegirma = Joi.object().keys({
  chegirma: Joi.number().required(),
})
//level_joi validation
export const level_joi = Joi.object().keys({
  star: Joi.number().required(),
})
//category_patch validation
export const category_patch = Joi.object().keys({
  category_title: Joi.string().required(),
})