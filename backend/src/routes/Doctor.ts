import { Router } from 'express'
import DoctorController from '../controllers/DoctorController'
import { checkAuth } from '../middleware/check-auth'

const routes = Router()

routes.post('/doctors', checkAuth, DoctorController.create)
routes.get('/doctors', checkAuth, DoctorController.index)
routes.get('/doctors/:crm', checkAuth, DoctorController.show)
routes.delete('/doctors/:crm', checkAuth, DoctorController.delete)
routes.post('/doctors/auth/login', DoctorController.login)

export default routes