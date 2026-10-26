class Producto {
	#precio;

	constructor(nombre, precio){
		this.nombre = nombre;
		this.#precio = precio;
	}

	get Precio(){
		return `$${this.#precio.toFixed(2)}`;
	}

	set precio(nuevoPrecio) {
		if (nuevoPrecio < 0) throw new Error("El precio no puede ser negativo");
		this.#precio = nuevoPrecio;
	}

}
