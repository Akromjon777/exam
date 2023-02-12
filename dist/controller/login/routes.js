"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validate_middleware_1 = __importDefault(require("../../middleware/validate.middleware"));
const validation_1 = require("../../validation/validation");
const login_1 = require("./login");
const router = (0, express_1.Router)();
router.post("/login/post", (0, validate_middleware_1.default)(validation_1.login_joi), login_1.LOGIN_POST);
exports.default = router;
