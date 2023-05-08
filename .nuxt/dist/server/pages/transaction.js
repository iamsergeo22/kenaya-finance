exports.ids = [7];
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

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/transaction.vue?vue&type=template&id=73c93c4b&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"font-poppins"},[_vm._ssrNode("<div class=\"relative w-full h-full p-24\"><img src=\"https://img.freepik.com/premium-photo/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner_1258-105129.jpg?size=626&ext=jpg\" alt=\"Banner Image\" class=\"absolute top-0 left-0 w-full h-full object-cover\"> <div class=\"relative w-full h-full flex flex-col justify-center items-center h-full bg-opacity-60\"><h1 class=\"lg:text-4xl sm:text-3xl font-bold text-white\">Transactions</h1></div></div> "),_vm._ssrNode("<div>","</div>",[_c('Breadcrumb',{attrs:{"crumbs":_vm.crumbs}})],1),_vm._ssrNode(" <div class=\"mx-auto mt-3 pt-4 bg-gray-300\"><iframe src=\"https://docs.google.com/forms/d/e/1FAIpQLSfISEwN6tyzKh0VxEEXpc1zk-AV7GMmAGwrCsGA9-65y_GfSA/viewform?embedded=true\" width=\"100%\" height=\"950\" frameborder=\"0\" marginheight=\"0\" marginwidth=\"0\">Loading…</iframe></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/transaction.vue?vue&type=template&id=73c93c4b&

// EXTERNAL MODULE: ./components/Breadcrumb.vue + 4 modules
var Breadcrumb = __webpack_require__(41);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/transaction.vue?vue&type=script&lang=js&
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

/* harmony default export */ var transactionvue_type_script_lang_js_ = ({
  components: {
    Breadcrumb: Breadcrumb["default"]
  },

  data() {
    return {
      title: 'Transactions Page',
      crumbs: [{
        name: 'Transactions',
        path: '/transaction'
      }]
    };
  },

  computed: {}
});
// CONCATENATED MODULE: ./pages/transaction.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_transactionvue_type_script_lang_js_ = (transactionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/transaction.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_transactionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "67665917"
  
)

/* harmony default export */ var transaction = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Breadcrumb: __webpack_require__(41).default})


/***/ })

};;
//# sourceMappingURL=transaction.js.map