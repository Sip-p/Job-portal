import express from 'express'
import { applyForJob, getUserData, getUserJobApplications, updateUserResume } from '../controller/userController.js'
import multer from 'multer'
const upload=multer({dest:'uploads/'})
const router=express.Router()
// get user data
router.get('/user',getUserData)
//Apply for job
router.post('/apply',applyForJob)
//get applied jobs data
router.get('/applications',getUserJobApplications)
//update your profile
router.post('/update-resume',upload.single('resume'),updateUserResume)
export default  router;