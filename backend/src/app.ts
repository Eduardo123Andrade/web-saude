import express from 'express'
import 'express-async-errors'
import './database/conections'
import patientRouter from './routes/Patient'
import doctorRouter from './routes/Doctor'

import { errorHandler } from './errors/Handler'

const app = express()
app.use(express.json())

app.use(patientRouter)
app.use(doctorRouter)
app.use(errorHandler)

export default app 