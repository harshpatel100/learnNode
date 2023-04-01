const express = require('express');
const app = express();
require('dotenv').config()
const path = require('path');
const router = express.Router();
app.use(express.static(path.join(__dirname,'public')));
router.get('/',(req,res)=>{
  let pathHome=path.join(__dirname+'/index.html')
  console.log(pathHome);
  res.sendFile(pathHome);
})
const PORT = process.env.PORT || 3030;

// your code
app.use('/',router);
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});