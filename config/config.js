import 'dotenv/config'

const SERVER_PORT=process.env.SERVER_PORT
const DB_NAME=process.env.DB_NAME
const DB_USERNAME = process.env.DB_USERNAME
// const DB_PASS = process.env.DB_PASS
const DIALECT=process.env.DIALECT
const HOST=process.env.HOST
const PORT=process.env.PORT

const SECRET=process.env.SECRET
const MODE=process.env.MODE

export {SERVER_PORT, DB_NAME, DB_USERNAME, DIALECT, HOST, PORT, SECRET, MODE}