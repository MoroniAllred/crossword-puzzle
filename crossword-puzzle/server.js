const express = require("express")
const app = express()
const mongoose = require("mongoose")
const morgan = require("morgan")
const PORT = process.env.PORT || 7000

app.use(express.json())
app.use(morgan("dev"))

mongoose.connect("mongodb://localhost:27017/wordDb",
{
    useNewUrlParser: true
})
.then(() => console.log("connected to the database"))
.catch(err => console.log(err))

app.use("/word", require("./routes/wordRouter"))

app.listen(PORT, () =>{
    console.log(`server is running on ${PORT}`)
})