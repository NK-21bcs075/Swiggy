//Importing packages
const express = require ('express')
const bodyParser=require('body-parser')
const mongoose =require('mongoose')
const{Users} =require('./schema.cjs')
const app=express()
app.use(bodyParser.json())

async function connectToDb() {
    try {
        await mongoose.connect('mongodb+srv://nithinakilaraj:0202@cluster0.bjnrk90.mongodb.net/?retryWrites=true&w=majority')

        console.log('Connection Established ;)')
        const port = 8000
        app.listen(port, function() {
            console.log(`Listening on port ${port}...`)
        })
    } catch(error) {
        console.log(error)
        console.log('Couldn\'t Establish connection :(')
    }
}

connectToDb()

 app.post('/create-new-user',async(request,response)=>{
    try{    await Users.create({
            "username":request.body.username,
            "password":request.body.password,
            "email":request.body.email
            })
            response.status(201).json({
                "status":"success",
                "message":"User created"
            })
       }

    catch(error)
    {
        response.status(500).json({
            "status":"Error occoured",
            "message":"Internal error occured"
            
        })

    }     
    //console.log(req.body)
   
})

app.post('/Validate-user',async function(request,response){
    try{//Store that user in the user
        const user=await Users.findOne({
            "email":request.body.email,
            "password":request.body.password
        })
        if (Users){
            response.status(200).json({
                "message":"Valid user"
            })
        }
        else{
            response.status(401).json({
                "message":"Requested user is not valid"
            })
        }
    }
    catch(error)
    {
        response.status(500).json({
            "status":"Error occured",
            "message":"Internal error occured"
            
        })

    }
})