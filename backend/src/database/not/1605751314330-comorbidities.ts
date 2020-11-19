import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class comorbidities1605751314330 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table(
            {
                name: 'comorbidities',
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
                        name: 'smoke',
                        type: 'boolean',
                        default: '0'
                    },
                    {
                        name: 'drink',
                        type: 'boolean',
                        default: '0'
                    },
                    {
                        name: 'hypertension',
                        type: 'boolean',
                        default: '0'
                    },
                    {
                        name: 'hypotension',
                        type: 'boolean',
                        default: '0'
                    },
                    {
                        name: 'heart_disease',
                        type: 'boolean',
                        default: '0'
                    },
                    {
                        name: 'diabetes',
                        type: 'boolean',
                        default: '0'
                    },
                    {
                        name: 'asthma',
                        type: 'boolean',
                        default: '0'
                    },
                ]
            }
        ))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('comorbidities')
    }

}
