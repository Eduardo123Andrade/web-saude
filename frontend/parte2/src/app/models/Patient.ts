import { Comorbidity } from './Comorbidity';

export interface Patient {
    id?: string
    name: string,
    birthDate: string,
    gender: string,
    comorbiditie: Comorbidity,
    family?: {
        comorbiditie: Comorbidity,
    }
}