class ProductMemoryDAO {
    constructor() {
        this.products = [];
    }

    createProduct = async (product) => {
        try {
            this.products.push(product);
            return sonda
        } catch (error) {
            throw error;
        }
    }

    getAllProducts() {
        return this.products;
    }

    getProductById(id){
        return this.products.filter(product => product.id === id);
    }

}

export default ProductMemoryDAO;
