"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validate_middleware_1 = __importDefault(require("../../middleware/validate.middleware"));
const validation_1 = require("../../validation/validation");
const category_1 = require("./category");
const router = (0, express_1.Router)();
router.get("/category/get", category_1.CATEGORY_GET);
router.post("/category/post", (0, validate_middleware_1.default)(validation_1.category), category_1.CATEGORY_POST);
router.delete("/category/delete/:id", category_1.CATEGORY_DELETE);
router.patch("/category/patch/:id", (0, validate_middleware_1.default)(validation_1.category_patch), category_1.CATEGORY_PATCH);
exports.default = router;
