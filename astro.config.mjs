import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
function importStylus() {
    return {
        name: 'vite-stylus-import-plugin',
        async transform(code, id) {
            if (/.stylus$/g.test(id)) {
                return {
                    code: `
                @import "${path.resolve(__dirname, 'src/styles/variables.styl')}"
                @import "${path.resolve(__dirname, 'src/styles/mixins.styl')}"
                @import "${path.resolve(__dirname, 'src/styles/fonts.styl')}"
                ${code}
            `,
                    map: null,
                }
            }
            return null
        }
    }
}
// https://astro.build/config
export default defineConfig({
    integrations: [vue({
        appEntrypoint: '/src/pages/_app'
    })],
    vite: {
        plugins: [
            {
                ...importStylus(),
                enforce: 'pre',
            }
        ]
    }
});