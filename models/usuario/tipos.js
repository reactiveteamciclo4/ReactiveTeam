import { gql } from 'apollo-server-express';

const tiposUsuario = gql`
  type Usuario {
    _id: ID!
    nombre: String!
    apellido: String!
    identificacion: String!
    correo: String!
    rol: Enum_Rol!
    foto: String
    estado: Enum_EstadoUsuario
    inscripciones: [Inscripcion]
    avancesCreados: [Avance]
    proyectosLiderados: [Proyecto]
  }
  input FiltroUsuarios {
    _id: ID
    identificacion: String
    correo: String
    rol: Enum_Rol
    estado: Enum_EstadoUsuario
  }

  input CamposEditarPerfil {
    nombre: String
    apellido: String
    identificacion: String
    foto: String
  }
  type Query {
    Usuarios(filtro: FiltroUsuarios): [Usuario]
    Usuario(_id: String!): Usuario
  }


  type Mutation {
    crearUsuario(
      nombre: String!
      apellido: String!
      identificacion: String!
      correo: String!
      rol: Enum_Rol!
      estado: Enum_EstadoUsuario
      password: String!
    ): Usuario

    editarUsuario(
      _id: String
      nombre: String
      apellido: String
      identificacion: String
      correo: String
      estado: Enum_EstadoUsuario
    ): Usuario

    eliminarUsuario(_id: String, correo: String): Usuario

    editarPerfil(_id: String!, campos: CamposEditarPerfil!): Usuario
    
    editarEstado( 
      _id: String!
      estado: Enum_EstadoUsuario!
    ): Usuario

    
  }
`;

export { tiposUsuario };