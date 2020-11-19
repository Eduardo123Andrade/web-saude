import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class patients1605815011000 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'patients',
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
                    name: 'name',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'birth_date',
                    type: 'varchar',
                    length: '10',
                    isNullable: false
                },
                {
                    name: 'gender',
                    type: "enum",
                    enum: ['M', 'F'],
                    isNullable: false

                },
                {
                    name: 'comorbidity_id',
                    type: 'integer',
                    unsigned: true,
                },
                {
                    name: 'family_id',
                    type: 'integer',
                    unsigned: true,
                    isNullable: true
                },
            ],
            foreignKeys: [
                {
                    name: 'ComorbiditiesPatient',
                    columnNames: ['comorbidity_id'],
                    referencedTableName: 'comorbidities',
                    referencedColumnNames: ['id'],
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE'
                },
                {
                    name: 'FamilyPatient',
                    columnNames: ['family_id'],
                    referencedTableName: 'families',
                    referencedColumnNames: ['id'],
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('patients')
    }

}
