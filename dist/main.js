/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[3]!./src/styles.sass":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[3]!./src/styles.sass ***!
  \*****************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  font-family: Helvetica, sans-serif;\\n  margin: 0;\\n  background: #EDF1D6;\\n  display: grid;\\n  grid-template: 100px 1fr/300px 1fr;\\n  height: 100dvh;\\n}\\nbody header {\\n  grid-column: span 2;\\n  display: grid;\\n  align-items: center;\\n  padding-left: 2rem;\\n  background: #609966;\\n  font-size: 52px;\\n  margin: 5px 5px 0 5px;\\n  border-radius: 8px;\\n  border: 2px solid #40513B;\\n}\\nbody .hero {\\n  margin: 5px;\\n  padding-top: 20px;\\n  grid-area: 2/1/span 1/span 1;\\n  display: grid;\\n  grid-template-rows: repeat(4, 75px) 1fr 50px;\\n  background: #9DC08B;\\n  border-radius: 8px;\\n  border: 2px solid #40513B;\\n}\\nbody .hero button {\\n  place-self: center;\\n  font-size: 2rem;\\n  width: 75%;\\n  height: 75%;\\n  padding: 0;\\n  border: none;\\n  background: #9DC08B;\\n  box-shadow: 0 1px 0 0 #40513B;\\n}\\nbody .hero button:hover {\\n  background: #609966;\\n}\\nbody .hero .credit {\\n  grid-row: 6;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  color: #EDF1D6;\\n  font-style: italic;\\n  background: #40513B;\\n  border-bottom-left-radius: 5px;\\n  border-bottom-right-radius: 5px;\\n}\\nbody #content {\\n  position: relative;\\n}\\nbody #content .bird img {\\n  height: auto;\\n  width: 30dvh;\\n  position: absolute;\\n  right: 0px;\\n  opacity: 0.8;\\n  z-index: 100;\\n}\\nbody dialog#addTask {\\n  padding: 0;\\n  border: 2px solid #40513B;\\n  border-radius: 8px;\\n  background: #9DC08B;\\n}\\nbody dialog#addTask .headline {\\n  margin: 10px;\\n  margin-bottom: 0;\\n  justify-content: center;\\n  font-size: 3rem;\\n  background: #609966;\\n  border-radius: 8px;\\n  border: 1px solid #40513B;\\n  padding-left: 1rem;\\n}\\nbody dialog#addTask form {\\n  display: grid;\\n  grid-template: 1fr 130px 50px/300px 150px;\\n  align-items: start;\\n  justify-content: center;\\n  margin: 10px;\\n}\\nbody dialog#addTask form textarea {\\n  width: 250px;\\n  height: 130px;\\n  resize: none;\\n  border-radius: 4px;\\n  border: 1px solid #40513B;\\n  background: #EDF1D6;\\n}\\nbody dialog#addTask form input {\\n  background: #EDF1D6;\\n  border-radius: 4px;\\n  border: 1px solid #40513B;\\n  padding: 3px;\\n}\\nbody dialog#addTask form label {\\n  padding: 10px;\\n}\\nbody dialog#addTask .prio {\\n  display: grid;\\n  gap: 5px;\\n}\\nbody dialog#addTask .prio .h3 {\\n  padding: 0;\\n  margin-bottom: 0;\\n}\\nbody dialog#addTask .prio div {\\n  padding-left: 10px;\\n}\\nbody dialog#addTask .h3 {\\n  margin: 0;\\n  margin-bottom: 5px;\\n  padding: 0;\\n  font-weight: 600;\\n}\\nbody dialog#addTask .buttons {\\n  width: 100%;\\n  height: 100%;\\n  align-self: center;\\n  display: flex;\\n  gap: 10px;\\n  justify-content: center;\\n  align-items: center;\\n}\\nbody dialog#addTask .buttons button {\\n  display: flex;\\n  font-size: 1.2rem;\\n  border: 1px solid #40513B;\\n  border-radius: 4px;\\n  padding: 4px 8px;\\n  background: #EDF1D6;\\n}\\nbody dialog#addTask .buttons #addTaskButton:hover {\\n  box-shadow: inset 0px 0px 25px 0px rgba(96, 153, 102, 0.4);\\n}\\nbody dialog#addTask .buttons #cancelTaskButton:hover {\\n  box-shadow: inset 0px 0px 25px 0px rgba(240, 128, 128, 0.3882352941);\\n}\\nbody dialog::backdrop {\\n  background: rgba(64, 81, 59, 0.6);\\n}\\nbody dialog#addProject {\\n  padding: 0;\\n  border: 2px solid #40513B;\\n  border-radius: 8px;\\n  background: #9DC08B;\\n  height: 300px;\\n  width: 350px;\\n  justify-content: center;\\n}\\nbody dialog#addProject p {\\n  margin: 10px;\\n  margin-bottom: 0;\\n  justify-content: center;\\n  font-size: 2.5rem;\\n  background: #609966;\\n  border-radius: 8px;\\n  border: 1px solid #40513B;\\n  padding-left: 1rem;\\n}\\nbody dialog#addProject .h3 {\\n  margin: 15px;\\n  margin-bottom: 0;\\n  padding: 0;\\n  font-weight: 600;\\n}\\nbody dialog#addProject input {\\n  margin: 0;\\n  margin-left: 15px;\\n  background: #EDF1D6;\\n  border-radius: 4px;\\n  border: 1px solid #40513B;\\n  padding: 3px;\\n}\\nbody dialog#addProject textarea {\\n  margin: 0;\\n  margin-left: 15px;\\n  width: 90%;\\n  height: 80px;\\n  resize: none;\\n  border-radius: 4px;\\n  border: 1px solid #40513B;\\n  background: #EDF1D6;\\n}\\nbody dialog#addProject .buttons {\\n  width: 96%;\\n  height: 100%;\\n  display: flex;\\n  gap: 10px;\\n  justify-content: flex-end;\\n  margin-top: 15px;\\n}\\nbody dialog#addProject button {\\n  display: flex;\\n  font-size: 1.2rem;\\n  border: 1px solid #40513B;\\n  border-radius: 4px;\\n  padding: 4px 8px;\\n  background: #EDF1D6;\\n}\\nbody dialog#addProject #addProjectButton:hover {\\n  box-shadow: inset 0px 0px 25px 0px rgba(96, 153, 102, 0.4);\\n}\\nbody dialog#addProject #cancelProjectButton:hover {\\n  box-shadow: inset 0px 0px 25px 0px rgba(240, 128, 128, 0.3882352941);\\n}\\nbody .allTasksContainer {\\n  height: 100%;\\n  width: 100%;\\n  position: relative;\\n  background: #EDF1D6;\\n  display: grid;\\n  grid-template: 120px 1fr/1fr;\\n}\\nbody .allTasksContainer .title {\\n  width: 50%;\\n  font-size: 3rem;\\n  margin: 50px 0 0 50px;\\n  padding-bottom: 20px;\\n  box-shadow: 0 2px 0 0 #40513B;\\n  font-weight: bold;\\n}\\nbody .allTasksContainer table {\\n  margin: 50px;\\n  align-self: start;\\n  justify-self: start;\\n}\\nbody .allTasksContainer table tr {\\n  box-shadow: 0 1px 0 0 rgba(64, 81, 59, 0.4);\\n}\\nbody .allTasksContainer table tr th {\\n  width: 0%;\\n  white-space: nowrap;\\n  font-weight: bold;\\n  font-size: 1.5rem;\\n  padding: 0;\\n  margin: 0;\\n  text-align: start;\\n  padding-bottom: 10px;\\n  padding-right: 50px;\\n}\\nbody .allTasksContainer table tr th:last-of-type {\\n  padding-right: 0;\\n}\\nbody .allTasksContainer table tr td {\\n  padding: 5px 10px 5px 0;\\n}\\nbody .allTasksContainer table tr td button {\\n  background: #EDF1D6;\\n  padding: 4px 8px;\\n  border: 2px solid #40513B;\\n  border-radius: 8px;\\n  font-weight: bold;\\n}\\nbody .allTasksContainer table tr td button:hover {\\n  background: rgba(64, 81, 59, 0.4);\\n}\\nbody .allTasksContainer table tr .centered {\\n  padding-left: 20px;\\n}\\nbody .allTasksContainer table tr textarea {\\n  font-style: italic;\\n  resize: none;\\n  width: 80%;\\n  height: 100%;\\n  background: #EDF1D6;\\n  border: none;\\n}\\nbody .allTasksContainer table .taskDone {\\n  opacity: 50%;\\n}\\n\\n.addSign {\\n  height: 75px;\\n  width: 75px;\\n  position: absolute;\\n  background: #40513B;\\n  bottom: 30px;\\n  right: 30px;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  color: #EDF1D6;\\n  font-size: 60px;\\n  border-radius: 50%;\\n}\\n\\n.addSign:hover {\\n  box-shadow: inset 0 0 30px 0 #263022;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin_todo/./src/styles.sass?./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B0%5D.use%5B3%5D");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin_todo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin_todo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.sass":
