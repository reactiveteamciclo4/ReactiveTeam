import { gql } from 'apollo-server-express';
import { tiposAvance } from '../models/avance/tipos.js';
import { tiposProyecto } from '../models/proyecto/tipos.js';
const tiposGlobales = gql`
  scalar Date
`;

export const tipos = [
  tiposGlobales,
  tiposAvance,
  tiposProyecto,
];
