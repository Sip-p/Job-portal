import './config/instrument.js'
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/db.js';
import {clerkWebhooks} from './controller/webhook.js' 
import companyRoutes from './routes/companyRoutes.js'
import jobRoutes from './routes/jobRoutes.js'
import userRoutes from './routes/userRoutes.js'
import connectCloudinary from './config/cloudinary.js';
import {clerkMiddleware} from '@clerk/express'
// Initialise Express
const app=express();
dotenv.config({path:'./utils/.env'})
//connect to database
await connectDB();
await connectCloudinary();
//Middlewares
app.use(cors())
app.use(express.json())
app.use(clerkMiddleware())

app.use(express.urlencoded())
//Routes
app.get('/',(req,res)=>{
   res.send('Working')
})
app.post('/webhooks',clerkWebhooks)
//port

app.use('/api/company',companyRoutes)
app.use('/api/jobs',jobRoutes)
app.use('/api/users',userRoutes)
const PORT=process.env.PORT|| 5000
 app.listen(PORT,()=>{
    console.log(`App is listening at port ${PORT}`)
})

// export default app;
