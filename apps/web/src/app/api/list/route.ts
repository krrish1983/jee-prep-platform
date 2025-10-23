export const runtime = 'nodejs';

import { NextResponse } from 'next/server';
import { STORAGE_DIRS, type UploadType } from '@/lib/constants';
import { listFilesRecursive } from '@/lib/fs';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const type = (searchParams.get('type') || 'lecture-notes') as UploadType;
  const dir = STORAGE_DIRS[type];
  const files = await listFilesRecursive(dir);
  return NextResponse.json({ type, files });
}
