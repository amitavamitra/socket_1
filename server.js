const express = require('express');
const socket  = require('socket.io');
// App Setup
const app = express();

const server = app.listen(4000, function(){
    console.log('Serving at port 4000');
})

// Static files

app.use(express.static('public'));

//  Socket set up

var io = socket(server);

//  when connection is made by client a callback function
//  function takes the socket variable.
io.on('connection' , function(socket){
console.log('connection made by client: ' + socket.id)
//  Handle chat event
    socket.on('chat', function(data){
        io.sockets.emit('chat', data)
    })
//  Broadcast who is tyiping
    socket.on('typing', function(data){
        socket.broadcast.emit('typing',data)
    })
});
