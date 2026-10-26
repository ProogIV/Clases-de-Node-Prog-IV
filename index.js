// Extendemos la clase nativa Error.
class DatabaseError extends Error {
	constructor(mensaje, consultaSQL) {
		super(mensaje);
		this.name = "DatabaseError";
		this.consultaSQL = consultaSQL; // Propiedad personalizada.
	}
}

// Bloque de control de errores.
try {
	throw new Database("Fallo de conexión", "SELECT * FROM usuarios");
} catch(error) {
	if(error instanceof DatabaseError) {
		console.error(`[${error.name}]: ${error.message}`);
		console.error(`Query que falló: ${error.consultaSQL}`);
	} else {
		console.error("Error crítico desconocido", error);
	}
}
