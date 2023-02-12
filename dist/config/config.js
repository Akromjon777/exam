"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SECRET_KEY = exports.AppDataSource = void 0;
const path_1 = __importDefault(require("path"));
const typeorm_1 = require("typeorm");
const AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "john.db.elephantsql.com",
    port: 5432,
    password: "QnxzvprMjpGzkD6U7IFWjSWbVePglSpP",
    username: "iuwelnfo",
    database: "iuwelnfo",
    entities: [
        path_1.default.resolve(__dirname, '..', 'entities', '*.entitiy.{ts,js}'),
    ],
    migrations: [
        path_1.default.resolve(__dirname, '..', 'migrations', '**/*.{ts,js}'),
    ],
    logging: true,
    synchronize: false,
});
exports.AppDataSource = AppDataSource;
const SECRET_KEY = String(process.env.SECRET_KEY) || ")";
exports.SECRET_KEY = SECRET_KEY;
