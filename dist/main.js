/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n  font-family: 'Ubuntu', sans-serif;\\r\\n}\\r\\n\\r\\n@keyframes multicolor {\\r\\n  0% {\\r\\n    color: rgba(255, 0, 0, 0.1);\\r\\n  }\\r\\n\\r\\n  33% {\\r\\n    color: rgba(202, 24, 24, 0.4);\\r\\n  }\\r\\n\\r\\n  66% {\\r\\n    color: rgba(90, 36, 36, 0.7);\\r\\n  }\\r\\n\\r\\n  100% {\\r\\n    color: black;\\r\\n  }\\r\\n}\\r\\n\\r\\nheader ul > li {\\r\\n  padding: 3px;\\r\\n  font-size: 20px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\nfooter a,\\r\\nheader ul > li > a {\\r\\n  color: black;\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\n#logo {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n#logo,\\r\\n#logo > span {\\r\\n  padding: 3px;\\r\\n  font-size: 40px;\\r\\n  color: red;\\r\\n}\\r\\n\\r\\n#top-header li {\\r\\n  padding: 20px;\\r\\n}\\r\\n\\r\\nheader ul {\\r\\n  list-style: none;\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  flex-wrap: wrap;\\r\\n}\\r\\n\\r\\n#bottom-header {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  padding: 0 15px;\\r\\n}\\r\\n\\r\\n#bottom-header li {\\r\\n  font-size: 20px;\\r\\n  padding: 10px;\\r\\n  animation: 2s multicolor;\\r\\n}\\r\\n\\r\\nfooter div {\\r\\n  width: 100%;\\r\\n  padding: 40px 25px;\\r\\n  border-top: 1px solid black;\\r\\n}\\r\\n\\r\\n#comments {\\r\\n  border: 2px solid black;\\r\\n  padding: 10px;\\r\\n  margin: 0 20%;\\r\\n  background-color: white;\\r\\n  position: absolute;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  z-index: 111;\\r\\n}\\r\\n\\r\\n#close-button-wrapper {\\r\\n  width: 100%;\\r\\n  display: flex;\\r\\n  justify-content: flex-end;\\r\\n}\\r\\n\\r\\n#close-button-wrapper span {\\r\\n  margin-left: auto;\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\n#episode-description-wrapper {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.container {\\r\\n  display: grid;\\r\\n  margin: 60px;\\r\\n  justify-content: center;\\r\\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\\r\\n  grid-gap: 25px 10px;\\r\\n}\\r\\n\\r\\n.episode {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.episode img {\\r\\n  width: 100%;\\r\\n  margin-bottom: 8px;\\r\\n}\\r\\n\\r\\n#episode-description-wrapper img {\\r\\n  width: 40%;\\r\\n}\\r\\n\\r\\n#episode-description-wrapper h1 {\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n#episode-description-items {\\r\\n  display: grid;\\r\\n  grid-template-columns: 1fr 1fr;\\r\\n  grid-template-rows: 1fr 1fr;\\r\\n}\\r\\n\\r\\n#episode-description-items span {\\r\\n  padding: 10px;\\r\\n  font-size: 17px;\\r\\n  margin: 0 10%;\\r\\n}\\r\\n\\r\\n#comments-table-wrapper {\\r\\n  width: 50%;\\r\\n  margin: 0 auto;\\r\\n}\\r\\n\\r\\n#comments-table-wrapper h2 {\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n#comments form {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  margin: 5% 30%;\\r\\n}\\r\\n\\r\\n#comments form input {\\r\\n  width: 100px;\\r\\n}\\r\\n\\r\\n#comments form textarea {\\r\\n  height: 100px;\\r\\n  resize: none;\\r\\n}\\r\\n\\r\\n#comments form input,\\r\\n#comments form textarea {\\r\\n  border: 2px solid black;\\r\\n  margin: 10px;\\r\\n}\\r\\n\\r\\n#comments form button {\\r\\n  width: 100px;\\r\\n  margin: 10px;\\r\\n  background-color: white;\\r\\n  font-weight: bold;\\r\\n}\\r\\n\\r\\n.hide-popup {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n#close-button {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.d-flex {\\r\\n  display: flex;\\r\\n  width: 100%;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n.d-flex p {\\r\\n  padding: 5px;\\r\\n  margin: 0;\\r\\n  font-weight: 500;\\r\\n  width: 80%;\\r\\n}\\r\\n\\r\\n.likes {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  font-size: 13px;\\r\\n}\\r\\n\\r\\n.comment-btn {\\r\\n  margin-top: 8px;\\r\\n  width: 75%;\\r\\n  height: 30px;\\r\\n  font-size: 1em;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascript-capstone/./src/assets/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var _i = 0; _i < this.length; _i++) {\n        var id = this[_i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i2 = 0; _i2 < modules.length; _i2++) {\n      var item = [].concat(modules[_i2]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/assets/style.css":
/*!******************************!*\
  !*** ./src/assets/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/assets/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://javascript-capstone/./src/assets/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/js/api.js":
/*!***********************!*\
  !*** ./src/js/api.js ***!
  \***********************/
/***/ ((module) => {

eval("class TvGetters {\r\n  static async getSeasons(id) {\r\n    const response = await fetch(`https://api.tvmaze.com/shows/${id}/seasons`, {\r\n      method: 'GET',\r\n      headers: {\r\n        'User-Agent': 'SchoolProject/1.0 This is a school project about working with APIS',\r\n        Accept: '*',\r\n      },\r\n    });\r\n    return response.json();\r\n  }\r\n\r\n  static async getEpisodes(id) {\r\n    const response = await fetch(`https://api.tvmaze.com/seasons/${id}/episodes`, {\r\n      method: 'GET',\r\n      headers: {\r\n        'User-Agent': 'SchoolProject/1.0 This is a school project about working with APIS',\r\n        Accept: '*',\r\n      },\r\n    });\r\n    return response.json();\r\n  }\r\n}\r\n\r\nconst BASE_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';\r\nconst APP_ID = 'LFw4C11a2n9Ev9vjBV5l';\r\n\r\nconst sendComment = async (userName, comment, itemId) => {\r\n  const endpoint = `apps/${APP_ID}/comments`;\r\n  const data = { username: userName, comment, item_id: itemId };\r\n  const result = await fetch(BASE_URL + endpoint, {\r\n    method: 'POST',\r\n    body: JSON.stringify(data),\r\n    headers: {\r\n      'Content-Type': 'application/json; Charset=UTF-8',\r\n    },\r\n  });\r\n  const text = await result.text();\r\n  return text;\r\n};\r\n\r\nconst getComments = async (itemId) => {\r\n  const endpoint = `apps/${APP_ID}/comments?item_id=${itemId}`;\r\n  const result = await fetch(BASE_URL + endpoint);\r\n  const text = await result.json();\r\n  return [text, result.status];\r\n};\r\n\r\nconst getLikes = async () => {\r\n  const endpoint = `apps/${APP_ID}/likes/`;\r\n  let result;\r\n  try {\r\n    result = await fetch(BASE_URL + endpoint);\r\n    if (result.status === 400) {\r\n      throw new Error(\"couldn't fetch\");\r\n    } else {\r\n      const json = await result.json();\r\n      return [json];\r\n    }\r\n  } catch (e) {\r\n    return [e];\r\n  }\r\n};\r\n\r\nmodule.exports.sendComment = sendComment;\r\nmodule.exports.getComments = getComments;\r\nmodule.exports.getLikes = getLikes;\r\nmodule.exports.TvGetters = TvGetters;\r\n\n\n//# sourceURL=webpack://javascript-capstone/./src/js/api.js?");

/***/ }),

/***/ "./src/js/comments.js":
/*!****************************!*\
  !*** ./src/js/comments.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./src/js/api.js\");\n/* harmony import */ var _assets_no_image_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/no_image.png */ \"./src/assets/no_image.png\");\n\r\n\r\n\r\nconst addCommentsForm = document.querySelector('#add-comments-form');\r\nconst commentsTable = document.querySelector('#comments-table');\r\nconst commentsPopup = document.querySelector('#comments');\r\nconst submitButton = document.querySelector('#submit-button');\r\n\r\nconst addComment = async (commentId) => {\r\n  const name = addCommentsForm.elements[0];\r\n  const comment = addCommentsForm.elements[1];\r\n  const date = new Date().toLocaleDateString();\r\n  const data = `${date} ${name.value} : ${comment.value}`;\r\n\r\n  const div = document.createElement('div');\r\n  div.innerText = data;\r\n  const res = await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.sendComment)(name.value, comment.value, commentId);\r\n  if (res === 'Created') {\r\n    commentsTable.appendChild(div);\r\n  }\r\n};\r\n\r\naddCommentsForm.addEventListener('submit', (e) => {\r\n  e.preventDefault();\r\n  addComment(submitButton.id);\r\n});\r\n\r\nconst renderComments = async (comments) => {\r\n  commentsTable.innerHTML = '';\r\n  if (comments.length > 0) {\r\n    comments.forEach((comment) => {\r\n      const data = `${comment.creation_date} ${comment.username}: ${comment.comment}`;\r\n      const div = document.createElement('div');\r\n      div.innerText = data;\r\n      commentsTable.appendChild(div);\r\n    });\r\n  }\r\n};\r\n\r\nconst populatePopup = (episode) => {\r\n  const episodeImage = document.querySelector('#episode-img');\r\n  const episodeName = document.querySelector('#episode-name');\r\n  const episodeDescriptionItems = document.querySelectorAll('.episode-description-item');\r\n  const img = episode.image ? episode.image.medium : null;\r\n  if (!img) {\r\n    episodeImage.src = _assets_no_image_png__WEBPACK_IMPORTED_MODULE_1__;\r\n  } else {\r\n    episodeImage.src = img;\r\n  }\r\n  episodeName.textContent = episode.name;\r\n  episodeDescriptionItems[0].textContent = `Duration : ${episode.runtime} minutes`;\r\n  episodeDescriptionItems[1].textContent = `Season No. : ${episode.number}`;\r\n  episodeDescriptionItems[2].textContent = `Episode No. : ${episode.season}`;\r\n  episodeDescriptionItems[3].textContent = `Release Date : ${episode.airdate}`;\r\n};\r\n\r\nconst implementCloseButton = () => {\r\n  const closeButton = document.querySelector('#close-button');\r\n  closeButton.addEventListener('click', () => {\r\n    commentsPopup.classList.add('hide-popup');\r\n  });\r\n};\r\n\r\nconst showCommentsPopup = async (episode) => {\r\n  submitButton.id = episode.id;\r\n  commentsPopup.classList.remove('hide-popup');\r\n  implementCloseButton();\r\n  populatePopup(episode);\r\n  const [comments] = await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getComments)(episode.id);\r\n  renderComments(comments);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showCommentsPopup);\r\n\n\n//# sourceURL=webpack://javascript-capstone/./src/js/comments.js?");

/***/ }),

