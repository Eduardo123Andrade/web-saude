import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('doctor')
export class Doctor {
    
    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    name: string
    
    @Column()
    password: string
    
    @Column({unique: true})
    crm: string

}