import { DBcon } from "@/app/lib/dbconnection"
import { DoctorModel } from "@/app/lib/model/doctorModel"
import mongoose from "mongoose"
import { NextRequest, NextResponse } from "next/server"

 export const GET =async(req,context)=>{

    await mongoose.connect(DBcon)
const {doctorid} = context.params

    const data = await DoctorModel.findOne({_id:doctorid})

    return NextResponse.json(data)
}

export const PUT =async(payload,context)=>{
    const {doctorid} = context.params
    await mongoose.connect(DBcon)
    const newdata = await payload.json();
    const data = await DoctorModel.findOneAndUpdate({_id:doctorid},newdata);

    
    return NextResponse.json(data);
}

export const DELETE =async(req,context)=>{
    const {doctorid} = context.params
    await mongoose.connect(DBcon)
    const data = await DoctorModel.findOneAndDelete({_id:doctorid})
    return NextResponse.json(data);
}