/***/ "./src/js/domPop.js":
/*!**************************!*\
  !*** ./src/js/domPop.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DomPopulating)\n/* harmony export */ });\n/* harmony import */ var _assets_no_image_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/no_image.png */ \"./src/assets/no_image.png\");\n/* harmony import */ var _comments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comments.js */ \"./src/js/comments.js\");\n\r\n\r\n\r\nclass DomPopulating {\r\n  static createSeason(n) {\r\n    const bHeader = document.getElementById('bottom-header');\r\n    bHeader.innerHTML = '';\r\n    let i = 0;\r\n    while (i < n) {\r\n      bHeader.innerHTML += `<li>Season ${i + 1}</li>`;\r\n      i += 1;\r\n    }\r\n  }\r\n\r\n  static createEpisodes(list) {\r\n    const epCont = document.querySelector('.container');\r\n    epCont.innerHTML = '';\r\n\r\n    list.forEach((ep) => {\r\n      if (ep.image === null) {\r\n        epCont.innerHTML += `<div id=\"${ep.id}\" class=\"episode\"><img src=\"${_assets_no_image_png__WEBPACK_IMPORTED_MODULE_0__}\" alt=\"\"><div class=\"d-flex\"><p>${ep.name}</p> <span class=\"likes\"><span class=\"material-icons\">favorite_border</span>${ep.likes} likes</span></div><button class=\"comment-btn\" type=\"button\">Comments</button></div>`;\r\n      } else {\r\n        epCont.innerHTML += `<div id=\"${ep.id}\" class=\"episode\"><img src=\"${ep.image.medium}\" alt=\"\"><div class=\"d-flex\"><p>${ep.name}</p> <span class=\"likes\"><span class=\"material-icons\">favorite_border</span>${ep.likes} likes</span></div><button class=\"comment-btn\" type=\"button\">Comments</button></div>`;\r\n      }\r\n    });\r\n\r\n    const commentButtons = document.querySelectorAll('.comment-btn');\r\n    commentButtons.forEach((commentbtn) => {\r\n      commentbtn.addEventListener('click', (event) => {\r\n        const { id } = event.target.parentNode;\r\n        const episode = list.filter((a) => a.id.toString() === id)[0];\r\n        (0,_comments_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(episode);\r\n      });\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://javascript-capstone/./src/js/domPop.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/style.css */ \"./src/assets/style.css\");\n/* harmony import */ var _comments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comments.js */ \"./src/js/comments.js\");\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.js */ \"./src/js/api.js\");\n/* harmony import */ var _domPop_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./domPop.js */ \"./src/js/domPop.js\");\n\r\n\r\n\r\n\r\n\r\nconst seasonListener = (info) => {\r\n  const seasonItems = document.querySelectorAll('#bottom-header li');\r\n  seasonItems.forEach((li, index) => {\r\n    li.addEventListener('click', async () => {\r\n      const { id } = info[index];\r\n      const episodeList = await _api_js__WEBPACK_IMPORTED_MODULE_2__.TvGetters.getEpisodes(id);\r\n      const arr = await (0,_api_js__WEBPACK_IMPORTED_MODULE_2__.getLikes)();\r\n      episodeList.forEach((episode) => {\r\n        const key = Object.keys(arr).find((key) => arr[key].item_id === `${episode.id}`);\r\n        if (arr[key] !== undefined) {\r\n          episode.likes = arr[key].likes;\r\n        } else {\r\n          episode.likes = 0;\r\n        }\r\n        _domPop_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].createEpisodes(episodeList);\r\n      });\r\n    });\r\n  });\r\n};\r\n\r\ndocument.addEventListener('click', async (event) => {\r\n  const { target } = event;\r\n  if (target.innerText === 'Stranger Things') {\r\n    const seasonInfo = await _api_js__WEBPACK_IMPORTED_MODULE_2__.TvGetters.getSeasons(2993);\r\n    const seasonN = seasonInfo.length;\r\n    _domPop_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].createSeason(seasonN);\r\n    seasonListener(seasonInfo);\r\n  } else if (target.innerText === 'Heroes') {\r\n    const seasonInfo = await _api_js__WEBPACK_IMPORTED_MODULE_2__.TvGetters.getSeasons(134);\r\n    const seasonN = seasonInfo.length;\r\n    _domPop_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].createSeason(seasonN);\r\n    seasonListener(seasonInfo);\r\n  } else if (target.innerText === 'Lost') {\r\n    const seasonInfo = await _api_js__WEBPACK_IMPORTED_MODULE_2__.TvGetters.getSeasons(123);\r\n    const seasonN = seasonInfo.length;\r\n    _domPop_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].createSeason(seasonN);\r\n    seasonListener(seasonInfo);\r\n  }\r\n});\r\n\r\ndocument.addEventListener('DOMContentLoaded', async () => {\r\n  const seasonInfo = await _api_js__WEBPACK_IMPORTED_MODULE_2__.TvGetters.getSeasons(2993);\r\n  const seasonN = seasonInfo.length;\r\n  _domPop_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].createSeason(seasonN);\r\n  seasonListener(seasonInfo);\r\n  const seasonItems = document.querySelectorAll('#bottom-header li');\r\n  seasonItems[0].click();\r\n});\n\n//# sourceURL=webpack://javascript-capstone/./src/js/index.js?");

/***/ }),

/***/ "./src/assets/no_image.png":
/*!*********************************!*\
  !*** ./src/assets/no_image.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"7a3ea9f256b6a13927ef.png\";\n\n//# sourceURL=webpack://javascript-capstone/./src/assets/no_image.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;