import dataBase from "../database/database";
import { DataTypes} from 'sequelize';

const Product = dataBase.define('Productos',{
    nombre: {type: DataTypes.STRING},
    precio: {type: DataTypes.NUMBER},
    descripcion: {type: DataTypes.TEXT},
    image1: {type: DataTypes.TEXT},
    image2: {type: DataTypes.TEXT},
    image3: {type: DataTypes.TEXT},
    maxStock: {type: DataTypes.INTEGER},
    minStock: {type: DataTypes.INTEGER},
    stock: {type: DataTypes.INTEGER}

})

export default Product;


