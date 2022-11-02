import {createApp, h} from 'vue';
import {createInertiaApp} from '@inertiajs/inertia-vue3';
import '../scss/main.scss';

const pages = import.meta.glob('./pages/**/*.vue');
createInertiaApp({
    resolve: async name => {
        return (await pages[`./pages/${name}.vue`]()).default
    },
    setup({el, App, props, plugin}) {
        const app = createApp({render: () => h(App, props)})
        app.use(plugin)
        app.mount(el)
    },
})