"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.table1675839186849 = void 0;
class table1675839186849 {
    name = 'table1675839186849';
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "Darajasi" ALTER COLUMN "ortachas" SET DEFAULT '0'`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "Darajasi" ALTER COLUMN "ortachas" DROP DEFAULT`);
    }
}
exports.table1675839186849 = table1675839186849;
