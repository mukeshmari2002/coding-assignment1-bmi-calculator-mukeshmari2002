
const express = require('express');
const bodyparser=require('body-parser')
const app = express();
app.use(bodyparser.urlencoded({extended:true}));
const port =3002;

app.get('/', (req, res) => {
  
  res.sendFile(__dirname +'/index.html');
})
app.post('/',(req,res) =>{
  var height =Number(req.body.height);
  var weight =Number(req.body.weight);
  var bmi =  weight / (height * height);
  res.send("Your BMI Is" + bmi)
 
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})