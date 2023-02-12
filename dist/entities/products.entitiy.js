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
exports.Products = void 0;
const typeorm_1 = require("typeorm");
const comments_entitiy_1 = require("./comments.entitiy");
const level_entitiy_1 = require("./level.entitiy");
const basket_entitiy_1 = require("./basket.entitiy");
const lower_entitiy_1 = require("./lower.entitiy");
let Products = class Products {
    id;
    protuctes_brend;
    protuctes_brendname;
    aftur;
    protuctes_title;
    protuctes_descirption;
    protuctes_price;
    newPriceCount;
    protuctes_size;
    protuctes_razmer;
    protuctes_manufacturers_size;
    packed_weight_kg;
    img;
    protuctes_rate;
    chegirma;
    nechta_sotdi;
    time;
    lower;
    comments;
    korzinka;
    darajasi;
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid", {
        name: "products_id",
    }),
    __metadata("design:type", String)
], Products.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    __metadata("design:type", String)
], Products.prototype, "protuctes_brend", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    __metadata("design:type", String)
], Products.prototype, "protuctes_brendname", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    __metadata("design:type", String)
], Products.prototype, "aftur", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    __metadata("design:type", String)
], Products.prototype, "protuctes_title", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    __metadata("design:type", String)
], Products.prototype, "protuctes_descirption", void 0);
__decorate([
    (0, typeorm_1.Column)("decimal", {
        nullable: true,
    }),
    __metadata("design:type", Number)
], Products.prototype, "protuctes_price", void 0);
__decorate([
    (0, typeorm_1.Column)("decimal", { default: 0 }),
    __metadata("design:type", Number)
], Products.prototype, "newPriceCount", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    __metadata("design:type", String)
], Products.prototype, "protuctes_size", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    __metadata("design:type", String)
], Products.prototype, "protuctes_razmer", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    __metadata("design:type", String)
], Products.prototype, "protuctes_manufacturers_size", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    __metadata("design:type", String)
], Products.prototype, "packed_weight_kg", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    __metadata("design:type", String)
], Products.prototype, "img", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    __metadata("design:type", String)
], Products.prototype, "protuctes_rate", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], Products.prototype, "chegirma", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], Products.prototype, "nechta_sotdi", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" }),
    __metadata("design:type", String)
], Products.prototype, "time", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => lower_entitiy_1.Lower, (lower) => lower.products),
    __metadata("design:type", lower_entitiy_1.Lower)
], Products.prototype, "lower", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => comments_entitiy_1.Comments, (comments) => comments.products),
    __metadata("design:type", Array)
], Products.prototype, "comments", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => basket_entitiy_1.Korzinka, (korzinka) => korzinka.products),
    __metadata("design:type", Array)
], Products.prototype, "korzinka", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => level_entitiy_1.Darajasi, (darajasi) => darajasi.products),
    __metadata("design:type", Array)
], Products.prototype, "darajasi", void 0);
Products = __decorate([
    (0, typeorm_1.Entity)({
        name: "Products",
    })
], Products);
exports.Products = Products;
