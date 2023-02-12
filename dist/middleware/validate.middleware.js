"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (schema) => {
    return (req, res, next) => {
        try {
            const { error, value } = schema.validate(req.body);
            if (error) {
                next(res.json({
                    messaga: error.message,
                }));
            }
            req.result = value;
            next();
        }
        catch (error) {
            console.log(error);
            next(error);
        }
    };
};
