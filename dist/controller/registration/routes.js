"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const multer_1 = __importDefault(require("../../lib/multer"));
const validate_middleware_1 = __importDefault(require("../../middleware/validate.middleware"));
const validation_1 = require("../../validation/validation");
const registration_1 = require("./registration");
const router = (0, express_1.Router)();
router.get("/user/get", registration_1.USER_TOKEN);
router.post("/user/post", (0, validate_middleware_1.default)(validation_1.users_joi), registration_1.USER_POST);
router.patch("/user/patch", multer_1.default.single("avatar"), (0, validate_middleware_1.default)(validation_1.users_pacht), registration_1.USER_PATCH);
exports.default = router;
