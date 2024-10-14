import { DataTypes as DT, Model } from "sequelize";
import connection from "../connection/connection.js";

class Order extends Model {}

Order.init({
    status: {
        type: DT.STRING(20),
        allowNull: false,
        defaultValue: 'pending'
    },
    total: {
        type: DT.DOUBLE,
        allowNull: false,
        validate: {
            isDecimal: true,
            min: 0,
        }
    }
}, {
    sequelize: connection,
    modelName: "Order",
    timestamps: true,
});


export default Order;
