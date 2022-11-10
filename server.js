const app = require('express')();
const server = require('http').createServer(app);
const {Server} = require('socket.io');
const io = new Server(server,{
    cors :{
        origin :"*",
        methods : ["GET","POST"]
    }
});

io.on('connection', socket =>{
    console.log('a user connected');

    socket.on('disconnet',()=>{
        console.log('user disconnected');
    });

    socket.on('msg', msg =>{
        console.log('message : '+msg);
    })

});

server.listen(8080,()=>{
    console.log('Server is running on 8080 port');
})