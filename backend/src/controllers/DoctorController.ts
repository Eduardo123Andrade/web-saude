import { Doctor } from './../models/Doctor';
import { Request, Response } from "express"
import { getRepository } from 'typeorm'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export default {
    async login(request: Request, response: Response){
        const {password, crm } = request.body
        const repository = getRepository(Doctor)

        const doctor = await repository.findOneOrFail({where: {crm: crm}})
        const compare = await bcrypt.compare(password, doctor.password)

        if(!compare) response.status(401).json({message: 'Erro na autenticação'})

        const token = jwt.sign(
            { name: doctor.name, userId: doctor.id },
            'secret_this_should_be_longer_okay',
            { expiresIn: "1h" }
          );

        return response.status(200).json({token})
    },

    async delete(request: Request, response: Response) {
        const { id } = request.params
        const repository = getRepository(Doctor)

        await repository.delete(id)
        return response.status(200).json({ message: `id ${id} deletado` })
    },

    async show(request: Request, response: Response) {
        const { id } = request.params
        const repository = getRepository(Doctor)
        const doctor = await repository
            .findOneOrFail({ where: { id: id } }).catch(err => console.log(err))

        return response.status(200).json(doctor)
    },
    async index(request: Request, response: Response) {
        const repository = getRepository(Doctor)
        const doctors = await repository.find()

        return response.status(200).json(doctors)
    },

    async create(request: Request, response: Response) {
        const { name, password, crm } = request.body
        const salts = 10

       const hash = await bcrypt.hash(password, salts)

        const repository = getRepository(Doctor)
        const doctorToSave = repository.create({
            name, password: hash, crm
        })

        const result = await repository.save(doctorToSave)

        return response.status(201).json({ message: 'Novo medico cadastrado', result })
    }
}