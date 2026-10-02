import type { APIRoute } from 'astro';
import { posts, site } from '../data/site';
export const GET: APIRoute = () => {
  const items = posts.map((post) => `<item><title><![CDATA[${post.title}]]></title><link>${site.url}/blog/${post.slug}</link><description><![CDATA[${post.excerpt}]]></description><pubDate>${new Date(post.published).toUTCString()}</pubDate></item>`).join('');
  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>${site.name}</title><link>${site.url}</link><description>Conteúdos sobre primeira infância.</description>${items}</channel></rss>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
};
