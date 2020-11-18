import { createConnection } from 'typeorm'

createConnection()
    .then(result => console.log("conectado ao banco"))
    .catch(err => console.log('something wrong', err))