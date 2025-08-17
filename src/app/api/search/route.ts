import { NextRequest, NextResponse } from 'next/server';

const VALID_API_KEY = process.env.API_KEY; // store your API key securely in .env

const fetchData = async (q: string, API_KEY: string) => {
  const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${q}&key=${API_KEY}`;
  const res = await fetch(url);
  return res.json();
};

export async function GET(request: NextRequest) {
  const apiKey = request.headers.get('x-api-key');

  if (!apiKey || apiKey !== VALID_API_KEY) {
    return NextResponse.json(
      { error: 'Unauthorized. Invalid or missing API key.' },
      { status: 401 },
    );
  }

  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q');
  if (!query) return NextResponse.json({ error: 'Missing query parameter.' }, { status: 400 });
  const key = process.env.GHOST_KEY?.toString();
  if (!key) return NextResponse.json({ error: 'Missing GHOST_KEY.' }, { status: 500 });
  const apiData = await fetchData(query, key);

  return NextResponse.json({ results: apiData.items }, { status: 200 });
}
