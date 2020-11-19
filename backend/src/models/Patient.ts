import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Comorbiditie } from "./Comorbiditie";
import { Family } from './Family';

export enum Gender {
    M,
    F
}

@Entity('patients')
export class Patient {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column({ name: 'birth_date' })
    birthDate: string

    @Column('enum')
    gender: Gender


    @OneToOne(() => Comorbiditie, comorbiditie => comorbiditie.id, {
        cascade: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    @JoinColumn({name: 'comorbidities_id'})
    comorbiditie: Comorbiditie


    @OneToOne(() => Family, family => family.id, {
        cascade: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    @JoinColumn({name: 'family_id'})
    family: Family

}