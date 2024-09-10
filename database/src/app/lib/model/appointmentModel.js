const { default: mongoose } = require("mongoose");

const appmodel = new mongoose.Schema({

    Patient_id:{
        type:mongoose.Schema.ObjectId,
        ref:'patients'
    },
    Title : String,
    Description : String,
    Doctor:String,
    Mydate : String,
    StartTime: String,
    EndTime: String,
    Type: String,
    createdAt:{
        type:Date,
        default:Date.now
    }
});

export const AppointModel = mongoose.models.appointments || mongoose.model("appointments",appmodel);