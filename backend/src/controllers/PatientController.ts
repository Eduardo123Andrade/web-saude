import { Comorbiditie } from './../models/Comorbiditie';
import { Family } from './../models/Family';
import { Patient } from './../models/Patient';
import { Request, Response } from "express"
import { getRepository } from 'typeorm'

export default {
    async delete(request: Request, response: Response) {
        const { id } = request.params
        const repository = getRepository(Patient)
        const { family, comorbiditie } = await repository.findOneOrFail({ where: { id: id }, relations: ['family', 'comorbiditie'] })

        await deleteFamilyAndComorbiditie(family, comorbiditie);

        await repository.delete(id)
        return response.status(200).json({ message: `id ${id} deletado` })
    },

    async show(request: Request, response: Response) {
        const { id } = request.params
        const repository = getRepository(Patient)
        const patient = await repository
            .findOneOrFail({ where: { id: id } }).catch(err => console.log(err))

        return response.status(200).json(patient)
    },
    async index(request: Request, response: Response) {
        const repository = getRepository(Patient)
        const patients = await repository.find()

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



async function deleteFamilyAndComorbiditie(family: Family, comorbiditie: Comorbiditie) {
    const familyRepository = getRepository(Family);
    const familyResult = await familyRepository.findOneOrFail({ where: { id: family.id }, relations: ['comorbiditie'] });
    const comorbiditieRepository = getRepository(Comorbiditie);
    await comorbiditieRepository.delete(familyResult.comorbiditie.id);
    await comorbiditieRepository.delete(comorbiditie.id);
    await familyRepository.delete(family.id);
}