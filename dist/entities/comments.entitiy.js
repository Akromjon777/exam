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
exports.Comments = void 0;
const typeorm_1 = require("typeorm");
const products_entitiy_1 = require("./products.entitiy");
const users_entitiy_1 = require("./users.entitiy");
let Comments = class Comments {
    id;
    products;
    comment_title;
    users;
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid', {
        name: 'comments_id',
    }),
    __metadata("design:type", String)
], Comments.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => products_entitiy_1.Products, (products) => products.comments),
    __metadata("design:type", products_entitiy_1.Products)
], Comments.prototype, "products", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Comments.prototype, "comment_title", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => users_entitiy_1.Users, (users) => users.comment),
    __metadata("design:type", users_entitiy_1.Users)
], Comments.prototype, "users", void 0);
Comments = __decorate([
    (0, typeorm_1.Entity)({
        name: 'Comments',
    })
], Comments);
exports.Comments = Comments;
