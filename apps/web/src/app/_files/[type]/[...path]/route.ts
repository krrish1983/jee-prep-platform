export const runtime = 'nodejs';

import { NextRequest } from 'next/server';
import path from 'node:path';
import fs from 'node:fs/promises';
import { STORAGE_DIRS, type UploadType } from '@/lib/constants';

function contentTypeFor(ext: string) {
  switch (ext.toLowerCase()) {
    case '.pdf': return 'application/pdf';
    case '.png': return 'image/png';
    case '.jpg':
    case '.jpeg': return 'image/jpeg';
    case '.webp': return 'image/webp';
    default: return 'application/octet-stream';
  }
}

export async function GET(req: NextRequest, ctx: { params: { type: UploadType, path: string[] } }) {
  const { type, path: relParts } = ctx.params as { type: UploadType, path: string[] };
  if (!STORAGE_DIRS[type]) return new Response('Not Found', { status: 404 });
  const target = path.join(STORAGE_DIRS[type], ...relParts);
  try {
    const data = await fs.readFile(target);
    const ct = contentTypeFor(path.extname(target));
    return new Response(data, { headers: { 'Content-Type': ct } });
  } catch {
    return new Response('Not Found', { status: 404 });
  }
}
