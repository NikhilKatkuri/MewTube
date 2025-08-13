import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  return NextResponse.json({ message: 'Hello from app/api!' }, { status: 200 });
}

export async function POST(request: NextRequest) {
  const data = await request.json();
  return NextResponse.json({ received: data }, { status: 201 });
}
