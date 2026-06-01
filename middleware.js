export default function middleware(request) {
  const url = new URL(request.url);

  if (url.hostname === 'chalk.tsaur.com') {
    return Response.redirect(`https://chalk.11i.sh${url.pathname}${url.search}`, 308);
  }

  if (url.hostname === 'atlora.11i.sh' && (url.pathname === '/' || url.pathname === '')) {
    url.pathname = '/atlora/index.html';
    return fetch(url.toString(), {
      headers: request.headers,
      method: request.method,
    });
  }
}

export const config = {
  matcher: '/:path*',
};
