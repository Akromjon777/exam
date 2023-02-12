"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Korzinka = void 0;
const typeorm_1 = require("typeorm");
const products_entitiy_1 = require("./products.entitiy");
const users_entitiy_1 = require("./users.entitiy");
let Korzinka = class Korzinka {
    id;
    zakas_soni;
    products;
    users;
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Korzinka.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Korzinka.prototype, "zakas_soni", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => products_entitiy_1.Products, (products) => products.korzinka),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", products_entitiy_1.Products)
], Korzinka.prototype, "products", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => users_entitiy_1.Users, (users) => users.korzinka),
    __metadata("design:type", users_entitiy_1.Users)
], Korzinka.prototype, "users", void 0);
Korzinka = __decorate([
    (0, typeorm_1.Entity)({
        name: "Korzinka"
    })
], Korzinka);
exports.Korzinka = Korzinka;
