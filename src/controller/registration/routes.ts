import { Router } from "express"
import upload from "../../lib/multer"
import validateMiddleware from "../../middleware/validate.middleware"
import { users_joi, users_pacht } from "../../validation/validation"
import { USER_PATCH, USER_POST, USER_TOKEN } from "./registration"

const router = Router()

router.get("/user/get", USER_TOKEN)
router.post("/user/post", validateMiddleware(users_joi), USER_POST)
router.patch("/user/patch", upload.single("avatar"), validateMiddleware(users_pacht), USER_PATCH)

export default router
