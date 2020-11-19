import { Router } from 'express'
import DoctorController from '../controllers/DoctorController'
import { checkAuth } from '../middleware/check-auth'

const routes = Router()

routes.post('/doctor', DoctorController.create)
routes.get('/doctor', checkAuth, DoctorController.index)
routes.get('/doctor/:id', checkAuth, DoctorController.show)
routes.delete('/doctor/:id', checkAuth, DoctorController.delete)
routes.get('/doctor/auth/login', DoctorController.login)

export default routes