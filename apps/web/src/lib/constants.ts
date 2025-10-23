import path from 'node:path';

export const APP_SECTIONS = [
  { href: '/', label: 'Home' },
  { href: '/prepare', label: 'Prepare & Practice' },
  { href: '/olympiad', label: 'Olympiad' },
  { href: '/notes', label: 'Lecture Notes' },
  { href: '/mind-maps', label: 'Mind Map' },
  { href: '/admin', label: 'Admin' }
] as const;

export type UploadType = 'lecture-notes' | 'mind-maps' | 'questions';

export const STORAGE_ROOT = path.resolve(process.cwd(), '..', '..', 'storage');

export const STORAGE_DIRS: Record<UploadType, string> = {
  'lecture-notes': path.join(STORAGE_ROOT, 'lecture-notes'),
  'mind-maps': path.join(STORAGE_ROOT, 'mind-maps'),
  'questions': path.join(STORAGE_ROOT, 'questions')
};
