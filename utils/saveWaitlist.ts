import { google } from "googleapis";

// 📝 Interface for waitlist data
interface WaitlistData {
  name?: string;
  email: string;
}

// 💾 Save waitlist to Google Sheets
export async function saveWaitlistToSheet(waitlistData: WaitlistData) {
  const sheetId = process.env.GOOGLE_SHEET_ID!;
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL!;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY!.replace(/\\n/g, "\n");

  const auth = new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"], // Note: WRITE permission
  });

  const sheets = google.sheets({ version: "v4", auth });

  // Prepare the row data
  const row = [waitlistData.name, waitlistData.email];

  try {
    // Append the order to the Orders sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: "Waitlist!A:B", // Adjust range based on your columns
      valueInputOption: "RAW",
      requestBody: {
        values: [row],
      },
    });

    // console.log(`${waitlistData.name} saved to sheet successfully`);
    return { success: true };
  } catch (error) {
    console.error("Error saving order to sheet:", error);
    throw error;
  }
}
