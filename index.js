let app = require('express')();
let http = require('http').Server(app);

let io  = require('socket.io')(http);
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
})
io.on('connection', (socket) => {
  console.log('a user connected')
      socket.on('disconnect', ()=>{
        console.log('user left');
      } )

      socket.on('Created',(data)=>{
        io.emit('Created', (data))
      })

})



http.listen(3000, ()=>{
  console.log('we are connected')
})
