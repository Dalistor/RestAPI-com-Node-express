import { Router } from "express"
import CoinController from "./app/controllers/coinController.js"

const routes = Router()

//--------------------criptomoedas--------------------------//

//ler
routes.get('/criptomoedas', CoinController.index)

//pesquisar
routes.get('/criptomoedas/:id', CoinController.show)

//postar
routes.post('/criptomoedas', CoinController.store)

//deletar
routes.delete('/criptomoedas/:id', CoinController.delete)

//atualizar
routes.put('/criptomoedas/:id', CoinController.update)

//--------------------criptomoedas--------------------------//

export default routes