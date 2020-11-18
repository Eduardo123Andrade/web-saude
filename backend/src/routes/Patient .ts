import { Router } from 'express'
import PatientController from '../controllers/PatientController'


const routes = Router()

routes.post('/patient', PatientController.create)
routes.get('/patient', PatientController.index)
routes.get('/patient/:id', PatientController.show)
routes.delete('/patient/:id', PatientController.delete)


export default routes;