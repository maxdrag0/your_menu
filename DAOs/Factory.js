import { MODE } from "../config/config.js";
import ProductMemoryDAO from "./Memory/ProductMemoryDAO.js";

class Factory {
    constructor() {}

    static factory = () => {
        if (MODE === "memory") {
            return {
                ProductMemoryDAO: new ProductMemoryDAO(),
            };
        }
    }
}

export default Factory;