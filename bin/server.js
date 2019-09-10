var io = require('socket.io')();

	io.sockets.on('connection', function(socket){
	
	console.log("UN NUEVO CLIENTE CONECTADO CON EL SOCKET ID: " + socket.id);
	//AQUI COLOCAREMOS TODOS NUESTROS EVENTOS DE TIPO socket.on
	socket.on('tablero', function(data){
		console.log(data);
		io.sockets.emit('tablero', data);

	}); 
	socket.on('cont', function(data){
		console.log(data);
		io.sockets.emit('cont', data);

	}); 
	
});

	//AQUI COLOCAREMOS TODOS NUESTROS EVENTOS DE TIPO io.sockets.emit

	module.exports = io;