import {Router} from "express"
import validateMiddleware from "../../middleware/validate.middleware"
import { zakas } from "../../validation/validation"
import { ZAKAS_GET, ZAKAS_POST } from "./basket"
const router = Router()
router.get("/order/get", ZAKAS_GET)
router.post("/order/post", validateMiddleware(zakas) ,ZAKAS_POST)
export default router