"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const error_middleware_1 = require("./middleware/error.middleware");
const controller_1 = __importDefault(require("./controller"));
const config_1 = require("./config/config");
const app = (0, express_1.default)();
app.use(express_1.default.json());
config_1.AppDataSource.initialize()
    .then(() => console.log('Connected'))
    .catch((error) => console.log(error));
app.use(controller_1.default);
app.use('/*', (req, res, next) => {
    res.status(500).json({
        message: req.url + 'not found url',
    });
});
app.use(error_middleware_1.ErrorMiddleare);
app.listen(1717, () => {
    console.log(1717);
});
