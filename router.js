const apiRouter = require("express").Router()
const userController = require("./controllers/userController")
const courseController = require("./controllers/courseController")
const cors = require("cors")

apiRouter.use(cors())

apiRouter.get("/", (req, res) => res.json("Hello, if you see this message that means your backend is up and running successfully."))

// user and courses routes go here

module.exports = apiRouter
