import { DataTypes } from "sequelize";
import randomDB from "../database/database.random.js";

const personajesDisney = randomDB.define('personajes', { // * Definimos la tabla y los campos a partir de la base de datos que creamos
    id: { // Tipo entero, llave primario y que se auto-incremente
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:  { // Tipo string
        type: DataTypes.STRING
    },
    age: { // Tipo entero
        type: DataTypes.INTEGER
    },
    description: { // Tipo string
        type: DataTypes.STRING
    },
}, {
    timestamps: true // * Que aparezca cuando se creo y cuando se actualizo la tabla
});

export default personajesDisney;