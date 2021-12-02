import { gql } from 'apollo-server-express';

const tiposEnums = gql`

enum Enum_EstadoInscripcion {
    ACEPTADO
    RECHAZADO
    PENDIENTE
  }
`;

export { tiposEnums };