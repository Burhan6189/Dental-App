import { DBcon } from "@/app/lib/dbconnection"
import { AppointmentModel } from "@/app/lib/model/appointModel";
import mongoose from "mongoose"
import { NextResponse } from "next/server"

export const GET = async()=>{

    await mongoose.connect(DBcon);
    const data = await AppointmentModel.find();

    return NextResponse.json(data)

}

export const POST = async(payload)=>{

    await mongoose.connect(DBcon);

    const contentdata = await payload.json();

    const data = new AppointmentModel(contentdata);
    const saveddata = await data.save();
    return NextResponse.json(saveddata)

}