import { Sequelize } from "sequelize";
import { SERVER_PORT, DB_NAME, DB_USERNAME, DIALECT, HOST, PORT, SECRET, MODE } from "../config/config.js";

const db_name = DB_NAME;
const db_username = DB_USERNAME;
const password = "";
const dialect = DIALECT;
const host = HOST;
const port = PORT;

const connection = new Sequelize(db_name, db_username, password, {
  host,
  dialect,
  port,
});

try {
  await connection.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

export default connection;