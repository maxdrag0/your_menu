import ProductApi from "../Api/productApi.js";

class ProductController {
    constructor() {
        this.productApi = new ProductApi();
    }

    createProduct = async (req, res) => {
        try {
            const { name, price, description } = req.body;
            const product = await this.productApi.createProduct(name, price, description);
            res.status(200).json({ data: product });
        } catch (error) {
            res.status(400).send({ error: error.message });
        }
    }

    getAllProducts = async (req, res) => {
        try {
            const products = await this.productApi.getAllProducts();
            res.status(200).json({ data: products });
        } catch (error) {
            res.status(500).send({ error: error.message });
        }
    }

    getProductById = async (req, res) => {
        try {
            const id = parseInt(req.params.id, 10);
            const product = await this.productApi.getProductById(id);
            if (product.length === 0) {
                throw new Error("Número de producto incorrecto");
            }
            res.status(200).json({ data: product });
        } catch (error) {
            res.status(400).send({ error: error.message });
        }
    }

}

export default ProductController;
