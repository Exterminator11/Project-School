const express=require('express')
const ucontroller=require('../controllers/controller')

const router=express.Router()

router.post('/user',ucontroller.createUser)
router.delete('/user/:id',ucontroller.deleteUser)
router.get('/user/:id',ucontroller.getUserByEmailPassword)
router.get('/users',ucontroller.getAllUsers)

module.exports=router