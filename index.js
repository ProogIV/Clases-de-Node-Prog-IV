// EJEMPLO DE ASINCRONÍA EN CÓDIGO.

console.log("1. Inicio de Script");

// setTimeout es una API asíncrona. Se delega y su callback va a la cola.
setTimeout(() => {
	console.log("2. Tarea asíncrona finalizada");
}, 0); // Aunque el tiempo sea 0, se envía a la cola de tareas.
console.log("3. Fin del Script");
