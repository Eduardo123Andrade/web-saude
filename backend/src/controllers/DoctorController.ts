import { Doctor } from '../models/Doctor';
import { Request, Response } from "express"
import { getRepository } from 'typeorm'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import doctorView from '../view/DoctorView'
import * as yup from 'yup'


export default {
    async login(request: Request, response: Response) {
        const { password, crm } = request.body
        const repository = getRepository(Doctor)

        const doctor = await repository.findOneOrFail({ where: { crm: crm } })
        const compare = await bcrypt.compare(password, doctor.password)

        if (!compare) response.status(401).json({ message: 'Erro na autenticação' })

        const token = jwt.sign(
            { name: doctor.name, userId: doctor.id },
            'secret_this_should_be_longer_okay',
            { expiresIn: "1h" }
        );

        return response.status(200).json({ token, expiresIn: 3600 })
    },

    async delete(request: Request, response: Response) {
        const { crm } = request.params
        const repository = getRepository(Doctor)

        const doctor = await repository.findOne({where: {crm: crm}})
        if(!doctor) return response.status(404).json({message: `CRM ${crm} não encontrado`})

        await repository.delete(doctor)
        return response.status(200).json({ message: `CRM ${crm} deletado`, deleted: true })
    },

    async show(request: Request, response: Response) {
        const { crm } = request.params
        const repository = getRepository(Doctor)
        const doctor = await repository.findOne({ where: { crm: crm } })

        if(!doctor) return response.status(404).json({message: 'Medico não encontrado'})

        return response.status(200).json(doctorView.render(doctor))
    },
    async index(request: Request, response: Response) {
        const repository = getRepository(Doctor)
        const doctors = await repository.find()

        return response.status(200).json(doctorView.renderMany(doctors))
    },

    async create(request: Request, response: Response) {
        const { name, password, crm } = request.body
        const salts = 10

        
        const data = {
            name, password, crm
        }
        
        const schema = yup.object().shape({
            name: yup.string().required('Nome é obrigatorio'),
            password: yup.string().required('Senha é obrigatorio').min(6, 'A seha deve conter no minimo 6 caracteres'),
            crm: yup.string().required('Numero do CRM é obrigatorio').length(6, 'O numero do CRM é exatamente 6 caracteres'),
        })


        await schema.validate(data, { abortEarly: false })

        const hash = await bcrypt.hash(password, salts)
        
        data.password = hash

        const repository = getRepository(Doctor)
        const doctorToSave = repository.create(data)
        try {
            const result = await repository.save(doctorToSave)
            return response.status(201).json({ message: 'Novo medico cadastrado', result })

        }catch (err) {
            return response.status(400).json({message: `CRM ${crm} já cadastrado`})
        }

    }
}