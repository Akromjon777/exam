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
exports.Lower = void 0;
const typeorm_1 = require("typeorm");
const products_entitiy_1 = require("./products.entitiy");
const subCategory_entitiy_1 = require("./subCategory.entitiy");
let Lower = class Lower {
    id;
    lower_title;
    subCategory;
    products;
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid', {
        name: 'lower_id',
    }),
    __metadata("design:type", String)
], Lower.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Lower.prototype, "lower_title", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => subCategory_entitiy_1.SubCategory, (subCategory) => subCategory.lower),
    __metadata("design:type", subCategory_entitiy_1.SubCategory)
], Lower.prototype, "subCategory", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => products_entitiy_1.Products, (products) => products.lower),
    __metadata("design:type", Array)
], Lower.prototype, "products", void 0);
Lower = __decorate([
    (0, typeorm_1.Entity)({
        name: 'Lower',
    })
], Lower);
exports.Lower = Lower;
