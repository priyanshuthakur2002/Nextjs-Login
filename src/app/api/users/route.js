import { createUserWithAccount } from "@/utils/user";
import { NextResponse } from "next/server";

export const POST = async(req, res)=>{
    try{

        const {name, email, password} = await req.json();
        const newUser = await createUserWithAccount({
            name,
            email,
            password,
        });
        return NextResponse.json({
            message: "User created",
            data: {
                ...newUser
            }
        }, {status: 201})

    } catch (err){
        return NextResponse.json({
            message: "Error",
            err
        }, {status: 500});
    }
}