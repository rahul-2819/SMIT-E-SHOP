const mongoose = require('mongoose')

const {Schema} = mongoose;

const UserSchema = new Schema({
    name:{
        type: String,
        reuired:true
    },
    number:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    confirmPassword:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
});

module.exports  = mongoose.model('user',UserSchema)