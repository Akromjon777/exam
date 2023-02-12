"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validate_middleware_1 = __importDefault(require("../../middleware/validate.middleware"));
const validation_1 = require("../../validation/validation");
const comment_1 = require("./comment");
const router = (0, express_1.Router)();
router.get("/comments/get/:id", comment_1.COMMENTS_GET);
router.post("/comments/post", (0, validate_middleware_1.default)(validation_1.comments), comment_1.COMMENTS_POST);
router.delete("/comments/delete/:id", comment_1.COMMENTS_DELETE);
router.put("/comments/put/:user_id", (0, validate_middleware_1.default)(validation_1.comments_put), comment_1.COMMENTS_PUT);
exports.default = router;
