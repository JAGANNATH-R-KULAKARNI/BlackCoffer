const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const Blackcoffer = require('./models/model');

const app=express();

app.use(express.json());
app.use(cors());

app.get('/getalldata',async (req,res,next)=>{
Blackcoffer.find().then((result)=>{
  console.log('success')
 res.send(result);
})
.catch((err)=>{
  console.log("err");
  res.send({
    "message" : "Unsuccessful"
  })
})
});


app.listen(3001,()=>{
  console.log('server running on port 3001');
  mongoose.connect('mongodb+srv://jagannathrk:jagannathrk@blackcoffer.9dxyx.mongodb.net/Blackcoffer?retryWrites=true&w=majority',()=>{
  console.log('successfully connected to MongoDB');
});
})