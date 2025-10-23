export const runtime = 'nodejs';

import { NextResponse } from 'next/server';
import { getAdminKey } from '@/lib/auth';

export async function POST(req: Request) {
  const { key } = await req.json();
  if (!key || key !== getAdminKey()) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }
  const res = NextResponse.json({ ok: true });
  res.headers.append('Set-Cookie', 'admin=1; Path=/; HttpOnly; SameSite=Lax; Max-Age=86400');
  return res;
}