/*!*************************!*\
  !*** ./src/styles.sass ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_3_styles_sass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/resolve-url-loader/index.js!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[3]!./styles.sass */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[3]!./src/styles.sass\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_3_styles_sass__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_3_styles_sass__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_3_styles_sass__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_3_styles_sass__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin_todo/./src/styles.sass?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin_todo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin_todo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin_todo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin_todo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin_todo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin_todo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/allTasks.js":
/*!*************************!*\
  !*** ./src/allTasks.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\nfunction createAllTasks() {\n    const contentDiv = document.getElementById('content')\n\n    const allTasksContainer = document.createElement('div')\n    allTasksContainer.classList.add('allTasksContainer')\n\n    const title = document.createElement('div')\n    title.classList.add('title')\n    title.textContent = 'All Tasks'\n    \n    const displayTasksTable = document.createElement('table')\n\n    const tableHeaders = document.createElement('tr')\n    const taskTitle = document.createElement('th')\n    const description = document.createElement('th')\n    const dueDate = document.createElement('th')\n    const priority = document.createElement('th')\n    const done = document.createElement('th')\n    const removeTask = document.createElement('th')\n    taskTitle.textContent = 'Title'\n    description.textContent = 'Description'\n    dueDate.textContent = 'Due Date'\n    priority.textContent = 'Priority'\n    done.textContent = 'Done'\n    removeTask.textContent = 'Delete'\n\n    tableHeaders.append(taskTitle, description, dueDate, priority, done, removeTask)\n    displayTasksTable.appendChild(tableHeaders)\n\n    for (let i = 0; i < _index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tasks.length; i++) {\n        const row = document.createElement('tr')\n        const title = document.createElement('td')\n        const description = document.createElement('td')\n        const dueDate = document.createElement('td')\n        const priority = document.createElement('td')\n        const done = document.createElement('td')\n        const remove = document.createElement('td')\n\n        const removeButton = document.createElement('button')\n        const descriptionArea = document.createElement('textarea')\n        const checkbox = document.createElement('input')\n\n        title.textContent = _index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tasks[i].title\n        descriptionArea.textContent = _index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tasks[i].description\n        descriptionArea.readOnly = true\n        dueDate.textContent = _index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tasks[i].dueDate\n        priority.textContent = _index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tasks[i].priority\n        removeButton.textContent = 'X'\n        checkbox.type = 'checkbox'\n\n        checkbox.addEventListener('input', () => {\n            if (checkbox.checked) {\n                checkbox.parentElement.parentElement.classList.add('taskDone')\n                _index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tasks[i].done = true\n            } else {\n                checkbox.parentElement.parentElement.classList.remove('taskDone')\n                _index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tasks[i].done = false\n            }\n\n            console.log(_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tasks[i])\n        })\n        removeButton.addEventListener('click', () => {\n            removeButton.parentElement.parentElement.remove()\n            _index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tasks.splice(i, 1)\n            console.log(_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tasks)\n        })\n\n        done.classList.add('centered')\n        remove.classList.add('centered')\n        done.appendChild(checkbox)\n        description.appendChild(descriptionArea)\n        remove.appendChild(removeButton)\n        \n        row.append(title, description, dueDate, priority, done, remove)\n\n        displayTasksTable.appendChild(row)\n    }\n\n    allTasksContainer.append(title, displayTasksTable)\n    contentDiv.appendChild(allTasksContainer)\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createAllTasks);\n\n//# sourceURL=webpack://odin_todo/./src/allTasks.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _styles_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.sass */ \"./src/styles.sass\");\n/* harmony import */ var _allTasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./allTasks */ \"./src/allTasks.js\");\n\n\n\nconst allTasks = document.getElementById('allTasks')  // main hero buttons\nconst today = document.getElementById('today')\nconst weekly = document.getElementById('weekly')\nconst projects = document.getElementById('projects')\n\nconst logic = (() => {\n    let tasks = [\n    {\n        title: 'task1',\n        dueDate: 'date1',\n        description: '',\n        priority: 'high',\n        done: false,\n        project: ''\n    },\n    {\n        title: 'task2',\n        dueDate: 'date2',\n        description: 'a;fldknghaoweith',\n        priority: 'high',\n        done: false,\n        project: ''\n    },\n    {\n        title: 'task3',\n        dueDate: 'date3',\n        description: 'a;fldknghaoweasdddddddith',\n        priority: 'medium',\n        done: false,\n        project: ''\n    },\n]\n    let projects = []\n\n    return {\n        tasks,\n        projects\n    }\n})()\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (logic);\n\n;(0,_allTasks__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n\n//# sourceURL=webpack://odin_todo/./src/index.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;