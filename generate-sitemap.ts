// generate-sitemap.ts

import {writeFileSync} from 'fs';
import {DEPLOY_CONFIG} from './src/deploy.config.ts';

const XML_BASE_URL = DEPLOY_CONFIG.baseSitemap;
const host = DEPLOY_CONFIG.host;

const routes = [
    '/',
    '/projets/',
    '/projet/gemeny-app',
    '/projet/gemeny-auth',
    '/projet/portfolio',
];

const urls = routes.map(
    (route) => `
    <url>
        <loc>${XML_BASE_URL}${route}</loc>
    </url>`
).join('');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

writeFileSync('./dist/sitemap.xml', sitemap);
console.log('Sitemap generated! for ', host);
