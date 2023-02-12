"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validate_middleware_1 = __importDefault(require("../../middleware/validate.middleware"));
const validation_1 = require("../../validation/validation");
const lower_1 = require("./lower");
const router = (0, express_1.Router)();
router.get("/lower/gets", lower_1.LOWERS_GET);
router.get("/lower/get/:id", lower_1.LOWER_GET);
router.post("/lower/post", (0, validate_middleware_1.default)(validation_1.lower_joi), lower_1.LOWER_POST);
router.delete("/lower/delete/:id", lower_1.LOWER_DELETE);
router.patch("/lower/patch/:id", (0, validate_middleware_1.default)(validation_1.lower_patch), lower_1.LOWER_PATCH);
exports.default = router;
