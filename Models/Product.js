import { DataTypes as DT, Model } from "sequelize";
import connection from "../connection/connection.js";

class Product extends Model {}

Product.init({
    name: {
        type: DT.STRING(50),
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    description: {
        type: DT.STRING(100),
        allowNull: true,
    },
    price: {
        type: DT.DOUBLE,
        allowNull: false,
        validate: {
            isDecimal: true,
            min: 0,
        }
    }
}, {
    sequelize: connection,
    modelName: "Product",
    timestamps: false,
});

export default Product;
