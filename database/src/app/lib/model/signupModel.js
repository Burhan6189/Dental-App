import mongoose from "mongoose";
import mongooseUniqueValidator from "mongoose-unique-validator";

const myModel = new mongoose.Schema({
        
    Email: { type: String, index: true, unique: true, required: true },
    Password: String,
    FirstName: String,
    LastName: String,
    Phone: Number,
    Role: {
        type: String,
        default: 'Client'
    },
    CreatedAt: {
        type: Date,
        default: Date.now
    }
});

myModel.plugin(mongooseUniqueValidator);
export const snupModel = mongoose.models.Signup || mongoose.model('Signup', myModel); 
