import mongoose from 'mongoose';
import { NextRequest, NextResponse } from "next/server";
import Events from '@/models/Event'
import dbConnect from '@/lib/mongo/index'

export async function GET(req: Request) {
    console.log("geteventsbycategory GET request")
    try {
        await dbConnect();
        const dbTest = await Events.find({})
        console.log("thedb test",dbTest);
        return NextResponse.json({ success: true });
    } catch (err) {
        console.log("Eventtest err", err)
        return NextResponse.json({ success: false })
    }
}



