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
                        default: false
                    },
                    {
                        name: 'drink',
                        type: 'boolean',
                        default: false
                    },
                    {
                        name: 'hypertension',
                        type: 'boolean',
                        default: false
                    },
                    {
                        name: 'hypotension',
                        type: 'boolean',
                        default: false
                    },
                    {
                        name: 'heart_disease',
                        type: 'boolean',
                        default: false
                    },
                    {
                        name: 'diabetes',
                        type: 'boolean',
                        default: false
                    },
                    {
                        name: 'asthma',
                        type: 'boolean',
                        default: false
                    },
                ]
            }
        ))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('comorbidities')
    }

}
