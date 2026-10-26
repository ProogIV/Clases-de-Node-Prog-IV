// Importamos utilizando desestructuración (llaves).
import { ejecutarLogs, Sistema } from './logger.js';

// Los console.log dentro de 'ejecutarLogs' solo aparecen al invocarla.
ejecutarLogs();

const miSistema = new Sistema();
miSistema.iniciar();
