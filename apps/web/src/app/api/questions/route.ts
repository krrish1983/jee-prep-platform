export const runtime = 'nodejs';

import { NextResponse } from 'next/server';
import path from 'node:path';
import fs from 'node:fs/promises';
import { STORAGE_DIRS } from '@/lib/constants';
import type { QuestionMeta, Exam, Difficulty, QType } from '@/lib/types';

function matches(meta: QuestionMeta, q: URLSearchParams) {
  const eq = (k: string, v?: string | null) => !v || (meta as any)[k] === v;
  return (
    eq('chapter', q.get('chapter')) &&
    eq('exam', q.get('exam')) &&
    eq('difficulty', q.get('difficulty')) &&
    eq('type', q.get('type'))
  );
}

export async function GET(req: Request) {
  const dir = STORAGE_DIRS['questions'];
  let items: { file: string; meta?: QuestionMeta }[] = [];
  try {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    for (const e of entries) {
      if (!e.isFile()) continue;
      if (e.name.endsWith('.json')) {
        const json = JSON.parse(await fs.readFile(path.join(dir, e.name), 'utf-8')) as QuestionMeta;
        const stem = e.name.replace(/\.json$/, '');
        items.push({ file: stem, meta: json });
      } else {
        const stem = e.name;
        const maybeMetaPath = path.join(dir, `${stem}.json`);
        try {
          const json = JSON.parse(await fs.readFile(maybeMetaPath, 'utf-8')) as QuestionMeta;
          items.push({ file: stem, meta: json });
        } catch {
          items.push({ file: stem });
        }
      }
    }
  } catch {
    // ignore
  }

  const { searchParams } = new URL(req.url);
  const filtered = items.filter((it) => (it.meta ? matches(it.meta, searchParams) : true));
  return NextResponse.json({ count: filtered.length, items: filtered });
}
