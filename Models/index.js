import Product from "./Product.js";
import Order from "./Order.js";
import OrderProducts from "./OrderProducts.js";
import Restaurant from "./Restaurant.js";
import User from "./User.js";

// Relación Order con User
Order.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(Order, { foreignKey: 'userId' });

// Relación Order con Restaurant
Order.belongsTo(Restaurant, { foreignKey: 'restaurantId' });
Restaurant.hasMany(Order, { foreignKey: 'restaurantId' });

// Relación muchos a muchos entre Order y Product
Order.belongsToMany(Product, { through: OrderProducts, foreignKey: 'orderId' });
Product.belongsToMany(Order, { through: OrderProducts, foreignKey: 'productId' });

export default { Product, Order, OrderProducts, Restaurant, User };