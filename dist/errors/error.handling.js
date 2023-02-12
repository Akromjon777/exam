"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandling = void 0;
class ErrorHandling extends Error {
    message;
    status;
    constructor(message, status) {
        super();
        (this.message = message), (this.status = status);
    }
}
exports.ErrorHandling = ErrorHandling;
