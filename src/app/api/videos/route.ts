import { NextRequest, NextResponse } from 'next/server';
import { feeddata } from './videoData';

const VALID_API_KEY = process.env.API_KEY; // store your API key securely in .env

export async function GET(request: NextRequest) {
  const apiKey = request.headers.get('x-api-key'); // expect API key in headers

  if (!apiKey || apiKey !== VALID_API_KEY) {
    return NextResponse.json(
      { error: 'Unauthorized. Invalid or missing API key.' },
      { status: 401 },
    );
  }

  const data = {
    Data: feeddata,
  };

  return NextResponse.json(data, { status: 200 });
}
