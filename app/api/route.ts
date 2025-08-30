// import { NextResponse } from 'next/server';

export async function GET(request: string) {
  console.log(request);
  return new Response("Hallelujah! I'm a fullstack!");
  // return NextResponse.json({message: "Hallelujah! I'm a fullstack!"});
}
