exports.ids = [4];
exports.modules = {

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

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/DIAPO3.b4490d6.jpg";

/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/DIAPOAIRTEL.fb5614c.jpg";

/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/post6.292feb8.jpg";

/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(81);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("e6cc0796", content, true, context)
};

/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(83);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("31feec2a", content, true, context)
};

/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/DIAPO2.150222b.jpg";

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Agences.vue?vue&type=template&id=2bdc2cd4&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bg-agences pb-4 py-8 px-8"},[_vm._ssrNode("<h2 class=\"text-4xl text-white text-center font-bold pt-4\" data-v-2bdc2cd4>Nos Agences</h2> <div class=\"grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 pt-4\" data-v-2bdc2cd4><div class=\"flex flex-col  items-center space-y-2\" data-v-2bdc2cd4><svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" class=\"h-6 w-6 text-red-600\" data-v-2bdc2cd4><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z\" data-v-2bdc2cd4></path> <circle cx=\"12\" cy=\"10\" r=\"3\" data-v-2bdc2cd4></circle></svg> <h1 class=\"text-white font-bold text-xl uppercase\" data-v-2bdc2cd4>Diplomate</h1> <p class=\"text-white text-center text-xs italic\" data-v-2bdc2cd4>Avenue Nelson Mandela, en diagonale d'ONUSIDA</p></div> <div class=\"flex flex-col  items-center space-y-2\" data-v-2bdc2cd4><svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" class=\"h-6 w-6 text-red-600\" data-v-2bdc2cd4><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z\" data-v-2bdc2cd4></path> <circle cx=\"12\" cy=\"10\" r=\"3\" data-v-2bdc2cd4></circle></svg> <h1 class=\"text-white font-bold text-xl uppercase\" data-v-2bdc2cd4>Moungali</h1> <p class=\"text-white text-center text-xs italic\" data-v-2bdc2cd4>Vers Universall arrêt de bus en face de l'école de peinture</p></div> <div class=\"flex flex-col  items-center space-y-2\" data-v-2bdc2cd4><svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" class=\"h-6 w-6 text-red-600\" data-v-2bdc2cd4><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z\" data-v-2bdc2cd4></path> <circle cx=\"12\" cy=\"10\" r=\"3\" data-v-2bdc2cd4></circle></svg> <h1 class=\"text-white font-bold text-xl uppercase\" data-v-2bdc2cd4>Mafouta</h1> <p class=\"text-white text-center text-xs italic\" data-v-2bdc2cd4>Route nationale No.1, en diagonale du Lycée Sébastien Mafouta</p></div> <div class=\"flex flex-col  items-center space-y-2\" data-v-2bdc2cd4><svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" class=\"h-6 w-6 text-red-600\" data-v-2bdc2cd4><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z\" data-v-2bdc2cd4></path> <circle cx=\"12\" cy=\"10\" r=\"3\" data-v-2bdc2cd4></circle></svg> <h1 class=\"text-white font-bold text-xl uppercase\" data-v-2bdc2cd4>Geant Casino</h1> <p class=\"text-white text-center text-xs italic\" data-v-2bdc2cd4>Avenue amilcar cabral</p></div></div> <div class=\"grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 pt-4\" data-v-2bdc2cd4><div class=\"flex flex-col  items-center space-y-2\" data-v-2bdc2cd4><svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" class=\"h-6 w-6 text-red-600\" data-v-2bdc2cd4><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z\" data-v-2bdc2cd4></path> <circle cx=\"12\" cy=\"10\" r=\"3\" data-v-2bdc2cd4></circle></svg> <h1 class=\"text-white font-bold text-xl uppercase\" data-v-2bdc2cd4>City Center</h1> <p class=\"text-white text-center text-xs italic\" data-v-2bdc2cd4>Avenue amilcar cabral, immeuble city-center, centre-ville en face de la station Africa</p></div> <div class=\"flex flex-col  items-center space-y-2\" data-v-2bdc2cd4><svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" class=\"h-6 w-6 text-red-600\" data-v-2bdc2cd4><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z\" data-v-2bdc2cd4></path> <circle cx=\"12\" cy=\"10\" r=\"3\" data-v-2bdc2cd4></circle></svg> <h1 class=\"text-white font-bold text-xl uppercase\" data-v-2bdc2cd4>Plateau</h1> <p class=\"text-white text-center text-xs italic\" data-v-2bdc2cd4>Plateau pharmacie jagger avant l'église Kimbanguiste</p></div> <div class=\"flex flex-col  items-center space-y-2\" data-v-2bdc2cd4><svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" class=\"h-6 w-6 text-red-600\" data-v-2bdc2cd4><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z\" data-v-2bdc2cd4></path> <circle cx=\"12\" cy=\"10\" r=\"3\" data-v-2bdc2cd4></circle></svg> <h1 class=\"text-white font-bold text-xl uppercase\" data-v-2bdc2cd4>Mampassi</h1> <p class=\"text-white text-center text-xs italic\" data-v-2bdc2cd4>Avenue des trois martyrs, marché Ouenzé en face de l'arrêt de bus</p></div> <div class=\"flex flex-col  items-center space-y-2\" data-v-2bdc2cd4><svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" class=\"h-6 w-6 text-red-600\" data-v-2bdc2cd4><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z\" data-v-2bdc2cd4></path> <circle cx=\"12\" cy=\"10\" r=\"3\" data-v-2bdc2cd4></circle></svg> <h1 class=\"text-white font-bold text-xl uppercase\" data-v-2bdc2cd4>Commission</h1> <p class=\"text-white text-center text-xs italic\" data-v-2bdc2cd4>Avenue Simon Kimbangou 78 rue Rayand paillet, Bacongo</p></div></div> <div class=\"col-span-4 sm:col-span-4 md:col-span-4 lg:col-span-4 xl:col-span-4 mt-4\" data-v-2bdc2cd4><div class=\"grid grid-cols-1 md:grid-cols-4 gap-4 bg-color\""+(_vm._ssrStyle(null,null, { display: (_vm.showMore) ? '' : 'none' }))+" data-v-2bdc2cd4><div class=\"flex flex-col  items-center space-y-2\" data-v-2bdc2cd4><svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" class=\"h-6 w-6 text-red-600\" data-v-2bdc2cd4><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z\" data-v-2bdc2cd4></path> <circle cx=\"12\" cy=\"10\" r=\"3\" data-v-2bdc2cd4></circle></svg> <h1 class=\"text-white font-bold text-xl uppercase\" data-v-2bdc2cd4>Ornano</h1> <p class=\"text-white text-center text-xs italic\" data-v-2bdc2cd4>Avenue Marechal lyauthe, en face du stade Michel d'Ornano, OCH moungoli III\n                </p></div> <div class=\"flex flex-col  items-center space-y-2\" data-v-2bdc2cd4><svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" class=\"h-6 w-6 text-red-600\" data-v-2bdc2cd4><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z\" data-v-2bdc2cd4></path> <circle cx=\"12\" cy=\"10\" r=\"3\" data-v-2bdc2cd4></circle></svg> <h1 class=\"text-white font-bold text-xl uppercase\" data-v-2bdc2cd4>P.K</h1> <p class=\"text-white text-center text-xs italic\" data-v-2bdc2cd4>A Côté de l'eglise catholique Ndona Marie No.32 rue emile biayend</p></div> <div class=\"flex flex-col  items-center space-y-2\" data-v-2bdc2cd4><svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" class=\"h-6 w-6 text-red-600\" data-v-2bdc2cd4><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z\" data-v-2bdc2cd4></path> <circle cx=\"12\" cy=\"10\" r=\"3\" data-v-2bdc2cd4></circle></svg> <h1 class=\"text-white font-bold text-xl uppercase\" data-v-2bdc2cd4>Talangaï I</h1> <p class=\"text-white text-center text-xs italic\" data-v-2bdc2cd4>Avenue des trois martyrs, en face de l'Hôpital de reference</p></div> <div class=\"flex flex-col  items-center space-y-2\" data-v-2bdc2cd4><svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" class=\"h-6 w-6 text-red-600\" data-v-2bdc2cd4><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z\" data-v-2bdc2cd4></path> <circle cx=\"12\" cy=\"10\" r=\"3\" data-v-2bdc2cd4></circle></svg> <h1 class=\"text-white font-bold text-xl uppercase\" data-v-2bdc2cd4>Makelekele</h1> <p class=\"text-white text-center text-xs\" data-v-2bdc2cd4>Avenue de l'OUA, Angola Libre à côté de l'agence OCEAN DU NORD</p></div></div></div> <div class=\"grid grid-cols-1 md:grid-cols-4 gap-4 bg-color\""+(_vm._ssrStyle(null,null, { display: (_vm.showMore) ? '' : 'none' }))+" data-v-2bdc2cd4><div class=\"flex flex-col  items-center space-y-2\" data-v-2bdc2cd4><svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" class=\"h-6 w-6 text-red-600\" data-v-2bdc2cd4><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z\" data-v-2bdc2cd4></path> <circle cx=\"12\" cy=\"10\" r=\"3\" data-v-2bdc2cd4></circle></svg> <h1 class=\"text-white font-bold text-xl uppercase\" data-v-2bdc2cd4>Moukondo II</h1> <p class=\"text-white text-center text-xs italic\" data-v-2bdc2cd4>Vers le ronf point Jack Opango\n                </p></div> <div class=\"flex flex-col  items-center space-y-2\" data-v-2bdc2cd4><svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" class=\"h-6 w-6 text-red-600\" data-v-2bdc2cd4><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z\" data-v-2bdc2cd4></path> <circle cx=\"12\" cy=\"10\" r=\"3\" data-v-2bdc2cd4></circle></svg> <h1 class=\"text-white font-bold text-xl uppercase\" data-v-2bdc2cd4>Talangaï II</h1> <p class=\"text-white text-center text-xs italic\" data-v-2bdc2cd4>Avenue Marien Ngouabi, marché Talangaï , rue Oboya</p></div> <div class=\"flex flex-col  items-center space-y-2\" data-v-2bdc2cd4><svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" class=\"h-6 w-6 text-red-600\" data-v-2bdc2cd4><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z\" data-v-2bdc2cd4></path> <circle cx=\"12\" cy=\"10\" r=\"3\" data-v-2bdc2cd4></circle></svg> <h1 class=\"text-white font-bold text-xl uppercase\" data-v-2bdc2cd4>Ifc (ex ccf)</h1> <p class=\"text-white text-center text-xs italic\" data-v-2bdc2cd4>Place de la République, derriére le Ministere de l'interieure et de la decentralisation</p></div> <div class=\"flex flex-col  items-center space-y-2\" data-v-2bdc2cd4><svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" class=\"h-6 w-6 text-red-600\" data-v-2bdc2cd4><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z\" data-v-2bdc2cd4></path> <circle cx=\"12\" cy=\"10\" r=\"3\" data-v-2bdc2cd4></circle></svg> <h1 class=\"text-white font-bold text-xl uppercase\" data-v-2bdc2cd4>Moukondo Mazala</h1> <p class=\"text-white text-center text-xs\" data-v-2bdc2cd4>Rond point, en diagonal de la station Total</p></div></div> <div class=\"grid grid-cols-1 md:grid-cols-5 gap-4 bg-color\""+(_vm._ssrStyle(null,null, { display: (_vm.showMore) ? '' : 'none' }))+" data-v-2bdc2cd4><div class=\"flex flex-col  items-center space-y-2\" data-v-2bdc2cd4><svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" class=\"h-6 w-6 text-red-600\" data-v-2bdc2cd4><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z\" data-v-2bdc2cd4></path> <circle cx=\"12\" cy=\"10\" r=\"3\" data-v-2bdc2cd4></circle></svg> <h1 class=\"text-white font-bold text-xl uppercase\" data-v-2bdc2cd4>Mikalou</h1> <p class=\"text-white text-center text-xs italic\" data-v-2bdc2cd4>Rond point No1, rue Mpika apres la MUCODEC\n                </p></div> <div class=\"flex flex-col  items-center space-y-2\" data-v-2bdc2cd4><svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" class=\"h-6 w-6 text-red-600\" data-v-2bdc2cd4><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z\" data-v-2bdc2cd4></path> <circle cx=\"12\" cy=\"10\" r=\"3\" data-v-2bdc2cd4></circle></svg> <h1 class=\"text-white font-bold text-xl uppercase\" data-v-2bdc2cd4>Mkombo la Tele</h1> <p class=\"text-white text-center text-xs italic\" data-v-2bdc2cd4>Esplanade de la élé de Nkombo</p></div> <div class=\"flex flex-col  items-center space-y-2\" data-v-2bdc2cd4><svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" class=\"h-6 w-6 text-red-600\" data-v-2bdc2cd4><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z\" data-v-2bdc2cd4></path> <circle cx=\"12\" cy=\"10\" r=\"3\" data-v-2bdc2cd4></circle></svg> <h1 class=\"text-white font-bold text-xl uppercase\" data-v-2bdc2cd4>Poto-Poto</h1> <p class=\"text-white text-center text-xs italic\" data-v-2bdc2cd4>Avenue de la paix, croisement rue louango</p></div> <div class=\"flex flex-col  items-center space-y-2\" data-v-2bdc2cd4><svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" class=\"h-6 w-6 text-red-600\" data-v-2bdc2cd4><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z\" data-v-2bdc2cd4></path> <circle cx=\"12\" cy=\"10\" r=\"3\" data-v-2bdc2cd4></circle></svg> <h1 class=\"text-white font-bold text-xl uppercase\" data-v-2bdc2cd4>Kintele</h1> <p class=\"text-white text-center text-xs\" data-v-2bdc2cd4>Avenue Marie Ngouabi, marché Talangaï de Oboya</p></div> <div class=\"flex flex-col  items-center space-y-2\" data-v-2bdc2cd4><svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" class=\"h-6 w-6 text-red-600\" data-v-2bdc2cd4><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z\" data-v-2bdc2cd4></path> <circle cx=\"12\" cy=\"10\" r=\"3\" data-v-2bdc2cd4></circle></svg> <h1 class=\"text-white font-bold text-xl uppercase\" data-v-2bdc2cd4>La Frontiere</h1> <p class=\"text-white text-center text-xs\" data-v-2bdc2cd4>Avenue Marie Ngouabi, marché Talangaï de Oboya</p></div></div> <h2 class=\"text-xl text-white font-extrabold cursor-pointer mt-2 text-center flex gap-2 justify-center\" data-v-2bdc2cd4>\n        Voir Plus\n        <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" class=\"h-6 w-6\""+(_vm._ssrStyle(null,null, { display: (!_vm.showMore) ? '' : 'none' }))+" data-v-2bdc2cd4><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M19 9l-7 7-7-7\" data-v-2bdc2cd4></path></svg> <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" class=\"h-6 w-6\""+(_vm._ssrStyle(null,null, { display: (_vm.showMore) ? '' : 'none' }))+" data-v-2bdc2cd4><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M5 15l7-7 7 7\" data-v-2bdc2cd4></path></svg></h2>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Agences.vue?vue&type=template&id=2bdc2cd4&scoped=true&

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  
  var style0 = __webpack_require__(80)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Agencesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2bdc2cd4",
  "33ee9935"
  
)

