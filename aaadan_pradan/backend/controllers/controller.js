const User=require('../models/umodel')
const College=require('../models/clg')


createUser=async (req,res)=>{
    const body=req.body

    if(!body){
        return res.status(400).json({
            success:false,
            error:'You must be a user'
        })
    }

    const user=new User(body)

    if(!user){
        return res.status(400).json({success:false,error:err})
    }

    user
        .save()
        .then(()=>{
            return res.status(201).json({
                success:true,
                id:user._id,
                message:'User created'
            })
        })
        .catch(error=>{
            return res.status(400).json({
                error,
                message:'User not created'
            })
        })
}

deleteUser=async (req,res)=>{
    await User.findOne({_id:req.params.id},(err,user)=>{
        if(err){
            return res.status(400).json({success:false,error:err})
        }

        if(!user){
            return res
                .status(404)
                .json({success:false,error:'User not found'})
        }
        return res.status(201).json({success:true,data:user})
    }).catch(err=>console.log(err))
}

getUserByEmailPassword=async (req,res)=>{
    const body=req.body
    await User.findOne({"email":body.email},(err,user)=>{
        if(err){
            return res.status(401).json({success:false,error:err})
        }
        if(!user){
            return res.status(404).json({success:false,error:'User not found'})
        }
        return res.status(200).json({success:true,data:user})
    }).catch(err=>console.log(err))
}

getAllUsers=async(req,res)=>{
    await User.find({}, (err, users) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!users.length) {
            return res
                .status(404)
                .json({ success: false, error: `Users not found` })
        }
        return res.status(200).json({ success: true, data: users })
    }).catch(err => console.log(err))
}
// College methods
createClg=async(req,res)=>{
    const body=req.body

    if(!body){
        return res.status(400).json({
            success:false,
            error:'You must be a user'
        })
    }

    const clg=new College(body)

    if(!clg){
        return res.status(400).json({success:false,error:err})
    }

    clg
        .save()
        .then(()=>{
            return res.status(201).json({
                success:true,
                id:clg._id,
                message:'User created'
            })
        })
        .catch(error=>{
            return res.status(400).json({
                error,
                message:'clg not created'
            })
        })
}

getAllColleges=async(req,res)=>{
    await College.find({}, (err, colleges) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!colleges.length) {
            return res
                .status(404)
                .json({ success: false, error: `Colleges not found` })
        }
        return res.status(200).json({ success: true, data: colleges })
    }).catch(err => console.log(err))
}
module.exports={createUser,deleteUser,getUserByEmailPassword,getAllUsers,createClg,getAllColleges}