const server = require('./server');
const {PORT}  = require('./config');

server.listen(PORT, () =>{
    console.log(`El servidor esta corriendo en el puerto ${PORT}`);
})