exports.ids = [4];
exports.modules = {

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/DIAPO3.b4490d6.jpg";

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/DIAPOAIRTEL.fb5614c.jpg";

/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/post6.292feb8.jpg";

/***/ }),

/***/ 44:
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

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(69);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("6a44457d", content, true, context)
};

/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(71);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("5470d6ca", content, true, context)
};

/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/DIAPO2.150222b.jpg";

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Agences.vue?vue&type=template&id=c710f902&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bg-color rounded pb-4"},[_vm._ssrNode("<h2 class=\"text-4xl text-blue-800 font-bold text-center pt-4\" data-v-c710f902>Nos Agences</h2> <div class=\"grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 pt-4\" data-v-c710f902><div class=\"flex flex-col  items-center space-y-2\" data-v-c710f902><svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" class=\"h-6 w-6 text-red-600\" data-v-c710f902><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z\" data-v-c710f902></path> <circle cx=\"12\" cy=\"10\" r=\"3\" data-v-c710f902></circle></svg> <p class=\"text-black font-bold\" data-v-c710f902>123 Main Street, Anytown USA</p></div> <div class=\"flex flex-col  items-center space-y-2\" data-v-c710f902><svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" class=\"h-6 w-6 text-red-600\" data-v-c710f902><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z\" data-v-c710f902></path> <circle cx=\"12\" cy=\"10\" r=\"3\" data-v-c710f902></circle></svg> <p class=\"text-black font-bold\" data-v-c710f902>123 Main Street, Anytown USA</p></div> <div class=\"flex flex-col  items-center space-y-2\" data-v-c710f902><svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" class=\"h-6 w-6 text-red-600\" data-v-c710f902><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z\" data-v-c710f902></path> <circle cx=\"12\" cy=\"10\" r=\"3\" data-v-c710f902></circle></svg> <p class=\"text-black font-bold\" data-v-c710f902>123 Main Street, Anytown USA</p></div> <div class=\"flex flex-col  items-center space-y-2\" data-v-c710f902><svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" class=\"h-6 w-6 text-red-600\" data-v-c710f902><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z\" data-v-c710f902></path> <circle cx=\"12\" cy=\"10\" r=\"3\" data-v-c710f902></circle></svg> <p class=\"text-black font-bold\" data-v-c710f902>123 Main Street, Anytown USA</p></div></div> <div class=\"col-span-4 sm:col-span-4 md:col-span-4 lg:col-span-4 xl:col-span-4 mt-4\" data-v-c710f902><div class=\"grid grid-cols-1 md:grid-cols-4 gap-4 bg-color\""+(_vm._ssrStyle(null,null, { display: (_vm.showMore) ? '' : 'none' }))+" data-v-c710f902><div class=\"flex flex-col  items-center space-y-2\" data-v-c710f902><svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" class=\"h-6 w-6 text-red-600\" data-v-c710f902><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z\" data-v-c710f902></path> <circle cx=\"12\" cy=\"10\" r=\"3\" data-v-c710f902></circle></svg> <p class=\"text-black font-bold\" data-v-c710f902>123 Main Street, Anytown USA</p></div> <div class=\"flex flex-col  items-center space-y-2\" data-v-c710f902><svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" class=\"h-6 w-6 text-red-600\" data-v-c710f902><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z\" data-v-c710f902></path> <circle cx=\"12\" cy=\"10\" r=\"3\" data-v-c710f902></circle></svg> <p class=\"text-black font-bold\" data-v-c710f902>123 Main Street, Anytown USA</p></div> <div class=\"flex flex-col  items-center space-y-2\" data-v-c710f902><svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" class=\"h-6 w-6 text-red-600\" data-v-c710f902><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z\" data-v-c710f902></path> <circle cx=\"12\" cy=\"10\" r=\"3\" data-v-c710f902></circle></svg> <p class=\"text-black font-bold\" data-v-c710f902>123 Main Street, Anytown USA</p></div> <div class=\"flex flex-col  items-center space-y-2\" data-v-c710f902><svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" class=\"h-6 w-6 text-red-600\" data-v-c710f902><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z\" data-v-c710f902></path> <circle cx=\"12\" cy=\"10\" r=\"3\" data-v-c710f902></circle></svg> <p class=\"text-black font-bold\" data-v-c710f902>123 Main Street, Anytown USA</p></div></div></div> <h2 class=\"text-xl text-blue-800 cursor-pointer mt-2 font-bold text-center flex gap-2 justify-center\" data-v-c710f902>\n        Voir Plus\n        <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" class=\"h-6 w-6\""+(_vm._ssrStyle(null,null, { display: (!_vm.showMore) ? '' : 'none' }))+" data-v-c710f902><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M19 9l-7 7-7-7\" data-v-c710f902></path></svg> <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" class=\"h-6 w-6\""+(_vm._ssrStyle(null,null, { display: (_vm.showMore) ? '' : 'none' }))+" data-v-c710f902><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M5 15l7-7 7 7\" data-v-c710f902></path></svg></h2>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Agences.vue?vue&type=template&id=c710f902&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Agences.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Agencesvue_type_script_lang_js_ = ({
  data() {
    return {
      showMore: false
    };
  }

});
// CONCATENATED MODULE: ./components/Agences.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Agencesvue_type_script_lang_js_ = (Agencesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Agences.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(68)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Agencesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "c710f902",
  "33ee9935"
  
)

