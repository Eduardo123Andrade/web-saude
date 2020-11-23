import { Patient } from '../models/Patient'

export default {
    render(patient: Patient) {
        return {
            id: patient.id,
            name: patient.name,
            birthDate: patient.birthDate,
            gender: patient.gender,
            comorbiditie: {
                smoke: patient.comorbiditie.smoke,
                drink: patient.comorbiditie.drink,
                hypertension: patient.comorbiditie.hypertension,
                hypotension: patient.comorbiditie.hypotension,
                heartDisease: patient.comorbiditie.heartDisease,
                diabetes: patient.comorbiditie.diabetes,
                asthma: patient.comorbiditie.asthma
            },
            family: {
                comorbiditie: {
                    smoke: patient.family.comorbiditie.smoke,
                    drink: patient.family.comorbiditie.drink,
                    hypertension: patient.family.comorbiditie.hypertension,
                    hypotension: patient.family.comorbiditie.hypotension,
                    heartDisease: patient.family.comorbiditie.heartDisease,
                    diabetes: patient.family.comorbiditie.diabetes,
                    asthma: patient.family.comorbiditie.asthma
                }
            }
        }
    },


    renderMany(patients: Patient[]){
        return patients.map(patient => this.render(patient))
    }
}