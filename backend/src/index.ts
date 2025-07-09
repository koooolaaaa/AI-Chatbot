import express from 'express'

const app = express(); 

// middlewares
app.use(express.json());

//connections and listeners
app.listen(5050, () => console.log("Server Open"));






