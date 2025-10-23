export const runtime = 'nodejs';

import { NextResponse } from 'next/server';
import path from 'node:path';
import fs from 'node:fs/promises';
import { STORAGE_DIRS, type UploadType } from '@/lib/constants';
import { saveUploadedFile, sanitizeFilename } from '@/lib/fs';
import type { QuestionMeta } from '@/lib/types';

export async function POST(req: Request) {
  const { searchParams } = new URL(req.url);
  const type = (searchParams.get('type') || 'lecture-notes') as UploadType;
  const form = await req.formData();
  const file = form.get('file');
  if (!(file instanceof File)) {
    return NextResponse.json({ error: 'Missing file' }, { status: 400 });
  }

  // Optional metadata for questions
  const metaRaw = form.get('meta');
  let meta: Partial<QuestionMeta> | undefined;
  if (typeof metaRaw === 'string') {
    try { meta = JSON.parse(metaRaw); } catch {}
  }

  const savedPath = await saveUploadedFile(file, type);

  if (type === 'questions') {
    // Save sidecar metadata JSON if provided
    const metaObj: QuestionMeta = {
      chapter: meta?.chapter || 'General',
      topic: meta?.topic,
      exam: (meta?.exam as QuestionMeta['exam']) || 'JEE Mains',
      difficulty: (meta?.difficulty as QuestionMeta['difficulty']) || 'Medium',
      type: (meta?.type as QuestionMeta['type']) || 'Single',
      sourceFile: path.basename(savedPath),
      createdAt: new Date().toISOString(),
    };
    const metaName = sanitizeFilename(path.basename(savedPath) + '.json');
    const metaPath = path.join(STORAGE_DIRS['questions'], metaName);
    await fs.writeFile(metaPath, JSON.stringify(metaObj, null, 2), 'utf-8');
  }

  return NextResponse.json({ ok: true });
}
