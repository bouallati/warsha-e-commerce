import express from "express";
import productRoutes from "./product.routes.js";
import categoryRoutes from "./category.routes.js";
import cartRoutes from "./cart.route.js";

const routes = express.Router();

routes.use("/api/products", productRoutes);
routes.use("/api/categories", categoryRoutes);
routes.use("/api/cart", cartRoutes);
export default routes;
