// const express = require('express')
import  express  from "express"
import 'dotenv/config'
import { dirname } from "path";
const app = express()
const port = process.env.PORT || 8000;

//config view engine
app.set('view engine', 'ejs')
app.set("views",__dirname+"/views")
app.get('/', (req, res) => {
  res.render("home.ejs")

})

app.get('/demo', (req, res) => {
  res.send('Demo1 2  3 text ' )
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
    console.log("dot env:",process.env.PORT)
})
