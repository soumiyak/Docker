const express=require('express')
const router=express.Router()
const count_contr=require('../controller/count_controller')
const course_contr=require('../controller/course_controller')
router.post('/course',course_contr.insertcourse)
router.delete('/course/:courseId',course_contr.deleteone)
router.post('/ADMcount',count_contr.insertOne)


module.exports=router