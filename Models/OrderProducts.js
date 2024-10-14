import { DataTypes as DT } from "sequelize";
import connection from "../connection/connection.js";

// Definimos la tabla intermedia OrderProducts
const OrderProducts = connection.define('OrderProducts', {
    quantity: {
        type: DT.INTEGER,
        allowNull: false,
        defaultValue: 1,
        validate: {
            min: 1,  // La cantidad no puede ser menor que 1
        }
    }
}, {
    timestamps: false  // No necesitamos timestamps en esta tabla
});


export default OrderProducts;