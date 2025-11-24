import { globby } from 'globby';

export default async function sitemap() {
  const baseUrl = 'https://posnod.com';

  const routes = await globby([
    'app/**/page.jsx',
    'app/**/page.js',
    '!app/**/(components)/**',
    '!app/**/api/**',
  ]);

  const urls = routes.map((route) => {
    let path = route
      .replace('app', '')
      .replace('/page.jsx', '')
      .replace('/page.js', '');

    if (path === '') path = '/';

    return {
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: path === '/' ? 1.0 : 0.8,
    };
  });

  return urls;
}
