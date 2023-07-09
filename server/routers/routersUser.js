// Importar el módulo Express
import Express from "express";
// Importar los controladores para usuarios desde "../controllers/userControllers"
import { getAllUsers, createUser, updateUser, getUser } from "../controllers/userControllers";

// Crear un enrutador utilizando la función Router de Express
const Router = Express.Router();

// Configurar las rutas utilizando los controladores correspondientes
Router.get('/', getAllUsers);      // Ruta para obtener todos los usuarios
Router.get('/:id', getUser);       // Ruta para obtener un usuario específico por su ID
Router.post('/', createUser);      // Ruta para crear un nuevo usuario
Router.put('/:id', updateUser);    // Ruta para actualizar un usuario existente por su ID

// Exportar el enrutador
export default Router;
