"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.table1675719696510 = void 0;
class table1675719696510 {
    name = 'table1675719696510';
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "Products" DROP CONSTRAINT "FK_91bb43fc195d7faee92f4f5c847"`);
        await queryRunner.query(`ALTER TABLE "Products" DROP COLUMN "korzinkaId"`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "Products" ADD "korzinkaId" uuid`);
        await queryRunner.query(`ALTER TABLE "Products" ADD CONSTRAINT "FK_91bb43fc195d7faee92f4f5c847" FOREIGN KEY ("korzinkaId") REFERENCES "Korzinka"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
}
exports.table1675719696510 = table1675719696510;
