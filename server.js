const app = require('express')();
const server = require('http').createServer(app);

server.listen(8080,()=>{
    console.log('Server is running on 8080 port');
})