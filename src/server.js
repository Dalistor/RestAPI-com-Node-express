import app from './app.js'

const PORT = process.env.PORT || 3000

//subir servidor
app.listen(PORT, ()=> {
    console.log('Servidor rodando na porta: ' + PORT)
})