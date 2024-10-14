import { Router } from "express";
import ProductController from "../controller/productController.js";

const productRoutes = Router();
const productController = new ProductController();

productRoutes.post("/", productController.createProduct);

productRoutes.get("/", productController.getAllProducts);

productRoutes.get("/:id", productController.getProductById);

export default productRoutes;