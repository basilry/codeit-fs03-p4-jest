import express from "express";
import morgan from "morgan";
import productRoutes from "./routes/productRoutes";

const app = express();
const port = 3080;

app.use(morgan("common"));
app.use(express.json());

export const server = app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.get('/', (req, res) => {
  res.send('Hello, Jest!');
});

app.use("/products", productRoutes);

export default app;