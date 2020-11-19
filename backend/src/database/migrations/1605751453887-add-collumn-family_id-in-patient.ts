import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class addCollumnFamilyIdInPatient1605751453887 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('patients', new TableColumn({
            name: 'family_id',
            type: 'integer',
            unsigned: true,
        } ))

        await queryRunner.createForeignKey('patients', new TableForeignKey({
            name: 'patient_family',
            columnNames: ['family_id'],
            referencedTableName: 'family',
            referencedColumnNames: ['id'],
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('patients', 'patient_family')
        await queryRunner.dropColumn('patients', 'family_id')
    }

}
