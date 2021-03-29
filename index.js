const express = require("express")
const mongoose = require("mongoose")
const formRoute = require("./routes/formRoute")

const app = express()

const PORT = process.env.PORT || 3000

app.set("view engine", "pug")
app.use(express.static(__dirname + "/static"))

const uri =
  "mongodb+srv://Samprit:samprit@cluster0.ziqcu.mongodb.net/mySecondDatabase?retryWrites=true&w=majority"
mongoose.connect(
  uri,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) console.log(err)
    else console.log("Database Connected")
  }
)

app.get("/", (req, res) => {
  res.render("index")
})

app.use("/form", formRoute)

app.listen(PORT, (err) => {
  if (err) console.log(err)
  console.log(`Server Listening on Port ${PORT}...`)
})
