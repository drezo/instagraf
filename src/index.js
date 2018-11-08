const instagram = require('./lib/instagram');

(async () => {
  const response = await instagram.getCsrf();
  const { body, headers } = response;
  const { status } = body;
  if (status === 'ok') {
    const [rcCookies] = headers['set-cookie'];
    const [csrfCookie] = rcCookies.split(';');
    const [, csrf] = csrfCookie.split('=');
    console.log('csrf', csrf);
  }
})();
