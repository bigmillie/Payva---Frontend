import { NextResponse } from "next/server";

const RATES_API_URL = "http://138.68.140.11:8087/api/v1/rates/all";

interface RateRecord {
  source: string;
  destination: string;
  buyingRate: number;
  sellingRate: number;
}

interface RatesApiResponse {
  success: boolean;
  code: string;
  message: string;
  data: RateRecord[];
}

export async function GET() {
  try {
    const response = await fetch(RATES_API_URL, {
      cache: "no-store",
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch exchange rates" },
        { status: response.status },
      );
    }

    const payload = (await response.json()) as RatesApiResponse;

    return NextResponse.json(payload, {
      headers: {
        "Cache-Control": "no-store, no-cache, must-revalidate",
      },
    });
  } catch (error) {
    console.error("Rates API error:", error);

    return NextResponse.json(
      { error: "Unable to fetch exchange rates" },
      { status: 500 },
    );
  }
}
