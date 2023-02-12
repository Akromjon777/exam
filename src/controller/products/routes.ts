import { Router } from "express"
import upload from "../../lib/multer"
import validateMiddleware from "../../middleware/validate.middleware"
import { products_joi } from "../../validation/validation"
import {
  CHEAP_ONES,
  PRODUCTS_DELETE,
  PRODUCTS_GET,
  PRODUCTS_GET_ID,
  PRODUCTS_GET_ONE,
  PRODUCTS_PATCH,
  PRODUCTS_POST,
  PRODUCTS_TIME,
} from "./products"

const router = Router()

router.get("/products/get", PRODUCTS_GET)
router.get("/products/get/:id", PRODUCTS_GET_ONE)
router.get("/lewer/product/get/:id", PRODUCTS_GET_ID)
router.get("/products/cheap/ones", CHEAP_ONES)
router.get("/products/time", PRODUCTS_TIME)
router.post("/products/post", upload.single("img"), validateMiddleware(products_joi), PRODUCTS_POST)
router.patch("/products/patch/:id", validateMiddleware(products_joi), PRODUCTS_PATCH)
router.delete("/products/delete/:id", PRODUCTS_DELETE)

export default router
