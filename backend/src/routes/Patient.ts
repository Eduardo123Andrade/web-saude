import { Router } from 'express'
import PatientController from '../controllers/PatientController'
import { checkAuth } from '../middleware/check-auth'


const routes = Router()

routes.post('/patient', checkAuth, PatientController.create)
routes.get('/patient', checkAuth, PatientController.index)
routes.get('/patient/:id', checkAuth, PatientController.show)
routes.delete('/patient/:id', checkAuth, PatientController.delete)


export default routes;