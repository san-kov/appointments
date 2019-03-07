import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import './config/connection'
import './config/passport'

import users from './routes/users'
import appointments from './routes/appointments'

const app = express()
app.use(bodyParser.json())
app.use(cors('*'))

app.use('/api/users', users)
app.use('/api/appoints', appointments)

app.listen(8080, () => console.log('listening'))
