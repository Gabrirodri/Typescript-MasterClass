import express from "express";
import routes from "./routes";
import cors from "cors";

const app = express();
app.use(cors());
app.use(routes);
app.listen(3333);
console.log("rodando aplicação na porta " + 3333);

