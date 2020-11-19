import { Patient } from './Patient';
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { Comorbiditie } from "./Comorbiditie"

@Entity('family')
export class Family {

    @PrimaryGeneratedColumn()
    id: number

    // @Column({ name: 'comorbidities_id' })
    // comorbiditiesId: number

    @OneToOne(() => Comorbiditie, comorbiditie => comorbiditie.id,  {cascade: true, onDelete: "CASCADE"})
    @JoinColumn({name: 'comorbidities_id'})
    comorbiditie: Comorbiditie

    
    // @OneToOne(() => Patient, patient => patient.family)
    // patient: Patient

}