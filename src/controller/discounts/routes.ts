import { Router } from "express"
import validateMiddleware from "../../middleware/validate.middleware"
import { chegirma } from "../../validation/validation"
import { DISCOUNTS_DELETE, DISCOUNTS_GET, DISCOUNTS_PUT } from "./discounts"

const router = Router()

router.get("/discounts/get", DISCOUNTS_GET)
router.put("/discounts/put/:id", validateMiddleware(chegirma), DISCOUNTS_PUT)
router.delete("/discounts/delete/:id", DISCOUNTS_DELETE)

export default router