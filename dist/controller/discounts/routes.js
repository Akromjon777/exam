"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validate_middleware_1 = __importDefault(require("../../middleware/validate.middleware"));
const validation_1 = require("../../validation/validation");
const discounts_1 = require("./discounts");
const router = (0, express_1.Router)();
router.get("/discounts/get", discounts_1.DISCOUNTS_GET);
router.post("/discounts/put/:id", (0, validate_middleware_1.default)(validation_1.chegirma), discounts_1.DISCOUNTS_PUT);
router.delete("/discounts/delete/:id", discounts_1.DISCOUNTS_DELETE);
exports.default = router;