/* harmony default export */ var Agences = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/diplomate.7145ab6.jpg";

/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/MGI__NEW_LOGO_v1.4343dc5.jpg";

/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/ria-money-transfer.2034bf2.jpg";

/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/canal.cd69cd1.jpg";

/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/visa.596d41e.jpg";

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Agences_vue_vue_type_style_index_0_id_2bdc2cd4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Agences_vue_vue_type_style_index_0_id_2bdc2cd4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Agences_vue_vue_type_style_index_0_id_2bdc2cd4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Agences_vue_vue_type_style_index_0_id_2bdc2cd4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Agences_vue_vue_type_style_index_0_id_2bdc2cd4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Agences_vue_vue_type_style_index_0_id_2bdc2cd4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".bg-agences[data-v-2bdc2cd4]{background-color:rgba(7,9,82,.89412);background-image:linear-gradient(45deg,rgba(7,9,82,.9451),#090979 35%,#b4e41c)}.button[data-v-2bdc2cd4]:hover{background-color:#b4e41c}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_177385aa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_177385aa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_177385aa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_177385aa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_177385aa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_177385aa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(44);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(55);
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, ".bg-hero[data-v-177385aa]{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-size:cover}.bg-color[data-v-177385aa]{background-color:rgba(7,9,82,.89412)}.text-color[data-v-177385aa]{color:#070a52}i[data-v-177385aa]{font-size:1.5rem}.button[data-v-177385aa]:hover{background-color:#b4e41c}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/DIAPOCANAL.1546b2a.jpg";

