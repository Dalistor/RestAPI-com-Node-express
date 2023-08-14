import app from './src/app.js'

const PORT = 3000

//subir servidor
app.listen(PORT, ()=> {
    console.log('Servidor rodando na porta: ' + PORT)
})