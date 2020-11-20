import { Comorbidity } from './Comorbidity';

export interface Patient {
    name: string,
    birthDate: string,
    gender: string,
    comorbiditie: Comorbidity,
    family?: {
        comorbiditie: Comorbidity,
    }
}