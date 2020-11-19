import { Doctor } from '../models/Doctor'

export default {
    render(doctor: Doctor) {
        return {
            id: doctor.id,
            name: doctor.name,
            crm: doctor.crm
        }
    },

    renderMany(doctors: Doctor[]){
        return doctors.map(doctor => this.render(doctor))
    }
}