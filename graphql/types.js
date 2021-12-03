import { gql } from 'apollo-server-express';
import { tiposAvance } from '../models/avance/tipos.js';
import { tiposInscripcion } from '../models/inscripciones/tipos.js';
import { tiposEnums } from '../models/enums/tipos.js';
import { tiposProyecto } from '../models/proyecto/tipos.js';
import { tiposUsuario } from '../models/usuario/tipos.js';

const tiposGlobales = gql`
  scalar Date
`;

export const tipos = [
  tiposGlobales, 
  tiposAvance, 
  tiposInscripcion, 
  tiposEnums, 
  tiposProyecto, 
  tiposUsuario];
