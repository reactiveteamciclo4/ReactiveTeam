import { modeloUsuario } from './usuarios.js';
import bcrypt from 'bcrypt';
import { ModeloInscripcion } from '../inscripcion/inscripcion.js';

const resolversUsuario = {
    Usuario: {
        inscripciones: async (parent, args, context) => {
            return ModeloInscripcion.find({ estudiante: parent._id });
        },
    },
    Query: {
        Usuarios: async (parent, args, context) => {
            const usuarios = await modeloUsuario.find();
            // .populate([
            //   {
            //     path: 'inscripciones',
            //     populate: {
            //       path: 'proyecto',
            //       populate: [{ path: 'lider' }, { path: 'avances' }],
            //     },
            //   },
            //   {
            //     path: 'proyectosLiderados',
            //   },
            // ]);
            return usuarios;
        },
        Usuario: async (parent, args) => {
            const usuario = await modeloUsuario.findOne({ _id: args._id });
            return usuario;
        },
    },
    Mutation: {
        crearUsuario: async (parent, args) => {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(args.password, salt);
            const usuarioCreado = await modeloUsuario.create({
                nombre: args.nombre,
                apellido: args.apellido,
                identificacion: args.identificacion,
                correo: args.correo,
                rol: args.rol,
                password: hashedPassword,
            });

            if (Object.keys(args).includes('estado')) {
                usuarioCreado.estado = args.estado;
            }

            return usuarioCreado;
        },
        editarUsuario: async (parent, args) => {
            const usuarioEditado = await modeloUsuario.findByIdAndUpdate(
                args._id,
                {
                    nombre: args.nombre,
                    apellido: args.apellido,
                    identificacion: args.identificacion,
                    correo: args.correo,
                    estado: args.estado,
                },
                { new: true }
            );

            return usuarioEditado;
        },
        eliminarUsuario: async (parent, args) => {
            if (Object.keys(args).includes('_id')) {
                const usuarioEliminado = await modeloUsuario.findOneAndDelete({ _id: args._id });
                return usuarioEliminado;
            } else if (Object.keys(args).includes('correo')) {
                const usuarioEliminado = await modeloUsuario.findOneAndDelete({ correo: args.correo });
                return usuarioEliminado;
            }
        },
    },
};

export { resolversUsuario };