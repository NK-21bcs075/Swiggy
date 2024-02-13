const mongoose=require('mongoose')
//Schema field has to be declared to connect the database
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required :true
    },
    password:{
        type:String,
        required :true
    },
    email:{
        type:String,
        required :true,
        unique:true
    }
})


//Creating model
const Users=mongoose.model('userDetails',userSchema)
//exporting model
module.exports={Users}