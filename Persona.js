// CLASES, HERENCIA Y CAPSULAMIENTO.
//
// Encapsulamiento: anteponiendo # a las Propiedades o Métodos, en Javascript.


class Persona {
	constructor(nombre, edad) {
		this.nombre = nombre;
		this.edad = edad;
	}
}

class Empleado extends Persona {
	#sueldo;

	constructor(nombre, edad, cargo, sueldo) {
		super(nombre, edad);
		this.cargo = cargo;
		this.#sueldo = sueldo;
	}

	mostrarDetalles() {
		console.log(`${this.nombre} es ${this.cargo} y cobra $${this.#sueldo}`);
	}

}
 
const empleado1 = new Empleado("Joabriel", 23, "Backend Dev", 2500);

empleado1.mostrarDetalles();

// console.log(empleado1.#sueldo); // ERROR: La propiedad es privada.
