import { createUserWithAccount } from "@/utils/user";
import { NextResponse } from "next/server";

export const POST = async(req, res)=>{
    try{
        const {name, email, password} = await req.json();


        // Check if email already exists
        const existingUser = await prisma.user.findUnique({
            where: {
                email: email
            }
        });

        if (existingUser) {
            return NextResponse.json({ error: 'Email already exists' }, {status: 400});
        }

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