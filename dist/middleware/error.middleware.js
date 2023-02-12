"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorMiddleare = void 0;
const error_handling_1 = require("../errors/error.handling");
const ErrorMiddleare = async (error, req, res, next) => {
    try {
        res.status(error.status).json({
            message: error.message,
            status: error.status,
        });
    }
    catch (error) {
        console.log(error);
        next(new error_handling_1.ErrorHandling(error, 400));
    }
};
exports.ErrorMiddleare = ErrorMiddleare;
