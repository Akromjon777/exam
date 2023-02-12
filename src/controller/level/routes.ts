import { Router } from "express"
import validateMiddleware from "../../middleware/validate.middleware"
import { level_joi } from "../../validation/validation"
import { DARAJASI_PUT } from "./level"

const router = Router()

router.put("/level/put/:id", validateMiddleware(level_joi), DARAJASI_PUT)

export default router