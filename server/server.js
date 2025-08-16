import './config/instrument.js'
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/db.js';
import {clerkWebhooks} from './controller/webhook.js' 
// Initialise Express
const app=express();
dotenv.config({path:'./utils/.env'})
//connect to database
await connectDB();

//Middlewares
app.use(cors())
app.use(express.json())

//Routes
app.get('/',(req,res)=>{
   res.send('Working')
})
app.post('/webhooks',clerkWebhooks)
//port
const PORT=process.env.PORT|| 5000
 app.listen(PORT,()=>{
    console.log(`App is listening at port ${PORT}`)
})

// export default app;
