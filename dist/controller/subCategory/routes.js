"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validate_middleware_1 = __importDefault(require("../../middleware/validate.middleware"));
const validation_1 = require("../../validation/validation");
const subCategory_1 = require("./subCategory");
const router = (0, express_1.Router)();
router.get("/subCategory/get", subCategory_1.SUB_CATEGORY_GET);
router.get("/subCategory/get/:id", subCategory_1.SUB_CATEGORYS_GET);
router.post("/subCategory/post", (0, validate_middleware_1.default)(validation_1.subCategory), subCategory_1.SUB_CATEGORY_POST);
router.delete("/subCategory/delete/:id", subCategory_1.SUB_CATEGORY_DELETE);
router.patch("/subCategory/patch/:id", (0, validate_middleware_1.default)(validation_1.subCategory_patch), subCategory_1.SUB_CATEGORY_PATCH);
exports.default = router;
