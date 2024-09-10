import { DBcon } from "@/app/lib/dbconnection"
import { DoctorModel } from "@/app/lib/model/doctorModel"
import mongoose from "mongoose"
import { NextRequest, NextResponse } from "next/server"

 export const GET =async()=>{

    await mongoose.connect(DBcon)

    const data = await DoctorModel.find();

    return NextResponse.json(data)
}

export const POST =async(payload)=>{

    await mongoose.connect(DBcon)
    const newdata = await payload.json();
    const data = new DoctorModel(newdata);
    const savedata = await data.save();
    
    return NextResponse.json(savedata);
}