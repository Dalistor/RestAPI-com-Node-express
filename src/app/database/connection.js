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

export default connection