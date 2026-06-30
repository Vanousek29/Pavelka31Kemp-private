import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Aplikuj na všechny cesty kromě API, interních Next assetů a souborů s příponou
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
