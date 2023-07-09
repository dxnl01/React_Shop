// Importar la instancia de la base de datos desde el archivo '../database/database'
import dataBase from "../database/database";

// Importar la clase DataTypes del módulo 'sequelize'
import { DataTypes } from 'sequelize';

// Definir el modelo User utilizando la instancia de la base de datos
const User = dataBase.define('user', {
  userName: { type: DataTypes.STRING },     // Campo userName de tipo STRING
  password: { type: DataTypes.STRING },     // Campo password de tipo STRING
  adress: { type: DataTypes.STRING },       // Campo adress de tipo STRING
  telephone: { type: DataTypes.STRING },    // Campo telephone de tipo STRING
  email: { type: DataTypes.STRING }         // Campo email de tipo STRING
});

// Exportar el modelo User para su uso en otros archivos
export default User;
