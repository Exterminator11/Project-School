// Connect the database and start the server
import app from './server.js'
import mongodb from "mongodb"
import dotenv from 'dotenv'
import RestaurantsDAO from './dao/restaurantsDAO.js'


dotenv.config() // configuring the dotenv for the .env 

const MongoClient=mongodb.MongoClient
const port = process.env.PORT || 8000 //if PORT cannot be accessed then 8000 port will be used

MongoClient.connect(
    process.env.RESTREVIEWS_DB_URI,{
        wtimeout:2500, // request timesout after 2.5 sec
    })
    .catch(err=>{
        console.error(err.stack)
        process.exit(1)    
    })
    .then(async client=>{
        await RestaurantsDAO.injectDB(client)
        app.listen(port,()=>{
            console.log(`listening on the port ${port}`)
        })
    })