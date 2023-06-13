require('./DB/connect')
const express = require("express");
const app     = express();

app.use(express.json());


const dotenv=require("dotenv");
dotenv.config();
const Port = process.env.PORT;


const userRoutes = require('./routes/UserRoutes');


app.get("/",(req,res)=>{
    res.send("from express server ")

})

app.use('/tasks',userRoutes);




app.listen( Port , ()=>{
    console.log("server is running on port number ",Port)
})
