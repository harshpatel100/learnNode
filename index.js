const express = require('express');
const app = express();
require('dotenv').config()
const path = require('path');

app.get('/',(req,res)=>{
  res.sendFile(__dirname+'/index.html')
})
const PORT = process.env.PORT || 3030;

// your code

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});