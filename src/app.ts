import express from "express";
import morgan from "morgan";
import productRoutes from "./routes/productRoutes";

const app = express();

app.use(morgan("common"));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, Jest!');
});

app.use("/products", productRoutes);

export default app;