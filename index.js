const express = require('express')
const app = express()
const port = 3000;
var cors = require('cors');
app.use(cors());



const chefInfoData=require("./chefinfo.json");
const chefReceipe=require("./chef_receipe.json");

app.get('/', (req, res) => {
    res.send('Welcome To Yummy Foodies!')
})

app.get('/chefinfo', (req, res) => {
    res.send(chefInfoData);
})

app.get('/chefReceipe/:id', (req, res) => {
      const id =req.params.id;
      const selectedData=chefReceipe.find(singleData => singleData.id == id);
      res.send(selectedData);
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})