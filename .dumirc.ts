import { defineConfig } from 'dumi';

export default defineConfig({
  themeConfig: {
    name: 'Dumi',
    logo: '/logo.png',
    footer: '',
    styles: [`body { color: red; }`, `.dumi-default-header-right { justify-content: right; }`],
  },
});