/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/DIAPOMONEGRAM.7c52636.jpg";

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Slider.vue?vue&type=template&id=4fa5b14c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{},[_c('b-carousel',{attrs:{"id":"carousel-1","interval":2000,"controls":"","indicators":""},on:{"sliding-start":_vm.onSlideStart,"sliding-end":_vm.onSlideEnd}},[_c('b-carousel-slide',{attrs:{"img-src":__webpack_require__(55)}}),_vm._v(" "),_c('b-carousel-slide',{attrs:{"img-src":__webpack_require__(45)}}),_vm._v(" "),_c('b-carousel-slide',{attrs:{"img-src":__webpack_require__(46)}}),_vm._v(" "),_c('b-carousel-slide',{attrs:{"img-src":__webpack_require__(84)}}),_vm._v(" "),_c('b-carousel-slide',{attrs:{"img-src":__webpack_require__(85)}}),_vm._v(" "),_c('b-carousel-slide',{scopedSlots:_vm._u([{key:"img",fn:function(){return [_c('img',{attrs:{"src":__webpack_require__(47),"alt":"image slot"}})]},proxy:true}])})],1)],1)}
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

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=177385aa&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"scrollable-container font-poppins"},[_vm._ssrNode("<div data-v-177385aa>","</div>",[_vm._ssrNode("<div data-v-177385aa>","</div>",[_c('Slider')],1)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"mx-auto flex flex-col px-8 sm:flex-row justify-between py-16 gap-8\" data-v-177385aa>","</div>",[_vm._ssrNode("<div class=\"sm:text-left items-center\" data-v-177385aa>","</div>",[_vm._ssrNode("<div class=\"lg:pt-8\" data-v-177385aa>","</div>",[_vm._ssrNode("<h2 class=\"text-4xl text-color font-bold pb-2\" data-v-177385aa>A Propos de Nous</h2> <p class=\"mb-4 text-xl sm:w-full text-justify lg:w-3/4\" data-v-177385aa>\n\n          Nous sommes une Société de transfert de fonds et bureau de change.\n          Notre mission est de fournir un service de transfert d'argent rapide, fiable et abordable à nos clients, en\n          leur offrant une expérience transparente et sécurisée. Notre objectif est de simplifier les transferts\n          d'argent pour nos clients, en leur offrant une solution pratique et facile à utiliser, peu importe où ils se\n          trouvent dans le monde.\n\n        </p> "),_vm._ssrNode("<div class=\"mt-4\" data-v-177385aa>","</div>",[_c('nuxt-link',{staticClass:"bg-color button hover:no-underline hover:text-white shadow-2xl rounded-lg px-4 py-3 text-white text-xl font-bold transition-colors duration-300",attrs:{"to":"/transaction"}},[_vm._v("\n            Lancer une transaction\n          ")])],1)],2)]),_vm._ssrNode(" <div data-v-177385aa><img"+(_vm._ssrAttr("src",__webpack_require__(75)))+" alt=\"Image\" class=\"w-full rounded-lg shadow-lg\" data-v-177385aa></div>")],2),_vm._ssrNode(" <h2 class=\"text-4xl text-color font-bold text-center bg-gray-200 pt-4\" data-v-177385aa>Nos Produits</h2> "),_vm._ssrNode("<div class=\"grid grid-cols-1 md:grid-cols-4 gap-4 p-6 bg-gray-300\" data-v-177385aa>","</div>",[_vm._ssrNode("<div class=\"border rounded bg-white hover:shadow-lg\" data-v-177385aa>","</div>",[_vm._ssrNode("<img"+(_vm._ssrAttr("src",__webpack_require__(76)))+" alt class=\"rounded-lg shadow-lg\" data-v-177385aa> <div class=\"p-4\" data-v-177385aa><h2 class=\"font-bold text-3xl text-color\" data-v-177385aa>MoneyGram</h2> <p class=\"mt-2 text-justify\" data-v-177385aa>\n          MoneyGram est un service de transfert d'argent rapide et sûr pour envoyer de l'argent à des proches et des amis dans le monde entier.\n        </p></div> "),_vm._ssrNode("<div class=\"p-4\" data-v-177385aa>","</div>",[_c('nuxt-link',{staticClass:"bg-color hover:no-underline py-3 button text-white font-bold py-2 px-3 rounded-lg",attrs:{"to":"/transaction"}},[_vm._v("Lancer votre demande")])],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"border rounded bg-white hover:shadow-lg\" data-v-177385aa>","</div>",[_vm._ssrNode("<img"+(_vm._ssrAttr("src",__webpack_require__(77)))+" alt class=\"rounded-lg shadow-lg\" data-v-177385aa> <div class=\"p-4\" data-v-177385aa><h2 class=\"font-bold text-3xl text-color\" data-v-177385aa>Ria</h2> <p class=\"mt-2 text-justify\" data-v-177385aa>\n          RIA est un service de transfert d'argent international rapide et sûr qui permet d'envoyer de l'argent à des proches dans le monde entier.\n        </p></div> "),_vm._ssrNode("<div class=\"p-4\" data-v-177385aa>","</div>",[_c('nuxt-link',{staticClass:"bg-color hover:no-underline py-3 button text-white font-bold py-2 px-3 rounded-lg",attrs:{"to":"/transaction"}},[_vm._v("Lancer votre demande")])],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"border bg-white rounded hover:shadow-lg\" data-v-177385aa>","</div>",[_vm._ssrNode("<img"+(_vm._ssrAttr("src",__webpack_require__(78)))+" alt class=\"rounded-lg shadow-lg\" data-v-177385aa> <div class=\"p-4\" data-v-177385aa><h2 class=\"font-bold text-3xl text-color\" data-v-177385aa>Canal +</h2> <p class=\"mt-2 text-justify\" data-v-177385aa>\n          Faites vos abonnenments et Réabonnements Canal dans nos agences et béneficier des programmes exclusifs de Canal+          </p></div> "),_vm._ssrNode("<div class=\"p-4\" data-v-177385aa>","</div>",[_c('nuxt-link',{staticClass:"bg-color hover:no-underline py-3 button text-white font-bold py-2 px-3 rounded-lg",attrs:{"to":"/transaction"}},[_vm._v("Lancer votre demande")])],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"border bg-white rounded hover:shadow-lg\" data-v-177385aa>","</div>",[_vm._ssrNode("<img"+(_vm._ssrAttr("src",__webpack_require__(79)))+" alt class=\"rounded-lg shadow-lg\" data-v-177385aa> <div class=\"p-4\" data-v-177385aa><h2 class=\"font-bold text-3xl text-color\" data-v-177385aa>Visa</h2> <p class=\"mt-2 text-justify\" data-v-177385aa>\n          Rechargé votre carte Visa dans nos agences et profiter des services financiers digitales de votre choix          </p></div> <br data-v-177385aa> "),_vm._ssrNode("<div class=\"p-4\" data-v-177385aa>","</div>",[_c('nuxt-link',{staticClass:"bg-color hover:no-underline py-3 button font-normal\t text-white font-bold py-2 px-3 rounded-lg",attrs:{"to":"/transaction"}},[_vm._v("Lancer votre demande")])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"pb-4\" data-v-177385aa>","</div>",[_c('agences')],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=177385aa&scoped=true&

// EXTERNAL MODULE: ./components/Agences.vue + 4 modules
var Agences = __webpack_require__(56);

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
  
  var style0 = __webpack_require__(82)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "177385aa",
  "56ab61cb"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Slider: __webpack_require__(86).default,Agences: __webpack_require__(56).default})


/***/ })

};;
//# sourceMappingURL=index.js.map