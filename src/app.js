import express, { response } from 'express'
import CoinController from './app/controllers/coinController.js'

const app = express()

//indicar para o expresse ler body com JSON
app.use(express.json())

//--------------------criptomoedas--------------------------//

//ler
app.get('/criptomoedas', CoinController.index)

//pesquisar
app.get('/criptomoedas/:id', CoinController.show)

//postar
app.post('/criptomoedas', CoinController.store)

//deletar
app.delete('/criptomoedas/:id', CoinController.delete)

//atualizar
app.put('/criptomoedas/:id', CoinController.update)

//--------------------criptomoedas--------------------------//

export default app