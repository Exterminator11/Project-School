const express=require('express')
const ucontroller=require('../controllers/controller')

const router=express.Router()

router.post('/user',ucontroller.createUser)
router.delete('/user/:id',ucontroller.deleteUser)
router.get('/userf',ucontroller.getUserByEmailPassword)
router.get('/users',ucontroller.getAllUsers)
router.get('/clgs',ucontroller.getAllColleges)
router.post('/clg',ucontroller.createClg)


module.exports=router