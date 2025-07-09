import express from 'express'

const app = express(); 

// GET -
// PUT -
// POST 
// DELETE


app.post("/hello", (req, res, next) => {
  return res.send("Hello");
});

app.listen(5050, () => console.log("Server Open"));






