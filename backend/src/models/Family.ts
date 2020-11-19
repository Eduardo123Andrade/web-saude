import { Patient } from './Patient';
import { Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { Comorbiditie } from "./Comorbiditie"

@Entity('families')
export class Family {

    @PrimaryGeneratedColumn()
    id: number

    @OneToOne(() => Patient, patient => patient.family, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    patient: Patient

    @OneToOne(() => Comorbiditie, comorbiditie => comorbiditie.id, { eager: true, cascade: true })
    @JoinColumn({ name: 'comorbidities_id' })
    comorbiditie: Comorbiditie

}