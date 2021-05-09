//  Establish connection with the server usign chat.js
//  called with index.html is called up on the browser

var socket = io.connect('http://localhost:4000');

// Query dom

var message = document.getElementById('message');
var handle = document.getElementById('handle');
var btn = document.getElementById('send');
var output = document.getElementById('output');

//  Emit events 

btn.addEventListener('click' ,function(){
    socket.emit('chat',{
        message: message.value,
        handle: handle.value
    })
})

//  Listen for events

socket.on('chat',function(data){
    output.innerHTML += '<p><strong>' + data.handle + ':<strong>' + data.message + '</p>'
})
