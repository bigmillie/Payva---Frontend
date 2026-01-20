import { saveWaitlistToSheet } from "@/utils/saveWaitlist";
import { sendWelcomeEmail } from "@/utils/sendEmail";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    await saveWaitlistToSheet({ name, email });

    // Send welcome email
    await sendWelcomeEmail({ to: email, firstName: name });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error saving waitlist:", error);
    return NextResponse.json(
      { error: "Failed to save waitlist" },
      { status: 500 },
    );
  }
}
