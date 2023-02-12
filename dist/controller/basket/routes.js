"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validate_middleware_1 = __importDefault(require("../../middleware/validate.middleware"));
const validation_1 = require("../../validation/validation");
const basket_1 = require("./basket");
const router = (0, express_1.Router)();
router.get("/order/get", basket_1.ZAKAS_GET);
router.post("/order/post", (0, validate_middleware_1.default)(validation_1.zakas), basket_1.ZAKAS_POST);
exports.default = router;
