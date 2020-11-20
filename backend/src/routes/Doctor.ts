import { Router } from 'express'
import DoctorController from '../controllers/DoctorController'
import { checkAuth } from '../middleware/check-auth'

const routes = Router()

routes.post('/doctor', DoctorController.create)
routes.get('/doctor', checkAuth, DoctorController.index)
routes.get('/doctor/:crm', checkAuth, DoctorController.show)
routes.delete('/doctor/:crm', checkAuth, DoctorController.delete)
routes.get('/doctor/auth/login', DoctorController.login)

export default routes