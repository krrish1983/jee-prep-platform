export function requireAdminCookie(req: Request): boolean {
  try {
    const cookie = req.headers.get('cookie') || '';
    return /(?:^|;\s*)admin=1(?:;|$)/.test(cookie);
  } catch {
    return false;
  }
}

export function getAdminKey(): string {
  return process.env.ADMIN_KEY || 'admin';
}
