var socket = io("localhost:3000");
var usuario;
var tablero = [
	[-1, -2, -3],
	[-4, -5, -6],
	[-7, -8, -9]
]
var contador = 0;
socket.on("tablero", function (data) {
	evento(data.fila, data.columna)
	ganador();
	console.log(data)
});
socket.on("cont", function (data) {
	contador = data.contador;
});
$(document).ready(function () {
	$("#a1").click(function (event) {
		//evento(0, 0);
		socket.emit("tablero", {
			fila: 0,
			columna: 0
		});
	});
	$("#a2").click(function (event) {
		//evento(0, 1);
		socket.emit("tablero", {
			fila: 0,
			columna: 1
		});
	});
	$("#a3").click(function (event) {
		//evento(0, 2);
		socket.emit("tablero", {
			fila: 0,
			columna: 2
		});

	});
	$("#b1").click(function (event) {
		//evento(1, 0);
		socket.emit("tablero", {
			fila: 1,
			columna: 0
		});
		//ganador();
		//console.log(tablero)
	});
	$("#b2").click(function (event) {
		//evento(1, 1);
		socket.emit("tablero", {
			fila: 1,
			columna: 1
		});
		//ganador();
		//console.log(tablero)
	});
	$("#b3").click(function (event) {
		//evento(1, 2);
		socket.emit("tablero", {
			fila: 1,
			columna: 2
		});
		//ganador();
		//console.log(tablero)
	});
	$("#c1").click(function (event) {
		//evento(2, 0);
		socket.emit("tablero", {
			fila: 2,
			columna: 0
		});
		//ganador();
		//console.log(tablero)
	});
	$("#c2").click(function (event) {
		//evento(2, 1);
		socket.emit("tablero", {
			fila: 2,
			columna: 1
		});
		//ganador();
		//console.log(tablero)
	});
	$("#c3").click(function (event) {
		//evento(2, 2);
		socket.emit("tablero", {
			fila: 2,
			columna: 2
		});
		//ganador();
		//console.log(tablero);
	});
});

function evento(fila, columna) {
	switch (fila) {
		case 0:
			switch (columna) {
				case 0:
					tablero[0][0] = ponerImagen("i1", "a1")
					break;
				case 1:
					this.tablero[0][1] = ponerImagen("i2", "a2")
					break;
				case 2:
					this.tablero[0][2] = ponerImagen("i3", "a3")
					break;
				default:
					break;
			}
			break;
		case 1:
			switch (columna) {
				case 0:
					this.tablero[1][0] = ponerImagen("i4", "b1");
					break;
				case 1:
					this.tablero[1][1] = ponerImagen("i5", "b2");
					break;
				case 2:
					this.tablero[1][2] = ponerImagen("i6", "b3");
					break;
				default:
					break;
			}
			break;
		case 2:
			switch (columna) {
				case 0:
					tablero[2][0] = ponerImagen("i7", "c1");
					break;
				case 1:
					tablero[2][1] = ponerImagen("i8", "c2");
					break;
				case 2:
					tablero[2][2] = ponerImagen("i9", "c3");
					break;
				default:
					break;
			}
			break;
		default:
			break;
	}
}

function reiniciar() {
	location.reload();
}

function ponerImagen(lugar, button) {
	this.usuario = "O"
	if (contador % 2 == 0) {
		$("#" + lugar).attr("src", "./images/circle.png");
		$("#" + button).prop('disabled', true);
	} else {
		this.usuario = "X"
		$("#" + lugar).attr("src", "./images/cross.png");
		$("#" + button).prop('disabled', true);
	}
	contador++
	socket.emit('cont', {
		contador: contador
	});
	return usuario
}

function ganador() {
	for (var fila = 0; fila < 3; fila++) {
		if (tablero[fila][0] == tablero[fila][1] && tablero[fila][1] == tablero[fila][2]) {
			contador = 0;
			alert("Ganó jugador con " + usuario);
			reiniciar();
			return;
		}
		if (tablero[0][fila] == tablero[1][fila] && tablero[1][fila] == tablero[2][fila]) {
			contador = 0;
			alert("Ganó jugador con " + usuario);
			reiniciar();
			return;
		}
	}
	if (tablero[0][0] == tablero[1][1] && tablero[2][2] == tablero[1][1]) {
		contador = 0;
		alert("Ganó jugador con " + usuario);
		reiniciar();
		return;
	}
	if (tablero[0][2] == tablero[1][1] && tablero[2][0] == tablero[1][1]) {
		contador = 0;
		alert("Ganó jugador con " + usuario);
		reiniciar();
		return;
	}
	if (contador % 9 == 0) {
		contador = 0;
		alert("Empate");
		reiniciar();
		return;
	}
}