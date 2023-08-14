import connection from "../database/connection.js"

function callData(sql, values=null) {
    return new Promise((resolve, reject) => {
        connection.query(sql, values, (error, response) => {
            if (error) {
                return reject('Erro ao se comunicar com o banco de dados')
            } else {
                const result = JSON.parse(JSON.stringify(response))

                return resolve(result)
            }
        })
    })
}

class CoinRepository {
    create(req) {
        const sql = `INSERT INTO moeda (nome, empresa, tipo, valor) VALUES (?, ?, ?, ?)`
        const values = [req.body.Nome, req.body.Empresa, req.body.Tipo, req.body.Valor]

        return callData(sql, values)
    }

    findAll() {
        const sql = `SELECT * FROM moeda`
        
        return callData(sql)
    }

    findById(req) {
        const sql = `SELECT id, nome, empresa, tipo, valor FROM moeda WHERE id = ${req.params.id}`

        return callData(sql)
    }

    update() {
        const sql = `UPDATE moeda SET nome = ?, empresa = ?, tipo = ?, valor = ? WHERE id = ${req.params.id}`
        const values = [req.body.Nome, req.body.Empresa, req.body.Tipo, req.body.Valor]

        return callData(sql, values)
    }

    delete(req) {
        const sql = `DELETE FROM moeda WHERE id = ${req.params.id}`

        return callData(sql)
    }
}

export default new CoinRepository