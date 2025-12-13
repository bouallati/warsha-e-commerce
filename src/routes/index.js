import express from "express";
import productRoutes from "./product.routes.js";

const routes = express.Router();

routes.use("/api/products", productRoutes);
export default routes;