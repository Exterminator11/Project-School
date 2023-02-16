const mongoose = require('mongoose')
const Schema=mongoose.Schema

const clg=new Schema(
    {
        name:{
            type:String,
            lowercase:true,
        },
        subjects:{
            type:Array,
            default:[]
        },
        address:{
            add:{type:String,lowercase:true},
            city:{type:String,lowercase:true}
        },
        price:{
            type:Number,
        }
    },
    {timestamps:true},
)

module.exports =mongoose.model('colleges',clg)