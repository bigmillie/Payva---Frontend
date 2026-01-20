import nodemailer from "nodemailer";

interface EmailOptions {
  to: string;
  firstName?: string; // optional
}

export async function sendWelcomeEmail({ to, firstName }: EmailOptions) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASSWORD,
    },
  });

  const subject = "You're on the list! 🎉";

  // Conditional greeting
  const greeting = firstName ? `Hello ${firstName},` : "Welcome aboard!";

  // HTML content based on your template
  const html = `
    <div style="font-family: sans-serif; line-height: 1.5; color: #1F2937; padding: 20px;">
      <img src="https://www.payvapayment.com/logo.svg" alt="Payva Logo" style="width: 120px; padding-bottom: 30px;"/>
      <img src="https://www.payvapayment.com/waitlist-welcome-illustration.svg" alt="Welcome Illustration" style="width: 100%; max-width: 400px; padding-bottom: 30px;"/>
      <h2 style="color: #006D68;">${greeting}</h2>
      <p>We're so glad you're here.</p>
      <p>
        By joining our waitlist, you've just secured your spot to be among the first to experience Payva — 
        a smarter, simpler way to handle your money, no matter where life takes you.
      </p>
      <br />
      <p>
        We know managing finances across borders can feel complicated and disconnected. 
        We're changing that. Payva is being built to make your money work as seamlessly as you do — 
        whether you're sending funds home, paying bills across countries, or just keeping everything organised in one place.
      </p>
      <br />
      <p>
        Here's what happens next:<br/>
        You'll get early access when we launch, plus exclusive updates and perks along the way. 
        Think sneak peeks at new features, special offers, and maybe a few surprises we're keeping under wraps for now.
      </p>
      <br />
      <p>We're building something we think you'll love, and we're excited to have you with us from the start.</p>
      <p>Stay tuned — good things are coming.</p>
      <br/>
      <p>Our warmest regards,<br/>Team Payva</p>
      <p style="font-style: italic; color: #6B7280;">Payments that feel like home, wherever you are</p>
    </div>
  `;

  await transporter.sendMail({
    from: `"Payva" <${process.env.GMAIL_USER}>`,
    to,
    subject,
    html,
  });
}
