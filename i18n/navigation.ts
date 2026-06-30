import { createNavigation } from 'next-intl/navigation';
import { routing } from './routing';

// Locale-aware náhrady za next/link a next/navigation.
// Zachovávají aktuální jazyk a správně přidávají/odebírají prefix /en.
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
