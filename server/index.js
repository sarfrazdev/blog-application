import express from 'express'
import { connectDb } from './db/db.js'
import dotenv from 'dotenv'
import router from './Routes/userRoutes.js'

import storyRouter from './Routes/storyRoutes.js'



dotenv.config()

const app=express()
const port=process.env.PORT

app.use(express.json())
connectDb()


app.use("/upload",
    express.static("upload")
)

app.use('/api/v1/auth', router)
app.use('/api/v1/story',storyRouter)

app.listen(port, ()=>{
    console.log(`Server is running on port : ${port}`);
})