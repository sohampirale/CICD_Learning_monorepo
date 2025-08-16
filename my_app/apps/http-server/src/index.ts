import express from "express";
import { client } from "@repo/db/client"

const app = express();

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({
        message:'Hello World! at route /'
    })
})

app.get('/http', (req, res) => {
    res.status(200).json({
        message:'Hello World2! at route /http'
    })
})


app.post('/signup',async (req,res)=>{
    const {username,password} = req.body;
    
    try {

        const user =await client.user.create({
            data:{
                username,
                password
            }
        })
    
        res.status(201).json({
            message:'Signup sucessfull',
            user
        })
        
    } catch (error) {
        res.status(400).json({
            message:'Failed to signup',
            error
        })
    }
})

app.listen(3002, () => {
    console.log('Server is running on http://localhost:3000');
})
