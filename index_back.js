const http = require ('http')/* termo utilizado para gerenciar persistência de conexões e reuso para clientes HTTP */

const hostName = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end("Olá Mundo");
});

server.listen(port, hostName, ()=>{
    console.log("Servidor em funcionamento!!!")
    console.log("Acesse a página:(localhost:3000)")
})