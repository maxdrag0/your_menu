import ProductApi from "../Api/productApi.js";

class ProductController {
    constructor() {
        this.productApi = new ProductApi();
    }

    createSonda = async (req, res) => {
        try {
            const { id, temperatura } = req.body;
            const product = await this.productApi.createSonda(id, temperatura);
            res.status(200).json({ data: product });
        } catch (error) {
            res.status(400).send({ error: error.message });
        }
    }

    getAllSondas = async (req, res) => {
        try {
            const products = await this.productApi.getAllSondas();
            res.status(200).json({ data: products });
        } catch (error) {
            res.status(500).send({ error: error.message });
        }
    }

    getAllSondaById = async (req, res) => {
        try {
            const id = parseInt(req.params.id, 10);
            const product = await this.productApi.getAllSondaById(id);
            if (product.length === 0) {
                throw new Error("Número de producto incorrecto");
            }
            res.status(200).json({ data: product });
        } catch (error) {
            res.status(400).send({ error: error.message });
        }
    }

    getEstadisticas = async (req, res) => {
        try {
            const stats = await this.productApi.getEstadisticas();
            res.status(200).json({ estadisticas: stats });
        } catch (error) {
            res.status(500).send({ error: error.message });
        }
    }
}

export default ProductController;
