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
exports.Darajasi = void 0;
const typeorm_1 = require("typeorm");
const products_entitiy_1 = require("./products.entitiy");
let Darajasi = class Darajasi {
    id;
    star;
    increment;
    ortachas;
    products;
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Darajasi.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Darajasi.prototype, "star", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Darajasi.prototype, "increment", void 0);
__decorate([
    (0, typeorm_1.Column)("decimal", {
        nullable: true,
        default: 0,
    }),
    __metadata("design:type", Number)
], Darajasi.prototype, "ortachas", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => products_entitiy_1.Products, (products) => products.darajasi),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", products_entitiy_1.Products)
], Darajasi.prototype, "products", void 0);
Darajasi = __decorate([
    (0, typeorm_1.Entity)({
        name: "Darajasi",
    })
], Darajasi);
exports.Darajasi = Darajasi;