/* harmony default export */ var Agences = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/diplomate.7145ab6.jpg";

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/MGI__NEW_LOGO_v1.4343dc5.jpg";

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/ria-money-transfer.2034bf2.jpg";

/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/canal.cd69cd1.jpg";

/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/visa.596d41e.jpg";

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Agences_vue_vue_type_style_index_0_id_c710f902_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Agences_vue_vue_type_style_index_0_id_c710f902_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Agences_vue_vue_type_style_index_0_id_c710f902_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Agences_vue_vue_type_style_index_0_id_c710f902_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Agences_vue_vue_type_style_index_0_id_c710f902_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Agences_vue_vue_type_style_index_0_id_c710f902_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".bg-color[data-v-c710f902]{background-color:#ccd5ae}.button[data-v-c710f902]:hover{background-color:#b4e41c}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_55ad9a2f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_55ad9a2f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_55ad9a2f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_55ad9a2f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_55ad9a2f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_55ad9a2f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(44);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(52);
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, ".bg-hero[data-v-55ad9a2f]{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-size:cover}i[data-v-55ad9a2f]{font-size:1.5rem}.button[data-v-55ad9a2f]:hover{background-color:#b4e41c}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/DIAPOCANAL.1546b2a.jpg";

/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/DIAPOMONEGRAM.7c52636.jpg";

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Slider.vue?vue&type=template&id=4fa5b14c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{},[_c('b-carousel',{attrs:{"id":"carousel-1","interval":2000,"controls":"","indicators":""},on:{"sliding-start":_vm.onSlideStart,"sliding-end":_vm.onSlideEnd}},[_c('b-carousel-slide',{attrs:{"img-src":__webpack_require__(52)}}),_vm._v(" "),_c('b-carousel-slide',{attrs:{"img-src":__webpack_require__(40)}}),_vm._v(" "),_c('b-carousel-slide',{attrs:{"img-src":__webpack_require__(41)}}),_vm._v(" "),_c('b-carousel-slide',{attrs:{"img-src":__webpack_require__(72)}}),_vm._v(" "),_c('b-carousel-slide',{attrs:{"img-src":__webpack_require__(73)}}),_vm._v(" "),_c('b-carousel-slide',{scopedSlots:_vm._u([{key:"img",fn:function(){return [_c('img',{attrs:{"src":__webpack_require__(42),"alt":"image slot"}})]},proxy:true}])})],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Slider.vue?vue&type=template&id=4fa5b14c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Slider.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Slidervue_type_script_lang_js_ = ({
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },

  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },

    onSlideEnd(slide) {
      this.sliding = false;
    }

  }
});
// CONCATENATED MODULE: ./components/Slider.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Slidervue_type_script_lang_js_ = (Slidervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Slider.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Slidervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "8107bac4"
  
)

