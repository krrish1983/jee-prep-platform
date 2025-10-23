import path from 'node:path';

export const APP_SECTIONS = [
  { href: '/', label: 'Home' },
  { href: '/prepare', label: 'Prepare & Practice' },
  { href: '/notes', label: 'Lecture Notes' },
  { href: '/mind-maps', label: 'Mind Map' },
  { href: '/dpps', label: 'DPPs' },
  { href: '/question-bank', label: 'Question Bank' },
  { href: '/tests/grand', label: 'Grand Tests' },
  { href: '/tests/topicwise', label: 'Topicwise Tests' },
  { href: '/live-tests', label: 'Live Tests' },
  { href: '/admin', label: 'Admin' }
] as const;

export type UploadType = 'lecture-notes' | 'mind-maps' | 'questions' | 'dpps';

export const STORAGE_ROOT = path.resolve(process.cwd(), '..', '..', 'storage');

export const STORAGE_DIRS: Record<UploadType, string> = {
  'lecture-notes': path.join(STORAGE_ROOT, 'lecture-notes'),
  'mind-maps': path.join(STORAGE_ROOT, 'mind-maps'),
  'questions': path.join(STORAGE_ROOT, 'questions'),
  'dpps': path.join(STORAGE_ROOT, 'dpps')
};
