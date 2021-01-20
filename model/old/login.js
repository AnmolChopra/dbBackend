let mongoose = require('mongoose');

module.exports = mongoose.model('oldLogin',{
    name:{
        type:String
    },
    mobile:{
        type:Number
    },
    id:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    changePass:{
        type:Boolean,
        'default':true
    }
})