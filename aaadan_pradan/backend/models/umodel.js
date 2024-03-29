const mongoose=require('mongoose')
const Schema=mongoose.Schema

const User=new Schema(
    {
        email:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        },
        subjects:{
            type:Array,
            default:[]
        }
    },
    {timestamps:true},
)

module.exports =mongoose.model('users',User)