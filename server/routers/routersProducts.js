// Importar el módulo express
import express from "express";

// Importar los controladores relacionados con los productos
import { bookProduct, buyProducts, getAllProducts, getProduct, createProduct, updateProducts, deleteProduct } from "../controllers/productsControllers";

// Crear una instancia de Router utilizando express.Router()
const router = express.Router();

// Definir las rutas y asignar los controladores correspondientes

router.get('/', getAllProducts);               // Ruta para obtener todos los productos
router.put('/buy', buyProducts);               // Ruta para comprar productos
router.get('/book/:id', bookProduct);           // Ruta para reservar o desreservar un producto
router.get('/:id', getProduct);                // Ruta para obtener un producto específico
router.post('/', createProduct);                // Ruta para crear un nuevo producto
router.put('/:id', updateProducts);             // Ruta para actualizar un producto existente
router.delete('/:id', deleteProduct);           // Ruta para eliminar un producto

// Exportar el enrutador para su uso en otros archivos
export default router;
