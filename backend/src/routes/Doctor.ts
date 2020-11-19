import { Router } from 'express'
import DoctorController from '../controllers/DoctorController'

const routes = Router()

routes.post('/doctor', DoctorController.create)
routes.get('/doctor', DoctorController.index)
routes.get('/doctor/:id', DoctorController.show)
routes.delete('/doctor/:id', DoctorController.delete)


export default routes;