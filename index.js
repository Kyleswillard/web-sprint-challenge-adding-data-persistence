// start your server here
const server = require('./api/server')
const PORT = 5000

server.listen(PORT, () => {
    console.log(`Server Live on Port ${PORT}`)
})
