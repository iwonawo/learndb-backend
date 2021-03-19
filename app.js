let express = require("express")
const dotenv = require("dotenv")
dotenv.config()

let app = express()

app.use(express.urlencoded({ extended: false })) // makes user input accesable form req.body object
app.use(express.json())

app.use("/", require("./router"))
const server = require("http").createServer(app)

module.exports = server
