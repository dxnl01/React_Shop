// Importar el modelo Product desde el archivo '../Models/ProductModel'
import ProductModel from "../Models/ProductModel";
// Importar las variables productsStock y productMinStock desde el archivo '../main.js'
import { productsStock, productMinStock } from "../main.js";
// Importar la función sendMail desde el archivo '../mail/mail.js'
import { sendMail } from "../email/mail.js";

// Controlador para obtener todos los productos
const getAllProducts = async (req, res) => {
  try {
    const products = await ProductModel.findAll();
    res.json(products);
  } catch (error) {
    res.json({ message: error.message });
  }
};
// Controlador para obtener un producto específico
const getProduct = async (req, res) => {
  try {
    const product = await ProductModel.findAll({
      where: { id: req.params.id },
    });
    res.json(product[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

// Controlador para crear un nuevo producto
const createProduct = async (req, res) => {
  try {
    await ProductModel.create(req.body);
    res.json({
      message: "Creación del registro exitosa",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

// Controlador para actualizar un producto existente
const updateProducts = async (req, res) => {
  try {
    await ProductModel.update(req.body, {
      where: { id: req.params.id },
    });
    res.json({
      message: "El registro se ha actualizado con éxito",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

// Controlador para eliminar un producto
const deleteProduct = async (req, res) => {
  try {
    await ProductModel.destroy(req.body, {
      where: { id: req.params.id },
    });
    res.json({
      message: "El registro se ha borrado con éxito",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

// Controlador para reservar o desreservar un producto
const bookProduct = async (req, res) => {
  try {
    console.log(productsStock);
    if (req.query.f === "unboox") {
      productsStock[req.params.id]++;
      return res.json("Unbooked");
    } else if (req.query.f === "book") {
      if (productsStock[req.params.id] == 0)
        return res.json("Stockout");////en caso de que el producto sea igual a 0 se notifica que se acabo
      productsStock[req.params.id]--;
      return res.json("Booked");
    }
    res.status(400).json("Bad request");
  } catch (error) {
    res.json({ message: error.message });
  }
};


// Función para actualizar el contenido en la base de datos
const updateContent = async (product, quantity) => {
  const stock = await ProductModel.findAll({
    attributes: ["id", "stock"],
    where: { id: product },
  });
  console.log(quantity);
  await ProductModel.update(
    { stock: stock[0].dataValues.stock - quantity[product] },
    {
      where: { id: product },
    }
  );
  if (productMinStock[product].stockMin >= stock[0].dataValues.stock - quantity[product]) {
    sendMail({ id: product });
  }
};


// Controlador para comprar productos
const buyProducts = async (req, res) => {
  try {
    console.log(typeof req.body);
    Object.keys(req.body).forEach((product) => updateContent(product, req.body));
    res.json("Successful purchase");
  } catch (error) {
    res.json(error.message);
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