const express = require('express');


const app = express();
// get post put delete, CRUD = create read update delete

// four methods 
// put 
app.get('/',(req,res) =>{ // path ,middleware,logic
  console.log('put method is running....');
  res.send('put method example....');
})

app.listen(5000, () => {
  console.log('backend is runing .......');
});