/* harmony default export */ var Slider = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=55ad9a2f&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"scrollable-container"},[_vm._ssrNode("<div data-v-55ad9a2f>","</div>",[_vm._ssrNode("<div data-v-55ad9a2f>","</div>",[_c('Slider')],1)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"mx-auto flex flex-col px-8 sm:flex-row justify-between py-16 gap-8\" data-v-55ad9a2f>","</div>",[_vm._ssrNode("<div class=\"sm:text-left items-center\" data-v-55ad9a2f>","</div>",[_vm._ssrNode("<div class=\"lg:pt-8\" data-v-55ad9a2f>","</div>",[_vm._ssrNode("<h2 class=\"text-4xl text-blue-800 font-bold pb-2\" data-v-55ad9a2f>A Propos de Nous</h2> <p class=\"mb-4 text-xl sm:w-full text-justify lg:w-3/4\" data-v-55ad9a2f>\n\n          Nous sommes une Société de transfert de fonds et bureau de change.\n          Notre mission est de fournir un service de transfert d'argent rapide, fiable et abordable à nos clients, en\n          leur offrant une expérience transparente et sécurisée. Notre objectif est de simplifier les transferts\n          d'argent pour nos clients, en leur offrant une solution pratique et facile à utiliser, peu importe où ils se\n          trouvent dans le monde.\n\n        </p> "),_vm._ssrNode("<div class=\"mt-4\" data-v-55ad9a2f>","</div>",[_c('nuxt-link',{staticClass:"bg-blue-900 button hover:no-underline hover:text-white shadow-2xl rounded-lg px-4 py-3 text-white text-xl font-bold transition-colors duration-300",attrs:{"to":"/transaction"}},[_vm._v("\n            Lancer une transaction\n          ")])],1)],2)]),_vm._ssrNode(" <div data-v-55ad9a2f><img"+(_vm._ssrAttr("src",__webpack_require__(63)))+" alt=\"Image\" class=\"w-full rounded-lg shadow-lg\" data-v-55ad9a2f></div>")],2),_vm._ssrNode(" <h2 class=\"text-4xl text-blue-800 font-bold text-center\" data-v-55ad9a2f>Nos Produits</h2> "),_vm._ssrNode("<div class=\"grid grid-cols-1 md:grid-cols-4 gap-4 p-8\" data-v-55ad9a2f>","</div>",[_vm._ssrNode("<div class=\"border rounded shadow-md hover:shadow-lg transition duration-300\" data-v-55ad9a2f>","</div>",[_vm._ssrNode("<img"+(_vm._ssrAttr("src",__webpack_require__(64)))+" alt class=\"rounded-lg shadow-lg\" data-v-55ad9a2f> <div class=\"p-4\" data-v-55ad9a2f><h2 class=\"font-bold text-3xl text-blue-800\" data-v-55ad9a2f>MoneyGram</h2> <p class=\"mt-2 text-justify\" data-v-55ad9a2f>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in justo nec eros ultricies\n        </p></div> "),_vm._ssrNode("<div class=\"p-4\" data-v-55ad9a2f>","</div>",[_c('nuxt-link',{staticClass:"bg-blue-900 hover:no-underline py-3 button text-white font-bold py-2 px-3 rounded-lg",attrs:{"to":"/transaction"}},[_vm._v("Lancer votre demande")])],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"border rounded shadow-md hover:shadow-lg transition duration-300\" data-v-55ad9a2f>","</div>",[_vm._ssrNode("<img"+(_vm._ssrAttr("src",__webpack_require__(65)))+" alt class=\"rounded-lg shadow-lg\" data-v-55ad9a2f> <div class=\"p-4\" data-v-55ad9a2f><h2 class=\"font-bold text-3xl text-blue-800\" data-v-55ad9a2f>Ria</h2> <p class=\"mt-2 text-justify\" data-v-55ad9a2f>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in justo nec eros ultricies\n        </p></div> "),_vm._ssrNode("<div class=\"p-4\" data-v-55ad9a2f>","</div>",[_c('nuxt-link',{staticClass:"bg-blue-900 hover:no-underline py-3 button text-white font-bold py-2 px-3 rounded-lg",attrs:{"to":"/transaction"}},[_vm._v("Lancer votre demande")])],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"border rounded shadow-md hover:shadow-lg transition duration-300\" data-v-55ad9a2f>","</div>",[_vm._ssrNode("<img"+(_vm._ssrAttr("src",__webpack_require__(66)))+" alt class=\"rounded-lg shadow-lg\" data-v-55ad9a2f> <div class=\"p-4\" data-v-55ad9a2f><h2 class=\"font-bold text-3xl text-blue-800\" data-v-55ad9a2f>Canal +</h2> <p class=\"mt-2 text-justify\" data-v-55ad9a2f>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in justo nec eros ultricies\n        </p></div> "),_vm._ssrNode("<div class=\"p-4\" data-v-55ad9a2f>","</div>",[_c('nuxt-link',{staticClass:"bg-blue-900 hover:no-underline py-3 button text-white font-bold py-2 px-3 rounded-lg",attrs:{"to":"/transaction"}},[_vm._v("Lancer votre demande")])],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"border rounded shadow-md hover:shadow-lg transition duration-300\" data-v-55ad9a2f>","</div>",[_vm._ssrNode("<img"+(_vm._ssrAttr("src",__webpack_require__(67)))+" alt class=\"rounded-lg shadow-lg\" data-v-55ad9a2f> <div class=\"p-4\" data-v-55ad9a2f><h2 class=\"font-bold text-3xl text-blue-800\" data-v-55ad9a2f>Visa</h2> <p class=\"mt-2 text-justify\" data-v-55ad9a2f>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in justo nec eros ultricies\n        </p></div> "),_vm._ssrNode("<div class=\"p-4\" data-v-55ad9a2f>","</div>",[_c('nuxt-link',{staticClass:"bg-blue-900 hover:no-underline py-3 button text-white font-bold py-2 px-3 rounded-lg",attrs:{"to":"/transaction"}},[_vm._v("Lancer votre demande")])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"p-8\" data-v-55ad9a2f>","</div>",[_c('agences')],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=55ad9a2f&scoped=true&

// EXTERNAL MODULE: ./components/Agences.vue + 4 modules
var Agences = __webpack_require__(53);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  components: {
    Agences: Agences["default"]
  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(70)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "55ad9a2f",
  "56ab61cb"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Slider: __webpack_require__(74).default,Agences: __webpack_require__(53).default})


/***/ })

};;
//# sourceMappingURL=index.js.map