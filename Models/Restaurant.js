import { DataTypes as DT, Model } from "sequelize";
import connection from "../connection/connection.js";

class Restaurant extends Model {}

Restaurant.init({
    name: {
        type: DT.STRING(50),
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    address: {
        type: DT.STRING(100),
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    city: {
        type: DT.STRING(50),
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    phone: {
        type: DT.STRING(20),
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    mail: {
        type: DT.STRING,
        unique: true,
        validate: {
          isEmail: true,
          notEmpty: true,
        }
    },
    password: {
        type: DT.STRING,
        validate: {
          notEmpty: true,
        }
    },
    salt: {
        type: DT.STRING,
    }
}, {
    sequelize: connection,
    modelName: "Restaurant",
    timestamps: false,
});

export default Restaurant;
