import { Comorbiditie } from '../models/Comorbiditie';
import { Family } from '../models/Family';
import { Patient } from '../models/Patient';
import { Request, Response } from "express"
import { getRepository } from 'typeorm'
import patientView from '../view/PatientView'
import * as yup from 'yup'

export default {
    async update(request: Request, response: Response) {
        const { id } = request.params
        const { name, birthDate, gender: inputGender, comorbiditie, family } = request.body
        const gender = inputGender.toUpperCase()
        
        const data = await validateData(comorbiditie, name, birthDate, gender, family);
        const repository = getRepository(Patient)

        const patient = await repository.findOne({ where: { id: id } })
        if (!patient) return response.status(404).json({ message: 'Medico não Encontrado' })

        const updatedPatient: Patient = { ...patient }
        updatedPatient.name = data.name
        updatedPatient.gender = data.gender,
        updatedPatient.birthDate = data.birthDate
        updatedPatient.comorbiditie = data.comorbiditie
        updatedPatient.family = data.family

        try {
            await repository.save({ ...patient, ...updatedPatient })
            return response.status(200).json({ message: 'Paciente atualizado', patient: updatedPatient })
        } catch (err) {
            return response.status(404).json({ message: `Erro`, err })
        }
    },

    async delete(request: Request, response: Response) {
        const { id } = request.params
        const repository = getRepository(Patient)
        const { family, comorbiditie } = await repository.findOneOrFail({ where: { id: id }, relations: ['family', 'comorbiditie'] })

        await repository.delete(id)
        await deleteFamilyAndComorbiditie(family, comorbiditie);

        return response.status(200).json({ message: `id ${id} deletado` })
    },

    async show(request: Request, response: Response) {
        const { id } = request.params
        const repository = getRepository(Patient)
        const patient = await repository.findOne({ where: { id: id } })

        if(!patient) return response.status(404).json({message: 'Paciente não encontrado'})

        return response.status(200).json(patientView.render(patient))
    },
    async index(request: Request, response: Response) {
        const repository = getRepository(Patient)
        const patients = await repository.find()

        return response.status(200).json(patientView.renderMany(patients))
    },

    async create(request: Request, response: Response) {
        const { name, birthDate, gender: inputGender, comorbiditie, family } = request.body
        const gender = inputGender.toUpperCase()
        const data = await validateData(comorbiditie, name, birthDate, gender, family);

        const repository = getRepository(Patient)
        const patientToSave = repository.create(data)

        const result = await repository.save(patientToSave)

        return response.status(201).json({ message: 'Novo paciente cadastrado', result })
    }
}



async function validateData(comorbiditie: any, name: any, birthDate: any, gender: any, family: any) {
    const newComorbiditie = validationComorbiditie(comorbiditie);

    const data = {
        name, birthDate, gender, comorbiditie: comorbiditie || newComorbiditie, family
    };

    const schema = yup.object().shape({
        name: yup.string().required('Nome é obrigatorio').max(255, 'O Nome deve conter no maximo 255 carcteres'),
        birthDate: yup.string().required('Data de nascimento é obrigatorio').length(10),
        gender: yup.string().required('Sexo de nascimento é obrigatorio').oneOf(['M', 'F'], 'Aceita apenas F ou M'),
    });

    await schema.validate(data, { abortEarly: false });
    return data;
}

function validationComorbiditie(comorbiditie: any) {
    var newComorbiditie = {};
    if (!comorbiditie)
        newComorbiditie = {
            smoke: false,
            drink: false,
            hypertension: false,
            hypotension: false,
            heartDisease: false,
            diabetes: false,
            asthma: false
        };
    return newComorbiditie;
}

async function deleteFamilyAndComorbiditie(family: Family, comorbiditie: Comorbiditie) {
    const familyRepository = getRepository(Family);
    const familyResult = await familyRepository.findOneOrFail({ where: { id: family.id }, relations: ['comorbiditie'] });
    await familyRepository.delete(family.id);
    const comorbiditieRepository = getRepository(Comorbiditie);
    await comorbiditieRepository.delete(familyResult.comorbiditie.id);
    await comorbiditieRepository.delete(comorbiditie.id);
}