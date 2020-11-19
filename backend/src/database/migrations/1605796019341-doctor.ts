import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class doctor1605796019341 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'doctor',
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
                    type: 'varchar'
                },
                {
                    name: 'password',
                    type: 'varchar',
                },
                {
                    name: 'crm',
                    type: 'varchar',
                    length: '6',
                    isUnique: true,
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('doctor')
    }

}
