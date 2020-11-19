import express from 'express'
import './database/conections'
import patientRouter from './routes/Patient'
import doctorRouter from './routes/Doctor'

const app = express()
app.use(express.json())

app.use(patientRouter)
app.use(doctorRouter)

export default app 