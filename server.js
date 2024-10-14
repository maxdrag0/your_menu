import express from "express";
import { SERVER_PORT } from "./config/config.js";
import router from "./routes/router.js";
import connection from "./connection/connection.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api', router);

await connection.sync({ force: false });

app.listen(SERVER_PORT, () => {
    console.log(
        `Servidor escuchando en el puerto http://localhost:${SERVER_PORT}`
    );
});
