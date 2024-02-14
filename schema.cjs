const mongoose = require('mongoose')

const RestaurantSchema = new mongoose.Schema({
    name:{
        type:String
    },
    res_info:
    {   type:Number

    },
    cuisines:{
        type:Array
    },
    area:{
        type:String
    },
    imageLink:{
        type:String
    }

})

//Creating model
const Restaurants=mongoose.model('RestaurantSchema',RestaurantSchema)


const UserSchema = new mongoose.Schema({
    name:{
        type:String
    },
    contact:
    {   type:Number

    },
    email:{
        type:String
    },
    place:{
        type:String
    }

})
const Users=mongoose.model('Userlist',UserSchema)
//exporting model
module.exports={Users,Restaurants}