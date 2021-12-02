import { gql } from 'apollo-server-express';
import { tiposAvance } from '../models/avance/tipos.js';
import { tiposInscripcion } from '../models/inscripciones/tipos.js';
import { tiposEnums } from '../models/enums/tipos.js';

const tiposGlobales = gql`
  scalar Date
`;

export const tipos = [tiposGlobales, tiposAvance, tiposInscripcion, tiposEnums];