import express from "express";
import publicRouter from "./routes/public.js";

const app = express();
const PORT = 3000;

// Para o Express entender JSON no body
app.use(express.json());

// Usar as rotas do arquivo public.js
app.use("/", publicRouter);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
