import { Router } from "express";
import ProductController from "../controller/productController.js";

const productRoutes = Router();
const productController = new ProductController();

productRoutes.post("/", productController.createSonda);

productRoutes.get("/", productController.getAllSondas);

productRoutes.get("/estadisticas", productController.getEstadisticas);

productRoutes.get("/:id", productController.getAllSondaById);

export default productRoutes;