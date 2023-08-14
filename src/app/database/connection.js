import mysql from 'mysql'

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'cripto'
})

connection.connect((error) => {
    if (error) {
        console.log('Erro ao se conectar ao banco de dados: \n\n' + error)
    } else {
        console.log('Conectado ao banco de dados')
    }
})

export const callData = (sql, values=null) => {
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

export default connection