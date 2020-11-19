import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class families1605814930769 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'families', 
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
                    name: 'comorbidities_id',
                    type: 'integer',
                    unsigned: true,
                },
            ],
            foreignKeys: [
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
        await queryRunner.dropTable('family')
    }

}
