const express=require('express')
const router=express.Router()
const sign=require('../controller/Sign_incontroller')
const course_contr=require('../controller/course_controller')

router.get('/course',course_contr.getall)
router.post('/signup',sign.insertstd)

module.exports=router