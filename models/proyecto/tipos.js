import { gql } from 'apollo-server-express';

/*cuando esten las otras colecciones listas, cambiar el tipo a los atributos:
proyecto: Proyecto!
creadoPor: Usuario! */

const tiposProyecto = gql`
  type Proyecto {
    _id: ID!
    nombre: String!
    presupuesto: Float!
    fechaInicio: Date!
    fechaFin: Date!
    lider: String!
  }

  type Query {
    Proyectos: [Proyecto]
    filtrarProyecto(idProyecto: String!): [Proyecto]
  }
  type Mutation {
    crearProyecto(
        nombre: String!
        presupuesto: Float!
        fechaInicio: Date!
        fechaFin: Date!
        lider: String!
        ): Proyecto


      editarProyecto(
        _id: String!
        nombre: String!
        presupuesto: Float!
        fechaInicio: Date!
        fechaFin: Date!
        lider: String!
        ): Proyecto
  
      eliminarProyecto(_id: String): Proyecto


  }
`;

export { tiposProyecto };
