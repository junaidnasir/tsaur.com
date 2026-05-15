export default function middleware(request) {
  const url = new URL(request.url);
  
  if (url.hostname === 'chalk.tsaur.com' && (url.pathname === '/' || url.pathname === '')) {
    url.pathname = '/chalk/index.html';
    return fetch(url.toString(), {
      headers: request.headers,
      method: request.method,
    });
  }
}

export const config = {
  matcher: '/',
};
