import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import router from './routes/users.js'

import mongoose from 'mongoose'

import homeRoute from './routes/home.js'
import dotenv from 'dotenv'
dotenv.config()
const app = express()

mongoose
.connect(process.env.MONGO_URL)
.then(()=>{
    console.log('database connected');
})
.catch((err)=>{
    console.log(`oops not connected ${err}`)
})

app.use(bodyParser.json({limit: '50mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}))

  
app.use('/',homeRoute)
app.use('/users', router)



const port= process.env.PORT 


app.use(cors())

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`)
})