import { Patient } from './Patient';
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { Comorbiditie } from "./Comorbiditie"

@Entity('family')
export class Family {

    @PrimaryGeneratedColumn()
    id: number

    @OneToOne(() => Comorbiditie, comorbiditie => comorbiditie.id, { eager: true, cascade: true, onDelete: "CASCADE" })
    @JoinColumn({ name: 'comorbidities_id' })
    comorbiditie: Comorbiditie


    @OneToOne(() => Patient, patient => patient.family, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    patient: Patient

}