import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class addComordiditesCollumnIdInPatient1605751365964 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('patients', new TableColumn({
            name: 'comorbidities_id',
            type: 'integer',
            unsigned: true,
            default: null
        } ))

        await queryRunner.createForeignKey('patients', new TableForeignKey({
            name: 'patient_comorbidities',
            columnNames: ['comorbidities_id'],
            referencedTableName: 'comorbidities',
            referencedColumnNames: ['id'],
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('patients', 'patient_comorbidities')
        await queryRunner.dropColumn('patients', 'comorbidities_id')
    }

}
