// Importar el modelo User desde el archivo '../Models/user'
import User from "../Models/user";

// Controlador para obtener todos los usuarios
const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.json({ message: error.message });
  }
};

// Controlador para crear un nuevo usuario
const createUser = async (req, res) => {
  try {
    await User.create(req.body);
    res.json({
      message: 'Se ha creado el registro con éxito'
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

// Controlador para actualizar un usuario existente
const updateUser = async (req, res) => {
  try {
    await User.update(req.body, {
      where: { id: req.params.id }
    });
    res.json({
      message: 'Se ha realizado el registro con éxito'
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

// Controlador para obtener un usuario específico
const getUser = async (req, res) => {
  try {
    const user = await User.findAll({
      where: { id: req.params.id }
    });
    res.json(user[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

// Exportar los controladores como un objeto
export {
  getAllUsers,
  createUser,
  updateUser,
  getUser
};
