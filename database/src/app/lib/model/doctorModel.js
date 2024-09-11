const { default: mongoose } = require("mongoose");

const doctormodel = mongoose.Schema({
    Image:String,
    Name:String,
    Desigination:String,
    Location:String,
    Department:String,
    Description:String
})


export const DoctorModel = mongoose.models.doctors || mongoose.model('doctors',doctormodel);