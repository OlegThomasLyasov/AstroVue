import type { App } from 'vue';
import { maska } from 'maska';

export default (app: App) => {
    app.directive('maska', maska);
}