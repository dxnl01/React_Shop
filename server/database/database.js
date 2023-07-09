// Importar la clase Sequelize del módulo 'sequelize'
import { Sequelize } from 'sequelize';

// Crear una instancia de Sequelize y establecer la conexión a la base de datos
const dataBase = new Sequelize('tienda', 'root', 'root', {
  host: 'localhost',   // El host donde se encuentra la base de datos
  dialect: 'mysql'     // El dialecto de la base de datos (MySQL en este caso)
});

// Exportar la instancia de la base de datos para su uso en otros archivos
export default dataBase;
