exports.ids = [6];
exports.modules = {

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(43);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("2e050991", content, true, context)
};

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Breadcrumb.vue?vue&type=template&id=6ff3c41c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{staticClass:"flex flex-wrap items-center font-medium text-gray-500"},[_vm._ssrNode("<ol class=\"flex flex-wrap items-center list-none pt-3 pb-3 pr-4 space-x-2 ml-4\" data-v-6ff3c41c>","</ol>",[_vm._ssrNode("<li data-v-6ff3c41c>","</li>",[_c('nuxt-link',{staticClass:"text-black hover:text-gray-500 hover:no-underline transition duration-150 ease-in-out",attrs:{"to":{ path: '/' }}},[_vm._v("\n        Home\n      ")])],1),_vm._ssrNode(" <li data-v-6ff3c41c><span class=\"text-gray-400\" data-v-6ff3c41c>/</span></li> "),_vm._l((_vm.crumbs),function(crumb,index){return _vm._ssrNode("<li data-v-6ff3c41c>","</li>",[_c('nuxt-link',{staticClass:"text-gray-600 hover:text-gray-700 hover:no-underline transition duration-150 ease-in-out",attrs:{"to":{ path: crumb.path }}},[_vm._v("\n        "+_vm._s(crumb.name)+"\n      ")]),_vm._ssrNode(" "+((index < _vm.crumbs.length - 1)?("<span class=\"text-gray-400\" data-v-6ff3c41c>/</span>"):"<!---->"))],2)})],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Breadcrumb.vue?vue&type=template&id=6ff3c41c&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Breadcrumb.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Breadcrumbvue_type_script_lang_js_ = ({
  props: {
    crumbs: {
      type: Array,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./components/Breadcrumb.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Breadcrumbvue_type_script_lang_js_ = (Breadcrumbvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Breadcrumb.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(42)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Breadcrumbvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6ff3c41c",
  "17d7c380"
  
)

/* harmony default export */ var Breadcrumb = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumb_vue_vue_type_style_index_0_id_6ff3c41c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumb_vue_vue_type_style_index_0_id_6ff3c41c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumb_vue_vue_type_style_index_0_id_6ff3c41c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumb_vue_vue_type_style_index_0_id_6ff3c41c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumb_vue_vue_type_style_index_0_id_6ff3c41c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumb_vue_vue_type_style_index_0_id_6ff3c41c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "nuxt-link[data-v-6ff3c41c]{text-decoration:none}nuxt-link[data-v-6ff3c41c]:hover{text-decoration:underline}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(70);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("69cc035e", content, true, context)
};

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/moko.104a29c.jpeg";

/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/christ.2f91743.jpeg";

/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/juldo.a2cced9.jpeg";

/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/sergetassiga.55f8cf5.jpg";

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_team_vue_vue_type_style_index_0_id_367b2bf4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_team_vue_vue_type_style_index_0_id_367b2bf4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_team_vue_vue_type_style_index_0_id_367b2bf4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_team_vue_vue_type_style_index_0_id_367b2bf4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_team_vue_vue_type_style_index_0_id_367b2bf4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_team_vue_vue_type_style_index_0_id_367b2bf4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".text-color[data-v-367b2bf4]{color:#070a52}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/team.vue?vue&type=template&id=367b2bf4&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"font-poppins"},[_vm._ssrNode("<div data-v-367b2bf4>","</div>",[_c('Breadcrumb',{attrs:{"crumbs":_vm.crumbs}})],1),_vm._ssrNode(" <section class=\"bg-gray-300 py-12\" data-v-367b2bf4><div class=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\" data-v-367b2bf4><div class=\"lg:text-center\" data-v-367b2bf4><p class=\"mt-2 text-3xl leading-8 font-extrabold tracking-tight text-color font-bold sm:text-4xl\" data-v-367b2bf4>\n          Notre Equipe\n        </p></div> <div class=\"mt-10\" data-v-367b2bf4><div class=\"mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4\" data-v-367b2bf4><div class=\"bg-white overflow-hidden shadow rounded-lg\" data-v-367b2bf4><div class=\"px-4 py-5 sm:p-6\" data-v-367b2bf4><img"+(_vm._ssrAttr("src",__webpack_require__(65)))+" alt class=\"mx-auto h-48 w-48 rounded-full\" data-v-367b2bf4> <h3 class=\"mt-6 text-center font-bold text-xl text-color\" data-v-367b2bf4>\n                Patrick Moko\n              </h3> <div class=\"mt-2 text-center text-sm leading-5 text-gray-600\" data-v-367b2bf4><p data-v-367b2bf4>Lead Developer</p> <p class=\"mt-1 text-black text-justify\" data-v-367b2bf4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> <div class=\"flex justify-center space-x-4\" data-v-367b2bf4><li data-v-367b2bf4><a href=\"https://twitter.com/STassiga\" target=\"_blank\" class=\"text-blue-600 hover:text-blue-400\" data-v-367b2bf4><svg width=\"20\" height=\"17\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\" data-v-367b2bf4><path d=\"M19.807 1.943a8.588 8.588 0 0 1-2.036 2.135 11.918 11.918 0 0 1-.465 3.854 12.085 12.085 0 0 1-1.452 3.177 12.426 12.426 0 0 1-2.318 2.691c-.897.78-1.978 1.402-3.243 1.867-1.265.464-2.618.697-4.06.697-2.27 0-4.348-.618-6.233-1.854.293.034.62.051.98.051 1.885 0 3.565-.588 5.04-1.764a3.915 3.915 0 0 1-2.363-.825 4.038 4.038 0 0 1-1.432-2.039c.276.043.532.064.766.064.36 0 .717-.047 1.068-.14A3.982 3.982 0 0 1 1.73 8.43c-.617-.754-.925-1.63-.925-2.627v-.051c.57.324 1.182.498 1.835.524a4.1 4.1 0 0 1-1.32-1.47 4.078 4.078 0 0 1-.49-1.969c0-.75.185-1.445.553-2.084a11.548 11.548 0 0 0 3.702 3.05 11.163 11.163 0 0 0 4.669 1.271c-.067-.324-.1-.639-.1-.946 0-1.142.395-2.116 1.187-2.92C11.632.402 12.589 0 13.712 0c1.173 0 2.161.435 2.966 1.304a7.878 7.878 0 0 0 2.576-.997 3.997 3.997 0 0 1-1.785 2.275 7.98 7.98 0 0 0 2.338-.639z\" fill-rule=\"nonzero\" data-v-367b2bf4></path></svg></a></li> <li data-v-367b2bf4><a href=\"https://www.instagram.com/__iamsergeo/\" target=\"_blank\" class=\"text-red hover:text-red-400\" data-v-367b2bf4><svg width=\"20\" height=\"20\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\" data-v-367b2bf4><path d=\"M10.002 4.872A5.12 5.12 0 0 0 4.876 10a5.12 5.12 0 0 0 5.126 5.128A5.12 5.12 0 0 0 15.13 10a5.12 5.12 0 0 0-5.127-5.128zm0 8.462A3.34 3.34 0 0 1 6.67 10a3.337 3.337 0 0 1 3.333-3.334A3.337 3.337 0 0 1 13.335 10a3.34 3.34 0 0 1-3.333 3.334zm6.532-8.671c0 .664-.535 1.196-1.195 1.196a1.196 1.196 0 1 1 1.196-1.196zm3.396 1.213c-.076-1.602-.442-3.02-1.615-4.19C17.145.516 15.727.15 14.125.07c-1.65-.093-6.6-.093-8.25 0-1.597.076-3.016.442-4.19 1.611C.512 2.851.151 4.27.07 5.871c-.093 1.652-.093 6.601 0 8.253.076 1.602.442 3.02 1.615 4.19 1.174 1.17 2.588 1.535 4.19 1.616 1.65.093 6.6.093 8.25 0 1.602-.076 3.02-.442 4.19-1.616 1.169-1.17 1.534-2.588 1.615-4.19.093-1.652.093-6.596 0-8.248zm-2.133 10.02a3.375 3.375 0 0 1-1.9 1.9c-1.317.523-4.44.402-5.895.402-1.454 0-4.582.116-5.894-.402a3.375 3.375 0 0 1-1.9-1.9c-.523-1.317-.402-4.441-.402-5.896s-.116-4.583.401-5.895a3.375 3.375 0 0 1 1.901-1.901c1.316-.523 4.44-.402 5.894-.402 1.455 0 4.582-.116 5.894.402a3.375 3.375 0 0 1 1.901 1.9c.522 1.317.402 4.441.402 5.896s.12 4.583-.402 5.895z\" fill-rule=\"nonzero\" data-v-367b2bf4></path></svg></a></li> <li data-v-367b2bf4><a href=\"https://www.linkedin.com/in/serge-anan-tassiga-759b6b190/\" target=\"_blank\" class=\"text-blue-600 hover:text-blue-400\" data-v-367b2bf4><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" class=\"text-white hover:text-gray-400\" data-v-367b2bf4><path d=\"M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z\" data-v-367b2bf4></path></svg></a></li></div></div></div></div> <div class=\"bg-white overflow-hidden shadow rounded-lg\" data-v-367b2bf4><div class=\"px-4 py-5 sm:p-6\" data-v-367b2bf4><img"+(_vm._ssrAttr("src",__webpack_require__(66)))+" alt class=\"mx-auto h-48 w-48 rounded-full\" data-v-367b2bf4> <h3 class=\"mt-6 text-center font-bold text-xl text-color\" data-v-367b2bf4>\n                Magnalet Christ\n              </h3> <div class=\"mt-2 text-center text-sm leading-5 text-gray-600\" data-v-367b2bf4><p data-v-367b2bf4>Co-Lead Developer</p> <p class=\"mt-1 text-black text-justify\" data-v-367b2bf4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> <div class=\"flex justify-center space-x-4\" data-v-367b2bf4><li data-v-367b2bf4><a href=\"https://twitter.com/STassiga\" target=\"_blank\" class=\"text-blue-600 hover:text-blue-400\" data-v-367b2bf4><svg width=\"20\" height=\"17\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\" data-v-367b2bf4><path d=\"M19.807 1.943a8.588 8.588 0 0 1-2.036 2.135 11.918 11.918 0 0 1-.465 3.854 12.085 12.085 0 0 1-1.452 3.177 12.426 12.426 0 0 1-2.318 2.691c-.897.78-1.978 1.402-3.243 1.867-1.265.464-2.618.697-4.06.697-2.27 0-4.348-.618-6.233-1.854.293.034.62.051.98.051 1.885 0 3.565-.588 5.04-1.764a3.915 3.915 0 0 1-2.363-.825 4.038 4.038 0 0 1-1.432-2.039c.276.043.532.064.766.064.36 0 .717-.047 1.068-.14A3.982 3.982 0 0 1 1.73 8.43c-.617-.754-.925-1.63-.925-2.627v-.051c.57.324 1.182.498 1.835.524a4.1 4.1 0 0 1-1.32-1.47 4.078 4.078 0 0 1-.49-1.969c0-.75.185-1.445.553-2.084a11.548 11.548 0 0 0 3.702 3.05 11.163 11.163 0 0 0 4.669 1.271c-.067-.324-.1-.639-.1-.946 0-1.142.395-2.116 1.187-2.92C11.632.402 12.589 0 13.712 0c1.173 0 2.161.435 2.966 1.304a7.878 7.878 0 0 0 2.576-.997 3.997 3.997 0 0 1-1.785 2.275 7.98 7.98 0 0 0 2.338-.639z\" fill-rule=\"nonzero\" data-v-367b2bf4></path></svg></a></li> <li data-v-367b2bf4><a href=\"https://www.instagram.com/__iamsergeo/\" target=\"_blank\" class=\"text-red hover:text-red-400\" data-v-367b2bf4><svg width=\"20\" height=\"20\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\" data-v-367b2bf4><path d=\"M10.002 4.872A5.12 5.12 0 0 0 4.876 10a5.12 5.12 0 0 0 5.126 5.128A5.12 5.12 0 0 0 15.13 10a5.12 5.12 0 0 0-5.127-5.128zm0 8.462A3.34 3.34 0 0 1 6.67 10a3.337 3.337 0 0 1 3.333-3.334A3.337 3.337 0 0 1 13.335 10a3.34 3.34 0 0 1-3.333 3.334zm6.532-8.671c0 .664-.535 1.196-1.195 1.196a1.196 1.196 0 1 1 1.196-1.196zm3.396 1.213c-.076-1.602-.442-3.02-1.615-4.19C17.145.516 15.727.15 14.125.07c-1.65-.093-6.6-.093-8.25 0-1.597.076-3.016.442-4.19 1.611C.512 2.851.151 4.27.07 5.871c-.093 1.652-.093 6.601 0 8.253.076 1.602.442 3.02 1.615 4.19 1.174 1.17 2.588 1.535 4.19 1.616 1.65.093 6.6.093 8.25 0 1.602-.076 3.02-.442 4.19-1.616 1.169-1.17 1.534-2.588 1.615-4.19.093-1.652.093-6.596 0-8.248zm-2.133 10.02a3.375 3.375 0 0 1-1.9 1.9c-1.317.523-4.44.402-5.895.402-1.454 0-4.582.116-5.894-.402a3.375 3.375 0 0 1-1.9-1.9c-.523-1.317-.402-4.441-.402-5.896s-.116-4.583.401-5.895a3.375 3.375 0 0 1 1.901-1.901c1.316-.523 4.44-.402 5.894-.402 1.455 0 4.582-.116 5.894.402a3.375 3.375 0 0 1 1.901 1.9c.522 1.317.402 4.441.402 5.896s.12 4.583-.402 5.895z\" fill-rule=\"nonzero\" data-v-367b2bf4></path></svg></a></li> <li data-v-367b2bf4><a href=\"https://www.linkedin.com/in/serge-anan-tassiga-759b6b190/\" target=\"_blank\" class=\"text-blue-600 hover:text-blue-400\" data-v-367b2bf4><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" class=\"text-white hover:text-gray-400\" data-v-367b2bf4><path d=\"M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z\" data-v-367b2bf4></path></svg></a></li></div></div></div></div> <div class=\"bg-white overflow-hidden shadow rounded-lg\" data-v-367b2bf4><div class=\"px-4 py-5 sm:p-6\" data-v-367b2bf4><img"+(_vm._ssrAttr("src",__webpack_require__(67)))+" alt class=\"mx-auto h-48 w-48 rounded-full\" data-v-367b2bf4> <h3 class=\"mt-6 text-center font-bold text-xl text-color\" data-v-367b2bf4>\n                Mapola Juldo\n              </h3> <div class=\"mt-2 text-center text-sm leading-5 text-gray-600\" data-v-367b2bf4><p data-v-367b2bf4>Backend Developer</p> <p class=\"mt-1 text-black text-justify\" data-v-367b2bf4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> <div class=\"flex justify-center space-x-4\" data-v-367b2bf4><li data-v-367b2bf4><a href=\"https://twitter.com/STassiga\" target=\"_blank\" class=\"text-blue-600 hover:text-blue-400\" data-v-367b2bf4><svg width=\"20\" height=\"17\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\" data-v-367b2bf4><path d=\"M19.807 1.943a8.588 8.588 0 0 1-2.036 2.135 11.918 11.918 0 0 1-.465 3.854 12.085 12.085 0 0 1-1.452 3.177 12.426 12.426 0 0 1-2.318 2.691c-.897.78-1.978 1.402-3.243 1.867-1.265.464-2.618.697-4.06.697-2.27 0-4.348-.618-6.233-1.854.293.034.62.051.98.051 1.885 0 3.565-.588 5.04-1.764a3.915 3.915 0 0 1-2.363-.825 4.038 4.038 0 0 1-1.432-2.039c.276.043.532.064.766.064.36 0 .717-.047 1.068-.14A3.982 3.982 0 0 1 1.73 8.43c-.617-.754-.925-1.63-.925-2.627v-.051c.57.324 1.182.498 1.835.524a4.1 4.1 0 0 1-1.32-1.47 4.078 4.078 0 0 1-.49-1.969c0-.75.185-1.445.553-2.084a11.548 11.548 0 0 0 3.702 3.05 11.163 11.163 0 0 0 4.669 1.271c-.067-.324-.1-.639-.1-.946 0-1.142.395-2.116 1.187-2.92C11.632.402 12.589 0 13.712 0c1.173 0 2.161.435 2.966 1.304a7.878 7.878 0 0 0 2.576-.997 3.997 3.997 0 0 1-1.785 2.275 7.98 7.98 0 0 0 2.338-.639z\" fill-rule=\"nonzero\" data-v-367b2bf4></path></svg></a></li> <li data-v-367b2bf4><a href=\"https://www.instagram.com/__iamsergeo/\" target=\"_blank\" class=\"text-red hover:text-red-400\" data-v-367b2bf4><svg width=\"20\" height=\"20\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\" data-v-367b2bf4><path d=\"M10.002 4.872A5.12 5.12 0 0 0 4.876 10a5.12 5.12 0 0 0 5.126 5.128A5.12 5.12 0 0 0 15.13 10a5.12 5.12 0 0 0-5.127-5.128zm0 8.462A3.34 3.34 0 0 1 6.67 10a3.337 3.337 0 0 1 3.333-3.334A3.337 3.337 0 0 1 13.335 10a3.34 3.34 0 0 1-3.333 3.334zm6.532-8.671c0 .664-.535 1.196-1.195 1.196a1.196 1.196 0 1 1 1.196-1.196zm3.396 1.213c-.076-1.602-.442-3.02-1.615-4.19C17.145.516 15.727.15 14.125.07c-1.65-.093-6.6-.093-8.25 0-1.597.076-3.016.442-4.19 1.611C.512 2.851.151 4.27.07 5.871c-.093 1.652-.093 6.601 0 8.253.076 1.602.442 3.02 1.615 4.19 1.174 1.17 2.588 1.535 4.19 1.616 1.65.093 6.6.093 8.25 0 1.602-.076 3.02-.442 4.19-1.616 1.169-1.17 1.534-2.588 1.615-4.19.093-1.652.093-6.596 0-8.248zm-2.133 10.02a3.375 3.375 0 0 1-1.9 1.9c-1.317.523-4.44.402-5.895.402-1.454 0-4.582.116-5.894-.402a3.375 3.375 0 0 1-1.9-1.9c-.523-1.317-.402-4.441-.402-5.896s-.116-4.583.401-5.895a3.375 3.375 0 0 1 1.901-1.901c1.316-.523 4.44-.402 5.894-.402 1.455 0 4.582-.116 5.894.402a3.375 3.375 0 0 1 1.901 1.9c.522 1.317.402 4.441.402 5.896s.12 4.583-.402 5.895z\" fill-rule=\"nonzero\" data-v-367b2bf4></path></svg></a></li> <li data-v-367b2bf4><a href=\"https://www.linkedin.com/in/serge-anan-tassiga-759b6b190/\" target=\"_blank\" class=\"text-white hover:text-gray-400\" data-v-367b2bf4><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" class=\"text-blue-600 hover:text-blue-400\" data-v-367b2bf4><path d=\"M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z\" data-v-367b2bf4></path></svg></a></li></div></div></div></div> <div class=\"bg-white overflow-hidden shadow rounded-lg\" data-v-367b2bf4><div class=\"px-4 py-5 sm:p-6\" data-v-367b2bf4><img"+(_vm._ssrAttr("src",__webpack_require__(68)))+" alt class=\"mx-auto h-48 w-48 rounded-full\" data-v-367b2bf4> <h3 class=\"mt-6 text-center font-bold text-xl text-color\" data-v-367b2bf4>\n                Serge Tassiga\n              </h3> <div class=\"mt-2 text-center text-sm leading-5 text-gray-600\" data-v-367b2bf4><p data-v-367b2bf4>Frontend Developer</p> <p class=\"mt-1 text-black text-justify\" data-v-367b2bf4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> <div class=\"flex justify-center space-x-4\" data-v-367b2bf4><li data-v-367b2bf4><a href=\"https://twitter.com/STassiga\" target=\"_blank\" class=\"text-blue-600 hover:text-blue-400\" data-v-367b2bf4><svg width=\"20\" height=\"17\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\" data-v-367b2bf4><path d=\"M19.807 1.943a8.588 8.588 0 0 1-2.036 2.135 11.918 11.918 0 0 1-.465 3.854 12.085 12.085 0 0 1-1.452 3.177 12.426 12.426 0 0 1-2.318 2.691c-.897.78-1.978 1.402-3.243 1.867-1.265.464-2.618.697-4.06.697-2.27 0-4.348-.618-6.233-1.854.293.034.62.051.98.051 1.885 0 3.565-.588 5.04-1.764a3.915 3.915 0 0 1-2.363-.825 4.038 4.038 0 0 1-1.432-2.039c.276.043.532.064.766.064.36 0 .717-.047 1.068-.14A3.982 3.982 0 0 1 1.73 8.43c-.617-.754-.925-1.63-.925-2.627v-.051c.57.324 1.182.498 1.835.524a4.1 4.1 0 0 1-1.32-1.47 4.078 4.078 0 0 1-.49-1.969c0-.75.185-1.445.553-2.084a11.548 11.548 0 0 0 3.702 3.05 11.163 11.163 0 0 0 4.669 1.271c-.067-.324-.1-.639-.1-.946 0-1.142.395-2.116 1.187-2.92C11.632.402 12.589 0 13.712 0c1.173 0 2.161.435 2.966 1.304a7.878 7.878 0 0 0 2.576-.997 3.997 3.997 0 0 1-1.785 2.275 7.98 7.98 0 0 0 2.338-.639z\" fill-rule=\"nonzero\" data-v-367b2bf4></path></svg></a></li> <li data-v-367b2bf4><a href=\"https://www.instagram.com/__iamsergeo/\" target=\"_blank\" class=\"text-red hover:text-red-400\" data-v-367b2bf4><svg width=\"20\" height=\"20\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\" data-v-367b2bf4><path d=\"M10.002 4.872A5.12 5.12 0 0 0 4.876 10a5.12 5.12 0 0 0 5.126 5.128A5.12 5.12 0 0 0 15.13 10a5.12 5.12 0 0 0-5.127-5.128zm0 8.462A3.34 3.34 0 0 1 6.67 10a3.337 3.337 0 0 1 3.333-3.334A3.337 3.337 0 0 1 13.335 10a3.34 3.34 0 0 1-3.333 3.334zm6.532-8.671c0 .664-.535 1.196-1.195 1.196a1.196 1.196 0 1 1 1.196-1.196zm3.396 1.213c-.076-1.602-.442-3.02-1.615-4.19C17.145.516 15.727.15 14.125.07c-1.65-.093-6.6-.093-8.25 0-1.597.076-3.016.442-4.19 1.611C.512 2.851.151 4.27.07 5.871c-.093 1.652-.093 6.601 0 8.253.076 1.602.442 3.02 1.615 4.19 1.174 1.17 2.588 1.535 4.19 1.616 1.65.093 6.6.093 8.25 0 1.602-.076 3.02-.442 4.19-1.616 1.169-1.17 1.534-2.588 1.615-4.19.093-1.652.093-6.596 0-8.248zm-2.133 10.02a3.375 3.375 0 0 1-1.9 1.9c-1.317.523-4.44.402-5.895.402-1.454 0-4.582.116-5.894-.402a3.375 3.375 0 0 1-1.9-1.9c-.523-1.317-.402-4.441-.402-5.896s-.116-4.583.401-5.895a3.375 3.375 0 0 1 1.901-1.901c1.316-.523 4.44-.402 5.894-.402 1.455 0 4.582-.116 5.894.402a3.375 3.375 0 0 1 1.901 1.9c.522 1.317.402 4.441.402 5.896s.12 4.583-.402 5.895z\" fill-rule=\"nonzero\" data-v-367b2bf4></path></svg></a></li> <li data-v-367b2bf4><a href=\"https://www.linkedin.com/in/serge-anan-tassiga-759b6b190/\" target=\"_blank\" class=\"text-blue-600 hover:text-blue-400\" data-v-367b2bf4><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" class=\"text-white hover:text-gray-400\" data-v-367b2bf4><path d=\"M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z\" data-v-367b2bf4></path></svg></a></li></div></div></div></div></div></div></div></section>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/team.vue?vue&type=template&id=367b2bf4&scoped=true&

// EXTERNAL MODULE: ./components/Breadcrumb.vue + 4 modules
var Breadcrumb = __webpack_require__(41);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/team.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var teamvue_type_script_lang_js_ = ({
  components: {
    Breadcrumb: Breadcrumb["default"]
  },

  data() {
    return {
      title: 'Notre Equipe Page',
      crumbs: [{
        name: 'Notre Equipe',
        path: '/team'
      }]
    };
  },

  computed: {}
});
// CONCATENATED MODULE: ./pages/team.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_teamvue_type_script_lang_js_ = (teamvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/team.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(69)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_teamvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "367b2bf4",
  "add36218"
  
)

/* harmony default export */ var team = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Breadcrumb: __webpack_require__(41).default})


/***/ })

};;
//# sourceMappingURL=team.js.map