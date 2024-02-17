"use client"
import { useSession } from "next-auth/react";

export default function Home() {
  const {data: session, status} = useSession();
  if(status !== "authenticated"){
    return <div>You are not signed in...</div>;
  }
  
  return (
    <div>
      <h1>Welcome, {session.user.name}</h1>
      <p>Email: {session.user.email}</p>
    </div>
  );
}
