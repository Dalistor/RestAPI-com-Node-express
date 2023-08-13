import express from 'express'

const app = express()

//mock (testes)
const cripto = [
    { id: 1, valor: 22230, empresa: 'Binomo' },
    { id: 2, valor: 22233, empresa: 'Binomo' },
    { id: 3, valor: 22235, empresa: 'Binomo' }
]

function _search(id) {
    return cripto.filter(cripto => cripto.id == id)
}

function _delete(id) {
    const index = cripto.findIndex(cripto => cripto.id == id)

    if (index != -1) {
        cripto.splice(index, 1)

        return true
    } else {
        return false
    }
}

function _update(id, newValue) {
    const index = cripto.findIndex(cripto => cripto.id == id)

    if (index != -1) {
        cripto[index] = newValue

        return true
    } else {
        return false
    }
} 

    //indicar para o expresse ler body com JSON
    app.use(express.json())

    //criar rota padrão (mandar informação)
    app.get('/', (req, res) => {
        res.send('Bem vindo a minha API, segue abaixo a lista de recursos: \n'
            + 'criptomoedas'
        )
    })

    //criptomoedas

    //ler
    app.get('/criptomoedas', (req, res) => {
        res.status(200).send(cripto)
    })

    //pesquisar
    app.get('/criptomoedas/:id', (req, res) => {
        res.json(_search(req.params.id))
    })

    //postar
    app.post('/criptomoedas', (req, res) => {
        cripto.push(req.body)
        res.status(200).send('Valor da moeda atualizado')
    })

    //deletar
    app.delete('/criptomoedas/:id', (req, res) => {
        const has_deleted = _delete(req.params.id)

        if (has_deleted) {
            res.status(200).send('Cripto deletado com sucesso')
        } else {
            res.status(404).send('Cripto não achada')
        }
    })

    //Atualizar
    app.put('/criptomoedas/:id', (req, res) => {
        const has_updated = _update(req.params.id, req.body)

        if (has_updated) {
            res.status(200).send('Atualização de cripto concluída!')
        } else {
            res.status(404).send('Cripto não achado')
        }
    })

    export default app