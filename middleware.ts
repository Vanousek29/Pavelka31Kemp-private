import { NextResponse, type NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

// Povolená je jen domovská stránka, všechno ostatní přesměruje na /
const ALLOWED = ['/', '/en'];

export default function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname.replace(/\/$/, '') || '/';
  if (!ALLOWED.includes(path)) {
    return NextResponse.redirect(new URL('/', req.url));
  }
  return intlMiddleware(req);
}

export const config = {
  // Aplikuj na všechny cesty kromě API, interních Next assetů a souborů s příponou
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
