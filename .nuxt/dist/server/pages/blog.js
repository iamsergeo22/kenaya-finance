exports.ids = [2];
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

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(61);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("424840e4", content, true, context)
};

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_blog_vue_vue_type_style_index_0_id_44d1a690_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_blog_vue_vue_type_style_index_0_id_44d1a690_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_blog_vue_vue_type_style_index_0_id_44d1a690_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_blog_vue_vue_type_style_index_0_id_44d1a690_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_blog_vue_vue_type_style_index_0_id_44d1a690_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_blog_vue_vue_type_style_index_0_id_44d1a690_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".post-container[data-v-44d1a690]{display:flex;flex-wrap:wrap}.text-color[data-v-44d1a690]{color:#070a52}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog.vue?vue&type=template&id=44d1a690&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"font-poppins"},[_vm._ssrNode("<div data-v-44d1a690>","</div>",[_c('Breadcrumb',{attrs:{"crumbs":_vm.crumbs}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"mx-auto py-16 lg:px-32 px-8 bg-gray-400\" data-v-44d1a690>","</div>",[_vm._ssrNode("<div class=\"grid gap-4 grid-cols-1 md:grid-cols-3\" data-v-44d1a690>","</div>",_vm._l((_vm.posts),function(post,index){return _vm._ssrNode("<div class=\"hover:transform -translate-y-40 bg-white cursor-pointer  hover:shadow-2xl hover:shadow-blue-800 rounded-lg\" data-v-44d1a690>","</div>",[_vm._ssrNode("<img"+(_vm._ssrAttr("src",post.image))+(_vm._ssrAttr("alt",post.title))+" class=\"w-screen rounded-lg shadow-2xl mb-3 hover:opacity-60\" data-v-44d1a690> "),_vm._ssrNode("<h2 class=\"text-lg font-bold mb-2 px-4 no-underline\" data-v-44d1a690>","</h2>",[_c('nuxt-link',{staticClass:"text-color ",attrs:{"to":("/posts/" + (post.slug))}},[_vm._v(_vm._s(post.title))])],1),_vm._ssrNode(" <div class=\"text-back mb-2 text-md font-extrabold italic px-4\" data-v-44d1a690><span data-v-44d1a690>"+_vm._ssrEscape(_vm._s(_vm.formatDate(post.date)))+"</span></div> <div class=\"mb-4 px-4\" data-v-44d1a690><a"+(_vm._ssrAttr("href",("/posts/" + (post.slug))))+" class=\"font-bold text-color text-xl\" data-v-44d1a690>Lire Plus</a></div>")],2)}),0),_vm._ssrNode(" <div class=\"flex justify-between text-xl text-color items-center mt-12\" data-v-44d1a690><a"+(_vm._ssrAttr("href",_vm.previousPage))+(_vm._ssrClass(null,{ 'text-color hover:text-color cursor-not-allowed': !_vm.showPreviousPage }))+" data-v-44d1a690>← précédent</a> <div class=\"text-base\" data-v-44d1a690>"+_vm._ssrEscape("Page "+_vm._s(_vm.currentPage)+" of "+_vm._s(_vm.totalPages))+"</div> <a"+(_vm._ssrAttr("href",_vm.nextPage))+(_vm._ssrClass(null,{ 'text-color hover:text-color cursor-not-allowed': !_vm.showNextPage }))+" data-v-44d1a690>suivant \n        →</a></div>")],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/blog.vue?vue&type=template&id=44d1a690&scoped=true&

// EXTERNAL MODULE: external "date-fns"
var external_date_fns_ = __webpack_require__(39);

// EXTERNAL MODULE: ./components/Breadcrumb.vue + 4 modules
var Breadcrumb = __webpack_require__(41);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var blogvue_type_script_lang_js_ = ({
  components: {
    Breadcrumb: Breadcrumb["default"]
  },

  async asyncData({
    $content
  }) {
    const posts = await $content().only(['title', 'date', 'summary', 'image', 'tags', 'slug']).sortBy('createdAt', 'desc').fetch();
    console.log("posts", posts);
    return {
      title: 'Blog Page',
      crumbs: [{
        name: 'Blog',
        path: '/blog'
      }],
      posts,
      currentPage: 1,
      pagination: 4,
      allPosts: [],
      base: '/blog'
    };
  },

  // data() {
  //   return {
  //     posts: [],
  //     
  //   }
  // },
  computed: {
    totalPages() {
      return Math.ceil(this.allPosts.length / this.pagination);
    },

    showPreviousPage() {
      return this.currentPage !== 1;
    },

    previousPage() {
      return [0, 1].includes(this.currentPage - 1) ? this.base : `${this.base}?page=${this.currentPage - 1}`;
    },

    showNextPage() {
      return this.currentPage !== this.totalPages;
    },

    nextPage(currentPage, totalPages) {
      return this.totalPages > this.currentPage ? `${this.base}?page=${this.currentPage + 1}` : `${this.base}?page=${this.currentPage}`;
    }

  },
  methods: {
    formatDate(dateToFormat) {
      return Object(external_date_fns_["format"])(new Date(dateToFormat), 'MMMM d, Y');
    }

  },

  async fetch() {
    this.allPosts = await this.$content().fetch();
    this.currentPage = parseInt(this.$route.query.page) ? parseInt(this.$route.query.page) : 1;

    if (this.currentPage > this.totalPages) {
      this.$router.push('/blog');
      window.location.href = '/blog';
    }

    this.posts = await this.$content().sortBy('date', 'desc').limit(this.pagination).skip((this.currentPage - 1) * this.pagination).fetch();
  },

  fetchOnServer: false
});
// CONCATENATED MODULE: ./pages/blog.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_blogvue_type_script_lang_js_ = (blogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/blog.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(60)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_blogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "44d1a690",
  "35c7dc8e"
  
)

/* harmony default export */ var blog = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Breadcrumb: __webpack_require__(41).default})


/***/ })

};;
//# sourceMappingURL=blog.js.map