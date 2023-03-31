app.get('/About',(req,res)=>{
  res.send(`
  <h1 style="color:red;border:5px">About page</h1>
  <p>
  This is paragraph
  </p>
  `);
})