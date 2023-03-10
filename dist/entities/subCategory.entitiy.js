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
exports.SubCategory = void 0;
const typeorm_1 = require("typeorm");
const category_entitiy_1 = require("./category.entitiy");
const lower_entitiy_1 = require("./lower.entitiy");
let SubCategory = class SubCategory {
    id;
    sub_category_title;
    category;
    lower;
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid', {
        name: 'subCategory_id',
    }),
    __metadata("design:type", String)
], SubCategory.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 100,
        nullable: false,
    }),
    __metadata("design:type", String)
], SubCategory.prototype, "sub_category_title", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => category_entitiy_1.Category, (category) => category.subCategory),
    __metadata("design:type", category_entitiy_1.Category)
], SubCategory.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => lower_entitiy_1.Lower, (lower) => lower.subCategory),
    __metadata("design:type", Array)
], SubCategory.prototype, "lower", void 0);
SubCategory = __decorate([
    (0, typeorm_1.Entity)({
        name: 'SubCategory',
    })
], SubCategory);
exports.SubCategory = SubCategory;
