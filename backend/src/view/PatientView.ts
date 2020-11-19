import { Patient } from '../models/Patient'

export default {
    render(patient: Patient) {
        return {
            id: patient.id,
            name: patient.name,
            birthDate: patient.birthDate,
            gender: patient.gender,
            comorbidities: {
                smoke: patient.family.comorbiditie.smoke,
                drink: patient.family.comorbiditie.drink,
                hypertension: patient.family.comorbiditie.hypertension,
                hypotension: patient.family.comorbiditie.hypotension,
                heartDisease: patient.family.comorbiditie.heartDisease,
                diabetes: patient.family.comorbiditie.diabetes,
                asthma: patient.family.comorbiditie.asthma
            },
            family: {
                comorbidities: {
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