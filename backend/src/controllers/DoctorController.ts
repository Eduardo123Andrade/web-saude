import { Doctor } from './../models/Doctor';
import { Request, Response } from "express"
import { getRepository } from 'typeorm'

export default {
    async delete(request: Request, response: Response) {
        const { id } = request.params
        const repository = getRepository(Doctor)
        // const { family, comorbiditie } = await repository.findOneOrFail({ where: { id: id }, relations: ['family', 'comorbiditie'] })

        // await deleteFamilyAndComorbiditie(family, comorbiditie);

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

        const repository = getRepository(Doctor)
        const doctorToSave = repository.create({
            name, password, crm
        })

        const result = await repository.save(doctorToSave)

        return response.status(201).json({ message: 'Novo medico cadastrado', result })
    }
}



// async function deleteFamilyAndComorbiditie(family: Family, comorbiditie: Comorbiditie) {
//     const familyRepository = getRepository(Family);
//     const familyResult = await familyRepository.findOneOrFail({ where: { id: family.id }, relations: ['comorbiditie'] });
//     const comorbiditieRepository = getRepository(Comorbiditie);
//     await comorbiditieRepository.delete(familyResult.comorbiditie.id);
//     await comorbiditieRepository.delete(comorbiditie.id);
//     await familyRepository.delete(family.id);
// }