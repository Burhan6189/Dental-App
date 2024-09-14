const { default: mongoose } = require("mongoose");

const appoint  = mongoose.Schema({

    DoctorName:String,
    PatientName:String,
    Email:String,
    Phone:String,
    Date:String,
    Time:String,
    Treatment:String,
    Treatment_Desc:String,
    Image:String

})

export const AppointmentModel = mongoose.models.appoints || mongoose.model('appoints', appoint);