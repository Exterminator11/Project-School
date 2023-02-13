const mongoose=require('mongoose')

const api='mongodb+srv://test_User:Testdb321@cluster0.olun1qo.mongodb.net/project-school?retryWrites=true&w=majority'

mongoose
    .connect(api)
    .catch(e=>{
        console.error('Connection error',e.message)
    })

const db=mongoose.connection

module.exports=db