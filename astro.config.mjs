import { defineConfig } from 'astro/config';

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  site: isGitHubPages ? 'https://gabrielwork4-hub.github.io' : 'https://www.opequenogalileu.com',
  base: isGitHubPages ? '/pequenogalileu' : '/',
  output: 'static',
  trailingSlash: 'never',
});
