import { defineConfig } from 'vite';
import { glob } from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';
import SortCss from 'postcss-sort-media-queries';
export default defineConfig({
  // ÖNEMLİ: Buradaki repo-adi kısmını GitHub'daki klasör isminle değiştir!
  // Örneğin: base: '/goit-js-hw-09/'
  base: '/repo-adi/', 
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
  // global hatasını önlemek için (Gerekirse)
  define: {
    global: 'window',
  },
});
