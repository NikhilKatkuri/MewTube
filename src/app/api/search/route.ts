import { NextRequest, NextResponse } from 'next/server';

const VALID_API_KEY = process.env.API_KEY;

const fetchData = async (q: string) => {
  const keys = [
    process.env.GHOST_KEY_1,
    process.env.GHOST_KEY_2,
    process.env.GHOST_KEY_3,
    process.env.GHOST_KEY_4,
  ];

  const dynamic = async (API_KEY: string) => {
    const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${q}&key=${API_KEY}`;
    const res = await fetch(url);
    return res;
  };
  let finalRes;
  for (const key of keys) {
    if (key === undefined) return;
    const res = await dynamic(key);
    finalRes = res.json();
    if (res.status !== 403) break;
  }
  return finalRes;
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
  const apiData = await fetchData(query);

  return NextResponse.json({ results: apiData.items }, { status: 200 });
}
