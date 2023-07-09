// Importar la instancia de la base de datos desde el archivo '../database/database'
import dataBase from "../database/database";

// Importar la clase DataTypes del módulo 'sequelize'
import { DataTypes } from 'sequelize';

// Definir el modelo Product utilizando la instancia de la base de datos
const ProductModel = dataBase.define('Product', {
  nameProduct: { type: DataTypes.STRING },         // Campo nombre de tipo STRING
  priceProduct: { type: DataTypes.NUMBER },         // Campo precio de tipo NUMBER
  descriptionProduct: { type: DataTypes.TEXT },      // Campo descripcion de tipo TEXT
  img1: { type: DataTypes.TEXT },           // Campo image1 de tipo TEXT
  img2: { type: DataTypes.TEXT },           // Campo image2 de tipo TEXT
  img3: { type: DataTypes.TEXT },           // Campo image3 de tipo TEXT
  stockMax: { type: DataTypes.INTEGER },      // Campo maxStock de tipo INTEGER
  stockMin: { type: DataTypes.INTEGER },      // Campo minStock de tipo INTEGER
  Stock: { type: DataTypes.INTEGER }          // Campo stock de tipo INTEGER
});

// Exportar el modelo Product para su uso en otros archivos
export default ProductModel;
