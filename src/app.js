import express from 'express'
import routes from './routes.js'

const app = express()

//indicar para o expresse ler body com JSON
app.use(express.json())

//usar routess
app.use(routes)


export default app