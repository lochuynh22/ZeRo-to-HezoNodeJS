// const express = require('express')
import  express  from "express"
import 'dotenv/config'
const app = express()
const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
  res.send('Hello World ss1!')

})

app.get('/demo', (req, res) => {
  res.send('Demo1 2 ' )
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
    console.log("dot env:",process.env.PORT)
})
