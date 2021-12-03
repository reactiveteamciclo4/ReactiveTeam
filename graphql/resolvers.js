import { resolversAvance } from '../models/avance/resolvers.js';
import { resolversProyecto } from '../models/proyecto/resolvers.js';
import { resolversUsuario } from '../models/usuario/resolvers.js';
import { resolversInscripcion } from '../models/inscripcion/resolvers.js';


export const resolvers = [resolversAvance, resolversProyecto, resolversUsuario, resolversInscripcion];
