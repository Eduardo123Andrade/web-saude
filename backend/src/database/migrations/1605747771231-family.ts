import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class family1605747771231 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'family', 
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                }, 
                {
                    name: 'patient_id',
                    type: 'integer',
                    unsigned: true,
                },
                {
                    name: 'comorbidities_id',
                    type: 'integer',
                    unsigned: true,
                },
            ],
            foreignKeys: [
                {
                    name: 'PatientFamily',
                    columnNames: ['patient_id'],
                    referencedTableName: 'patients',
                    referencedColumnNames: ['id'],
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE'
                },
                {
                    name: 'ComorbiditiesFamily',
                    columnNames: ['comorbidities_id'],
                    referencedTableName: 'comorbidities',
                    referencedColumnNames: ['id'],
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
