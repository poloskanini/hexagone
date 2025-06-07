import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

export function middleware(request) {
  const { pathname } = request.nextUrl

  // Ne rien faire si déjà une locale
  if (pathname.startsWith('/fr') || pathname.startsWith('/en')) return

  // Sinon rediriger vers /fr
  return NextResponse.redirect(new URL('/fr', request.url))
}

export const config = {
  matcher: ['/((?!_next|favicon.ico).*)'],
}
