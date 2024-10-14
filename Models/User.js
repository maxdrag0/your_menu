import { DataTypes as DT, Model } from "sequelize";
import connection from "../connection/connection.js";

class User extends Model {}

User.init({
    name: {
        type: DT.STRING(20),
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    country: {
        type: DT.STRING(20),
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    city: {
        type: DT.STRING(20),
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
        allowNull: false,
        validate: {
          isEmail: true,
          notEmpty: true,
        }
    },
    password: {
        type: DT.STRING,
        allowNull: false,
        validate: {
            len: [8, 100],
            notEmpty: true,
        }
    },
    salt: {
        type: DT.STRING,
    }
}, {
    sequelize: connection,
    modelName: "User",
    timestamps: false,
});

export default User;
