const { default: mongoose } = require("mongoose");

const doctormodel = mongoose.Schema({
    Image:String,
    Name:String,
    Desigination:String,
    Location:String,
    Department:String,
    Description:String,
    Reviews:[{
        Name:String,
        Rating:String,
        Message:String,
        Email:String,
        Avatar:String,
        Status:{type:String, default:'Pending'},
        createdAt :{
            type:Date,
            default:Date.now
        }
    }]

})


export const DoctorModel = mongoose.models.doctors || mongoose.model('doctors',doctormodel);