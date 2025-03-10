import pool from "@/lib/db";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, username, role, phone_number, password } =
      await request.json();
    console.log({ name, email, username, role, phone_number, password });
    const hashedPassword = await hash(password, 10);
    const response = await pool.query(
      "INSERT INTO users (name, email, username, role, phone_number, password) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [name, email, username, role, phone_number, hashedPassword]
    );
    console.log("your response is: ", response);
    return NextResponse.json({ success: true, user: response.rows[0] });
  } catch (error) {
    console.log({ error });
    return NextResponse.json({ success: false, error });
  }
}

// import { NextResponse } from "next/server";

// export async function POST(request: Request) {
//   try {
//     const { email, username, password } = await request.json();
//     console.log({ email, username, password });
//   } catch (error) {
//     console.log({ error });
//   }
//   return NextResponse.json({ message: "your api is working successfully!" });
// }
