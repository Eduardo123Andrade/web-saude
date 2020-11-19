import { Family } from './Family';
import { Patient } from './Patient';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('comorbidities')
export class Comorbiditie {

    @PrimaryGeneratedColumn()
    id: number
    
    @Column({default: 0})
    smoke: boolean
    
    @Column({default: 0})
    drink: boolean
    
    @Column({default: 0})
    hypertension: boolean
    
    @Column({default: 0})
    hypotension: boolean
    
    @Column({default: 0})
    diabetes: boolean
    
    @Column({default: 0})
    asthma: boolean
    
    @Column({name: 'heart_disease', default: 0})
    heartDisease: boolean
    
    // @Column()
    // comorbidities: boolean

    @OneToOne(() => Patient, patient => patient.comorbiditie)
    patient: Patient

    @OneToOne(() => Family, family => family.comorbiditie)
    family: Family
}   