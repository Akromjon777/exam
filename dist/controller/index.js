"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const routes_1 = __importDefault(require("./login/routes"));
const routes_2 = __importDefault(require("./lower/routes"));
const routes_3 = __importDefault(require("./products/routes"));
const routes_4 = __importDefault(require("./registration/routes"));
const routes_5 = __importDefault(require("./subCategory/routes"));
const routes_6 = __importDefault(require("./category/routes"));
const routes_7 = __importDefault(require("./comments/routes"));
const routes_8 = __importDefault(require("./basket/routes"));
const routes_9 = __importDefault(require("./discounts/routes"));
const routes_10 = __importDefault(require("./level/routes"));
exports.default = [routes_1.default, routes_8.default, routes_10.default, routes_9.default, routes_2.default, routes_7.default, routes_3.default, routes_4.default, routes_5.default, routes_6.default];
