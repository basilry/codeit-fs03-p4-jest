import express from "express";
import morgan from "morgan";
import userRoutes from "./routes/userRoutes";

const app = express();
const port = 3080;

app.use(morgan("common"));
app.use(express.json());

let server: any = null; // 서버 인스턴스 저장

if (process.env.NODE_ENV !== "test") {
  server = app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}
app.get('/', (req, res) => {
  res.send('Hello, Jest!');
});

app.use("/users", userRoutes);

export { app, server };