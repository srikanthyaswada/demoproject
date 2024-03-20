const mongo = require('mongoose');

const userdata = new mongo.Schema({
    fullname:{
        type: String
    },
    mobileno:{
        type: String
    },
},
{ timestamps: true }
)

module.exports = mongo.model("user",userdata)