const express = require('express')
const app = express()
const port = 3000;

const chefInfoData=require("./chefinfo.json");

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/', (req, res) => {
    res.send('Welcome To Yummy Foodies!')
})

app.get('/chefinfo', (req, res) => {
    res.send(chefInfoData);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})