"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.table1675691399539 = void 0;
class table1675691399539 {
    name = 'table1675691399539';
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "Products" ADD "time" TIMESTAMP NOT NULL DEFAULT now()`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "Products" DROP COLUMN "time"`);
    }
}
exports.table1675691399539 = table1675691399539;
