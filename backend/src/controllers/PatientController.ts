import { Family } from './../models/Family';
import { Patient } from './../models/Patient';
import { Request, Response } from "express"
import { getRepository } from 'typeorm'

export default {
    async delete(request: Request, response: Response) {
        // const { id } = request.params
        // const repository = getRepository(Client)
        // await repository.findOneOrFail({ where: { id: id }, relations: ['person'] })
        // await repository.delete(id)
        // return response.status(200).json({ message: `id ${id} deletado` })
        return response.status(200).json({ message: `delete: i'm not working` })
    },

    async show(request: Request, response: Response) {
        // const { id } = request.params
        // const repository = getRepository(Client)
        // const client = await repository
        //     .findOneOrFail({ where: { id: id }, relations: ['person'] })
        // // return response.status(200).json(await PersonView.render(person))
        // return response.status(200).json(client)
        return response.status(200).json({ message: `show: i'm not working` })

    },
    async index(request: Request, response: Response) {
        const repository = getRepository(Patient)
        const patients = await repository.find({relations: ['family', 'comorbiditie']})
        return response.status(200).json(patients)
    },

    async create(request: Request, response: Response) {
        const { name, birthDate, gender: inputGender, comorbiditie, family } = request.body
        const gender = inputGender.toUpperCase()

        const repository = getRepository(Patient)
        const patientToSave = repository.create({
            name, birthDate, gender, comorbiditie, family
        })

        const result = await repository.save(patientToSave)

        return response.status(201).json({ message: 'Novo paciente cadastrado', result })
    }
}


// function getValuesFromRequest(request: Request) {
//     const { address } = request.body

//     const { name, lastName, cpf, email, password,
//         birthDate, phoneNumber: initialPhoneNumber } = request.body

//     const person: InputPerson =
//         { name, lastName, cpf, email, password, birthDate, initialPhoneNumber }

//     const { score, nickname } = request.body
//     const client = { score, nickname }

//     return { address, person, client }
// }