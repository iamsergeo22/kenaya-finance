export { default as Agences } from '../../components/Agences.vue'
export { default as Banner } from '../../components/Banner.vue'
export { default as Breadcrumb } from '../../components/Breadcrumb.vue'
export { default as Slider } from '../../components/Slider.vue'
export { default as ThemeSwitcher } from '../../components/ThemeSwitcher.vue'

export const LazyAgences = import('../../components/Agences.vue' /* webpackChunkName: "components/Agences" */).then(c => c.default || c)
export const LazyBanner = import('../../components/Banner.vue' /* webpackChunkName: "components/Banner" */).then(c => c.default || c)
export const LazyBreadcrumb = import('../../components/Breadcrumb.vue' /* webpackChunkName: "components/Breadcrumb" */).then(c => c.default || c)
export const LazySlider = import('../../components/Slider.vue' /* webpackChunkName: "components/Slider" */).then(c => c.default || c)
export const LazyThemeSwitcher = import('../../components/ThemeSwitcher.vue' /* webpackChunkName: "components/ThemeSwitcher" */).then(c => c.default || c)
