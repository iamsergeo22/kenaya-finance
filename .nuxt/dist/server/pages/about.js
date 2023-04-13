exports.ids = [1];
exports.modules = {

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/DIAPO3.b4490d6.jpg";

/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/DIAPOAIRTEL.fb5614c.jpg";

/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/post6.292feb8.jpg";

/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(54);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("e810a50c", content, true, context)
};

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(40);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(55);
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, ".bg-hero{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-color:rgba(0,0,0,.50588);background-size:cover}.text-color{color:#070a52}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/back-image.2500f79.jpg";

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/about.vue?vue&type=template&id=46d8e996&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bg-gray-200"},[_vm._ssrNode("<h2 class=\"text-3xl text-color font-bold uppercase text-center mb-2 mt-8\">A Propos</h2> <div class=\"mx-auto\"><div class=\"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 p-8\"><div class=\"bg-white rounded-lg shadow-lg p-6\"><h2 class=\"text-xl font-semibold mb-4 text-justify text-color text-2xl\">Notre Histoire</h2> <p class=\"text-black mb-4 text-xl text-justify\">\n\n          KENAYA FINANCES est une société d'intermédiation financière fondée à Brazzaville le 19 mars 2019. Nous\n          travaillons en partenariat avec plusieurs institutions financières pour proposer une gamme diversifiée de\n          produits financiers à nos clients.\n\n        </p> <p class=\"text-black mb-4 text-xl text-justify\">\n          Parmi ces produits, nous commercialisons notamment des services de transfert d'argent tels que MONEY GRAM et\n          RIA, des abonnements à CANAL+, des cartes prépayées UBA et PRESF, ainsi que des services de paiement mobile\n          tels que MOBILE MONEY et AIRTEL MONEY\n\n        </p></div> <div><img"+(_vm._ssrAttr("src",__webpack_require__(41)))+" alt=\"Image\" class=\"w-full rounded-lg shadow-lg\"></div></div> <div class=\"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 mt-12 bg-blue-800 p-8\"><div><img"+(_vm._ssrAttr("src",__webpack_require__(42)))+" alt=\"Image\" class=\"w-full rounded-lg shadow-lg\"></div> <div class=\"bg-white rounded-lg shadow-lg pt-8 p-6\"><h2 class=\"text-xl font-semibold mb-4 pt-8 text-color text-2xl\">Notre Mission et Valeurs</h2> <p class=\"text-black mb-4 text-xl text-justify\">\n\n\n          Our mission is to provide fast, reliable, and secure money transfer services to our clients, while\n          delivering exceptional customer service and support. <br>\n\n          We are guided by the following core values: <br>\n\n          Integrity\n          Professionalism\n          Accountability\n          Innovation\n\n\n        </p></div></div> <div class=\"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 mt-8 p-8\"><div class=\"bg-white rounded-lg shadow-lg p-6 pt-8\"><h2 class=\"text-xl font-semibold mb-4 pt-8 text-color text-2xl\">Notre Services</h2> <p class=\"text-black mb-4 text-xl text-justify\">\n          We offer a range of money transfer services to suit the needs of our clients, including:\n\n          Domestic money transfers\n          International money transfers\n          Online money transfers\n          Mobile money transfers\n          Bill payments\n          Our services are fast, reliable, and secure, and we use the latest technology to ensure that your money is\n          transferred quickly and safely.\n\n\n        </p></div> <div><img"+(_vm._ssrAttr("src",__webpack_require__(43)))+" alt=\"Image\" class=\"w-full rounded-lg shadow-lg\"></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/about.vue?vue&type=template&id=46d8e996&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/about.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var aboutvue_type_script_lang_js_ = ({// Add any necessary script here
});
// CONCATENATED MODULE: ./pages/about.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_aboutvue_type_script_lang_js_ = (aboutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/about.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(53)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_aboutvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "36f38706"
  
)

/* harmony default export */ var about = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=about.js.map