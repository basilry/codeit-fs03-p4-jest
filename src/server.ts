import app from "./app";

const port = 3080;
const server = app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

export default server;