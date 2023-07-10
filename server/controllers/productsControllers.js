// Importar el modelo Product desde el archivo '../Models/ProductModel'
import ProductModel from "../Models/ProductModel";
// Importar las variables productsStock y productMinStock desde el archivo '../main.js'
import { productsStock, productMinStock } from "../main.js";
// Importar la función sendMail desde el archivo '../mail/mail.js'
import { sendMail } from "../email/mail.js";

// Controlador para obtener todos los productos
const getAllProducts = async (req, res) => {
  try {
    const products = await ProductModel.findAll(); // Consulta todos los productos en la base de datos
    res.json(products); // Envía la respuesta como JSON con la lista de productos
  } catch (error) {
    res.json({ message: error.message }); // Si ocurre un error, envía una respuesta JSON con el mensaje de error
  }
};
// Controlador para obtener un producto específico
const getProduct = async (req, res) => {
  try {
    const product = await ProductModel.findAll({
      where: { id: req.params.id }, // Consulta el producto en la base de datos utilizando el ID proporcionado en los parámetros de la solicitud
    });
    res.json(product[0]); // Envía la respuesta como JSON con el primer producto encontrado en formato de objeto
  } catch (error) {
    res.json({ message: error.message }); // Si ocurre un error, envía una respuesta JSON con el mensaje de error
  }
};

// Controlador para crear un nuevo producto
const createProduct = async (req, res) => {
  try {
    await ProductModel.create(req.body); // Crea un nuevo producto en la base de datos utilizando los datos proporcionados en el cuerpo de la solicitud
    res.json({
      message: "Creación del registro exitosa", // Envía una respuesta JSON con un mensaje de éxito
    });
  } catch (error) {
    res.json({ message: error.message }); // Si ocurre un error, envía una respuesta JSON con el mensaje de error
  }
};

// Controlador para actualizar un producto existente
const updateProducts = async (req, res) => {
  try {
    await ProductModel.update(req.body, {
      where: { id: req.params.id }, // Actualiza el registro del producto en la base de datos con los datos proporcionados en el cuerpo de la solicitud, filtrando por el ID proporcionado en los parámetros de la solicitud
    });
    res.json({
      message: "El registro se ha actualizado con éxito", // Envía una respuesta JSON con un mensaje de éxito
    });
  } catch (error) {
    res.json({ message: error.message }); // Si ocurre un error, envía una respuesta JSON con el mensaje de error
  }
};

// Controlador para eliminar un producto
const deleteProduct = async (req, res) => {
  try {
    await ProductModel.destroy(req.body, {
      where: { id: req.params.id }, // Elimina el registro del producto en la base de datos con el ID proporcionado en los parámetros de la solicitud
    });
    res.json({
      message: "El registro se ha borrado con éxito", // Envía una respuesta JSON con un mensaje de éxito
    });
  } catch (error) {
    res.json({ message: error.message }); // Si ocurre un error, envía una respuesta JSON con el mensaje de error
  }
};






// Controlador para reservar o desreservar un producto
const bookProduct = async (req, res) => {
  try {
    console.log(productsStock); // Imprime el valor de la variable 'productsStock' en la consola
    if (req.query.f === "unboox") { // Verifica si el valor del parámetro de consulta 'f' es igual a "unboox"
      productsStock[req.params.id]++; // Incrementa en 1 el valor correspondiente a la clave 'req.params.id' en el objeto 'productsStock'
      return res.json("Unbooked"); // Envía una respuesta JSON con el mensaje "Unbooked"
    } else if (req.query.f === "book") { // Verifica si el valor del parámetro de consulta 'f' es igual a "book"
      if (productsStock[req.params.id] == 0) // Verifica si el valor correspondiente a la clave 'req.params.id' en el objeto 'productsStock' es igual a 0
        return res.json("Stockout"); // Si es igual a 0, envía una respuesta JSON con el mensaje "Stockout" indicando que no hay stock
      productsStock[req.params.id]--; // Decrementa en 1 el valor correspondiente a la clave 'req.params.id' en el objeto 'productsStock'
      return res.json("Booked"); // Envía una respuesta JSON con el mensaje "Booked"
    }
    res.status(400).json("Bad request"); // Si no se cumple ninguna de las condiciones anteriores, envía una respuesta JSON con el mensaje "Bad request" y un código de estado 400 (solicitud incorrecta)
  } catch (error) {
    res.json({ message: error.message }); // Si ocurre un error, envía una respuesta JSON con el mensaje de error
  }
};



// Función para actualizar el contenido en la base de datos
const updateContent = async (product, quantity) => {
  const stock = await ProductModel.findAll({
    attributes: ["id", "stock"], // Se especifican los atributos a incluir en la consulta: "id" y "stock"
    where: { id: product }, // Se filtra por el ID del producto proporcionado en el parámetro 'product'
  });
  console.log(quantity); // Imprime el valor de la variable 'quantity' en la consola
  await ProductModel.update(
    { stock: stock[0].dataValues.stock - quantity[product] }, // Actualiza el stock del producto restando la cantidad proporcionada en 'quantity[product]'
    {
      where: { id: product }, // Se especifica el filtro para actualizar el producto con el ID proporcionado en 'product'
    }
  );
  if (productMinStock[product].stockMin >= stock[0].dataValues.stock - quantity[product]) {
    sendMail({ id: product }); // Si el stock actualizado es menor o igual al stock mínimo definido en 'productMinStock[product].stockMin', se envía un correo electrónico notificando sobre el bajo stock
  }
};



// Controlador para comprar productos
const buyProducts = async (req, res) => {
  try {
    console.log(typeof req.body); // Imprime el tipo de datos de 'req.body' en la consola
    Object.keys(req.body).forEach((product) => updateContent(product, req.body)); // Itera sobre las claves de 'req.body' y llama a la función 'updateContent' pasando cada clave como 'product' y 'req.body' como argumento
    res.json("Successful purchase"); // Envía una respuesta JSON con el mensaje "Successful purchase"
  } catch (error) {
    res.json(error.message); // Si ocurre un error, envía una respuesta JSON con el mensaje de error
  }
};


// Exportamos todos los controladores
export {  
    getAllProducts,
    getProduct,
    createProduct,
    updateProducts,
    deleteProduct,
    bookProduct,
    buyProducts,
};
