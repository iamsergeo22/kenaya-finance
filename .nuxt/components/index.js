export { default as Slider } from '../../components/Slider.vue'
export { default as ThemeSwitcher } from '../../components/ThemeSwitcher.vue'

export const LazySlider = import('../../components/Slider.vue' /* webpackChunkName: "components/Slider" */).then(c => c.default || c)
export const LazyThemeSwitcher = import('../../components/ThemeSwitcher.vue' /* webpackChunkName: "components/ThemeSwitcher" */).then(c => c.default || c)
