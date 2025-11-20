// const express = require('express')
import  express  from "express"
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World ss1!')
})

app.get('/demo', (req, res) => {
  res.send('Demo1 2 ' )
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
