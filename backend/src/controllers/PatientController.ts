// import { InputPerson, localPersonController } from './PersonsController';
import { Request, Response } from "express"
// import { getRepository } from 'typeorm'
// import Client from "../models/Client"


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
        // const repository = getRepository(Client)
        // const clients = await repository.find({ relations: ['person'] })
        // return response.status(200).json(clients)
        return response.status(200).json({ message: `index: i'm not working` })

    },

    async create(request: Request, response: Response) {
        // const { address, person, client } = getValuesFromRequest(request)
        // const personToSave = await localPersonController.create(person, address)


        // const repository = getRepository(Client)
        // const clientToSave = repository.create({
        //     score: client.score,
        //     nickName: client.nickname,
        //     person: personToSave
        // })

        // const result = await repository.save(clientToSave)

        // return response.status(201).json({ result })
        return response.status(200).json({ message: `create: i'm not working` })

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