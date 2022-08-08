import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
const app = express()

const PORT = process.env.PORT || 8000

import cors from 'cors'
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

import paymentRouter from './routers/paymentRouter.js'
app.use('/api/payment',paymentRouter)

app.listen(PORT,(error)=>{
    error && console.log(error)
    console.log(`Server is running on PORT:${PORT}`)
})
