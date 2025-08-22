import bcrypt, { genSalt } from 'bcrypt'
import {v2 as cloudinary} from 'cloudinary'
import Company from '../models/Company.js'
import generateToken from '../utils/generateToken.js'
import Job from '../models/Job.js'

//REGISTER A COMPANY
export const registerCompany=async(req,res)=>{
const {name,email,password}=req.body
const imageFile=req.file
if(!name || !email ||!password ||!imageFile){
    return res.json({success:false,message:"Missing Details"})
}
try {
    const companyExists=await Company.findOne({email})
    if(companyExists){
        return res.json({success:false,message:'Company already exists'})
    }
const salt=await bcrypt.genSalt(10)
const hashedPassword=await bcrypt.hash(password,salt)
const imageUpload=await cloudinary.uploader.upload(imageFile.path)
const company=await Company.create({
    name,email,password:hashedPassword,image:imageUpload.secure_url
})
res.json({success:true,company:{_id:company._id,name:company.name,email:company.email,image:company.image},
token:generateToken(company._id)
})
} catch (error) {
  console.log(error.message)
    res.json({success:false,message:error.message})
}
 
}


//login a company
export const loginCompany = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.json({ success: false, message: "Fill the credentials" });
    }

    const company = await Company.findOne({ email });
    if (!company) {
      return res.json({ success: false, message: "Company not found" });
    }

    const isMatch = await bcrypt.compare(password, company.password);
    if (!isMatch) {
      return res.json({ success: false, message: "Wrong email or password" });
    }

    const token = generateToken(company._id);

    return res.json({
      success: true,
      company: {
        _id: company._id,
        name: company.name,
        email: company.email,
        image: company.image,
      },
      token,
    });
  } catch (error) {
    console.error("Login error:", error);  // 👈 log the real reason
    return res.json({ success: false, message: error.message });
  }
};


//to get company data
export const getCompanyData=async(req,res)=>{
 
try {
  const company=req.company
res.json({success:true,company})  
} catch (error) {
    res.json({success:false,message:error.message})
}
}
//post a new job
export const postJob=async(req,res)=>{
const {title,description,location,salary,level,category}=req.body
const companyId=req.company._id
console.log(companyId)
try {
    const newJob=new Job({
        title,description,location,salary,level,companyId:companyId,date:Date.now(),category
    })
    await newJob.save();
    return res.json({success:true,newJob})
} catch (error) {
   return res.json({success:false,message:error.message})
}
 }

//GET COMPANY APPLICANTS
export const getCompanyJobApplicants=async(req,res)=>{
 
}

//GET COMPANY POSTED JOBS
export const getCompanyPostedJobs=async(req,res)=>{
try {
    const companyId=req.company._id
    const jobs=await Job.find({companyId})
    //(TO DO)ADDING NO. OF APPLICANTS INFO IN DATA

    res.json({success:true,jobsData:jobs})
} catch (error) {
    res.json({success:false,message:error.message})
}
}

// CHANGE JOB APPLICATIONS STATUS-Accept and Reject
export const ChangeJobApplicationStatus=async(req,res)=>{

}

// change job visibility
export const changeVisibility=async(req,res)=>{
  try {
    const {id}=req.body
    console.log(req.body)
    const companyId=req.company._id
    console.log(companyId)
    const job=await Job.findById(id)
    if(companyId.toString()===job.companyId.toString()){
      job.visible=!job.visible
    }
    await job.save()
    res.json({success:true,job})
  } catch (error) {
    res.json({success:false,message:error.message})
  }
}

