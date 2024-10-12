import Factory from "../DAOs/factory.js";
import validaciones from "../utils/validaciones.js";
import Product from "../Models/index.js";

class ProductApi {
    constructor() {
        this.factory = Factory.factory();
    }

    createProduct = async (id, name, price, description ) => {
        try {
            if (
                validaciones.validName(name) &&
                validaciones.validPrice(price) &&
                validaciones.validDescription(description)
            ) {
                const pruduct = new Product(id, name, price, description);
                const data = await this.factory.ProductMemoryDAO.createProduct(pruduct);
                return data;
            } else{
                throw new Error("Datos no válidos");
            }
        } catch (error) {
            throw error;
        }
    }

    getAllProduct = async () => {
        try {
            const products = await this.factory.ProductMemoryDAO.getAllProducts();
            return products;
        } catch (error) {
            throw error;
        }
    }

    getProductById = (id) => {
        try {
            if (
                validaciones.sondaValida(id)
            ) {
                const product = this.factory.ProductMemoryDAO.getProductById(id);
                return product;
            } else{
                throw new Error("Número de producto incorrecto");
            }

        } catch (error) {
            throw error;
        }
    }
}

export default ProductApi