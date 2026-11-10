import type { APIRoute } from 'astro';
import { posts, site } from '../data/site';
const routes = ['/', '/a-escola', '/proposta-pedagogica', '/rotina-e-cuidados', '/estrutura-e-espacos', '/bercario', '/maternal', '/pre-escola', '/matriculas', '/agendar-visita', '/contato', '/duvidas-frequentes', '/privacidade', '/termos-de-uso'];
export const GET: APIRoute = () => {
  const urls = [...routes, ...posts.filter((post) => post.status === 'published').map((post) => `/blog/${post.slug}`)]
    .map((route) => `<url><loc>${site.url}${route}</loc></url>`).join('');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
