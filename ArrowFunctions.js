class Boton {
	constructor(nombre) {
		this.nombre = nombre;
	}

	hacerClick() {
		setTimeout(() => {
			console.log(`Click registrado en ${this.nombre}`);
		}, 1000);
	}
}
