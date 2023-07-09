// Importar el módulo Express y la funcionalidad cors
import { Express } from "express";
import cors from 'cors';
// Importar la instancia de la base de datos desde el archivo './database/database'
import dataBase from "./database/database";
// Importar las rutas de productos desde el archivo './routers/routersProducts'
import productRoutes from './routers/routersProducts'
// Importar las rutas de usuarios desde el archivo './routers/routersUser'
import userRoutes from './routers/routersUser'
// Importar el modelo ProductModel desde el archivo './Models/ProductModel'
import ProductModel from "./Models/ProductModel";
// Importar la función pay desde el archivo './routers/pay.js'
import { pay } from './routers/pay.js'

// Crear una instancia de Express
const app = Express();

// Usar cors como middleware para permitir solicitudes de diferentes dominios
app.use(cors());
// Habilitar el análisis de solicitudes JSON
app.use(Express.json());
// Configurar las rutas de productos
app.use('/products', productRoutes);
// Configurar las rutas de usuarios
app.use('/users', userRoutes);

try {
    // Verificar la autenticación de la base de datos
    dataBase.authenticate();
    console.log('Conexión exitosa a la base de datos');
} catch (error) {
    console.log(`El error de conexión fue: ${error}`);
}

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// Obtener todos los productos y almacenar sus stocks y stock mínimo en objetos
const products = await ProductModel.findAll({
    attributes: ['id', 'stock', 'stockMin', 'nombre']
});

let productsStock = {}; // Objeto para guardar el stock de los productos
let productMinStock = {}; // Objeto para guardar el stock mínimo de los productos

products.forEach(product => {
    productsStock[product.dataValues.id] = product.dataValues.stock;
});

products.forEach(product => {
    productMinStock[product.dataValues.id] = { stockMin: product.dataValues.stockMin, nombre: product.dataValues.nombre };
});

console.log(productMinStock);
// holaa