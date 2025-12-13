import express from "express";
import productRoutes from "./product.routes.js";
import categoryRoutes from "./category.routes.js";

const routes = express.Router();

routes.use("/api/products", productRoutes);
routes.use("/api/categories", categoryRoutes);
export default routes;
