import express from 'express'
import './database/conections'
import patientRouter from './routes/Patient '

const app = express()
app.use(express.json())

app.use(patientRouter)

export default app 