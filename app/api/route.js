import { ConnectDB } from "@/lib/config/db";
import TodoModel from "@/lib/models/TodoModel";
import { NextResponse } from "next/server";

// Immediately connect to the database when the module is loaded
ConnectDB();

export async function GET(request) {

    const todos = await TodoModel.find({})
  return NextResponse.json({ todos:todos });
}

export async function POST(request) {
  try {
    // Parse the JSON body of the request
    const { title, description } = await request.json();

    // Create a new Todo item in the database
    await TodoModel.create({
      title,
      description,
    });

    return NextResponse.json({ msg: "Todo Created" });
  } catch (error) {
    console.error("Error creating todo:", error);
    return NextResponse.json({ error: "Error creating todo" }, { status: 500 });
  }
}


export async function DELETE(request) {
   
    const mongoId = await request.nextUrl.searchParams.get('mongoId')

    await TodoModel.findByIdAndDelete(mongoId)

      return NextResponse.json({ msg: "Todo Deleted" });
    } 

export async function PUT(request) {
   
        const mongoId = await request.nextUrl.searchParams.get('mongoId')
    
        await TodoModel.findByIdAndUpdate(mongoId, {
            $set: {
                isCompleted:true
            }
        })
    
          return NextResponse.json({ msg: "Todo Completed" });
        } 
  