import fs from 'node:fs/promises';
import path from 'node:path';
import { STORAGE_DIRS, UploadType } from '@/lib/constants';

export async function ensureDir(dir: string) {
  await fs.mkdir(dir, { recursive: true });
}

export async function saveUploadedFile(file: File, type: UploadType, relPath?: string) {
  const dir = STORAGE_DIRS[type];
  await ensureDir(dir);
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const safeName = sanitizeFilename(file.name);
  const target = path.join(dir, relPath ?? '', safeName);
  await fs.mkdir(path.dirname(target), { recursive: true });
  await fs.writeFile(target, buffer);
  return target;
}

export function sanitizeFilename(name: string) {
  return name.replace(/[^a-zA-Z0-9._-]/g, '_');
}

export async function listFilesRecursive(dir: string) {
  const results: string[] = [];
  async function walk(current: string, rel: string) {
    const entries = await fs.readdir(current, { withFileTypes: true });
    for (const e of entries) {
      const p = path.join(current, e.name);
      const r = path.join(rel, e.name);
      if (e.isDirectory()) await walk(p, r);
      else results.push(r);
    }
  }
  try {
    await walk(dir, '');
  } catch (_) {
    // ignore missing dirs
  }
  return results;
}
