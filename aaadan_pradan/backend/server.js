// mongo db atlas link : mongodb+srv://Rachit:<password>@cluster0.olun1qo.mongodb.net/?retryWrites=true&w=majority
import express from "express";
import cors from "cors";
import restaurants from './api/restaurants.route.js'


const app = express()// Used to make middleware

//Things express uses 
app.use(cors())
app.use(express.json())// now express and read json

app.use("/api/v1/restaurants",restaurants)
app.use("*",(req,res)=>res.status(404).json({error:'not found'}))//going to a route which is note in the file

export default app