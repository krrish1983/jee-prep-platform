export const runtime = 'nodejs';

import { NextResponse } from 'next/server';
import path from 'node:path';
import fs from 'node:fs/promises';
import crypto from 'node:crypto';
import { STORAGE_ROOT, STORAGE_DIRS } from '@/lib/constants';
import type { TestDef, TestKind } from '@/lib/types';

function slugify(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

async function readTests(): Promise<TestDef[]> {
  const dir = path.join(STORAGE_ROOT, 'tests');
  try {
    const names = await fs.readdir(dir);
    const list: TestDef[] = [];
    for (const n of names) {
      if (!n.endsWith('.json')) continue;
      const t = JSON.parse(await fs.readFile(path.join(dir, n), 'utf-8')) as TestDef;
      list.push(t);
    }
    return list;
  } catch {
    return [];
  }
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');
  const kind = searchParams.get('kind') as TestKind | null;
  const list = await readTests();
  if (id) {
    const t = list.find((x) => x.id === id);
    if (!t) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    return NextResponse.json(t);
  }
  const filtered = kind ? list.filter((x) => x.kind === kind) : list;
  return NextResponse.json({ items: filtered });
}

import { requireAdminCookie } from '@/lib/auth';

export async function POST(req: Request) {
  if (!requireAdminCookie(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const body = (await req.json()) as { name: string; kind: TestKind; questionFiles: string[] };
  if (!body?.name || !body?.kind || !Array.isArray(body.questionFiles)) {
    return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
  }
  const id = `${slugify(body.name)}-${crypto.randomBytes(3).toString('hex')}`;
  const test: TestDef = {
    id,
    name: body.name,
    kind: body.kind,
    createdAt: new Date().toISOString(),
    questionFiles: body.questionFiles,
  };
  const dir = path.join(STORAGE_ROOT, 'tests');
  await fs.mkdir(dir, { recursive: true });
  await fs.writeFile(path.join(dir, `${id}.json`), JSON.stringify(test, null, 2), 'utf-8');
  return NextResponse.json(test, { status: 201 });
}
