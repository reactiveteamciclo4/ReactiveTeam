import { resolversAvance } from '../models/avance/resolvers.js';
import { resolversInscripciones } from '../models/inscripciones/resolvers.js';
import { resolversProyecto } from '../models/proyecto/resolvers.js';
import { resolversUsuario } from '../models/usuario/resolvers.js';


export const resolvers = [
    resolversAvance, 
    resolversInscripciones, 
    resolversProyecto, 
    resolversUsuario];
