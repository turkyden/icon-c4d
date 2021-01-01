import { defineConfig } from 'dumi';

// https://cdn.jsdelivr.net/gh/turkyden/icon-c4d/logo.svg

export default defineConfig({
  title: 'IconC4D',
  favicon: 'https://turkyden.com/img/logo.svg',
  logo: 'https://turkyden.com/img/logo.svg',
  outputPath: '../../build',
  publicPath: process.env.NODE_ENV === 'production' ? 'https://cdn.jsdelivr.net/gh/turkyden/icon-c4d@gh-pages/' : '/',
  theme: {
    '@c-primary': '#ff6a00',
  },
  // more config: https://d.umijs.org/config
});
