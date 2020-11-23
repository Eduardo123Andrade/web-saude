import { Router } from 'express'
import PatientController from '../controllers/PatientController'
import { checkAuth } from '../middleware/check-auth'


const routes = Router()

routes.post('/patients', checkAuth, PatientController.create)
routes.get('/patients', checkAuth, PatientController.index)
routes.get('/patients/:id', checkAuth, PatientController.show)
routes.delete('/patients/:id', checkAuth, PatientController.delete)
routes.put('/patients/:id', checkAuth, PatientController.update)


export default routes;