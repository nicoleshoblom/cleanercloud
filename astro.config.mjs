import { defineConfig } from 'astro/config';

const isCustomDomain = process.env.CUSTOM_DOMAIN === 'true';

export default defineConfig({
  output: 'static',
  base: isCustomDomain ? '/' : '/cleanercloud/',
  site: isCustomDomain
    ? 'https://www.cleanercloudsolutions.com'
    : 'https://nicoleshoblom.github.io/cleanercloud/',
  trailingSlash: 'always',
});