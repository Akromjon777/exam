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
exports.Users = void 0;
const typeorm_1 = require("typeorm");
const comments_entitiy_1 = require("./comments.entitiy");
const basket_entitiy_1 = require("./basket.entitiy");
let Users = class Users {
    id;
    first_name;
    last_name;
    email;
    phone;
    gendry;
    password;
    avatar;
    comment;
    korzinka;
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid", {
        name: "user_id"
    }),
    __metadata("design:type", String)
], Users.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 63,
        nullable: false,
    }),
    __metadata("design:type", String)
], Users.prototype, "first_name", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 100,
        nullable: false,
    }),
    __metadata("design:type", String)
], Users.prototype, "last_name", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 100,
        nullable: false,
    }),
    __metadata("design:type", String)
], Users.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 100,
        nullable: true,
    }),
    __metadata("design:type", String)
], Users.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 100,
        nullable: true,
    }),
    __metadata("design:type", String)
], Users.prototype, "gendry", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 100,
        nullable: false,
    }),
    __metadata("design:type", String)
], Users.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 100,
        nullable: true,
    }),
    __metadata("design:type", String)
], Users.prototype, "avatar", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => comments_entitiy_1.Comments, (comment) => comment.users),
    __metadata("design:type", Array)
], Users.prototype, "comment", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => basket_entitiy_1.Korzinka, (korzinka) => korzinka.users),
    __metadata("design:type", Array)
], Users.prototype, "korzinka", void 0);
Users = __decorate([
    (0, typeorm_1.Entity)({
        name: "Users"
    })
], Users);
exports.Users = Users;
