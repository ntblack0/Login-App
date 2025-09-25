import express from "express";
import publicRouter from "./routes/public.js";
import privateRouter from "./routes/private.js";

import auth from "./middlewares/auth.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/", publicRouter)
app.use("/", auth, privateRouter)

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
