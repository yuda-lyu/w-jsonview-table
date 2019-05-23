/*!
 * w-jsonview-table v1.0.0
 * (c) 2018-2019 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global['w-jsonview-table'] = factory());
}(this, function () { 'use strict';

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css = ".CompCssDJsonViewTable .jh-root, .jh-type-object, .jh-type-array, .jh-key, .jh-value, .jh-root tr{\r\n    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */\r\n    -moz-box-sizing: border-box;    /* Firefox, other Gecko */\r\n    box-sizing: border-box;         /* Opera/IE 8+ */\r\n}\r\n\r\n.CompCssDJsonViewTable .jh-key, .jh-value{\r\n    margin: 0;\r\n    padding: 0.2em;\r\n}\r\n\r\n.CompCssDJsonViewTable .jh-value{\r\n    border-left: 1px solid #ddd;\r\n}\r\n\r\n.CompCssDJsonViewTable .jh-type-number{\r\n    text-align: center;\r\n    color: #f9ae58;\r\n}\r\n\r\n.CompCssDJsonViewTable .jh-type-bool-true{\r\n    text-align: center;\r\n    color: #ec5f66;\r\n}\r\n\r\n.CompCssDJsonViewTable .jh-type-bool-false{\r\n    text-align: center;\r\n    color: #ec5f66;\r\n}\r\n\r\n.CompCssDJsonViewTable .jh-type-bool-image {\r\n    width: 20px;\r\n    height: 20px;\r\n    margin-right: 5px;\r\n    vertical-align: bottom;\r\n}\r\n\r\n.CompCssDJsonViewTable .jh-type-string{\r\n    color: #86b25c;\r\n}\r\n\r\n.CompCssDJsonViewTable .jh-array-key{\r\n    font-size: small;\r\n    text-align: center;\r\n}\r\n\r\n.CompCssDJsonViewTable .jh-object-key, .jh-array-key{\r\n    color: #444;\r\n    vertical-align: top;\r\n}\r\n\r\n.CompCssDJsonViewTable .jh-type-object > tr:nth-child(odd), .jh-type-array > tr:nth-child(odd){\r\n    background-color: #f5f5f5;\r\n}\r\n\r\n.CompCssDJsonViewTable .jh-type-object > tr:nth-child(even), .jh-type-array > tr:nth-child(even){\r\n    background-color: #fff;\r\n}\r\n\r\n.CompCssDJsonViewTable .jh-type-object, .jh-type-array{\r\n    width: 100%;\r\n    border-collapse: collapse;\r\n}\r\n\r\n.CompCssDJsonViewTable .jh-root{\r\n    border: 1px solid #ccc;\r\n    margin: 0.2em;\r\n}\r\n\r\n.CompCssDJsonViewTable .jh-key{\r\n    text-align: left;\r\n}\r\n\r\n.CompCssDJsonViewTable .jh-type-object > tr, .jh-type-array > tr{\r\n    border: 1px solid #ddd;\r\n    border-bottom: none;\r\n}\r\n\r\n.CompCssDJsonViewTable .jh-type-object > tr:last-child, .jh-type-array > tr:last-child{\r\n    border-bottom: 1px solid #ddd;\r\n}\r\n\r\n.CompCssDJsonViewTable .jh-type-object > tr:hover, .jh-type-array > tr:hover{\r\n    border: 1px solid #F99927;\r\n}\r\n\r\n.CompCssDJsonViewTable .jh-empty{\r\n    font-style: italic;\r\n    color: #999;\r\n    font-size: small;\r\n}\r\n\r\n.CompCssDJsonViewTable .jh-a {\r\n    text-decoration: none;\r\n}\r\n\r\n.CompCssDJsonViewTable .jh-a:hover{\r\n    text-decoration: underline;\r\n}\r\n\r\n.CompCssDJsonViewTable .jh-a span.jh-type-string {\r\n    text-decoration: none;\r\n    color : #268ddd;\r\n    font-style: normal;\r\n}";
  styleInject(css);

  /**
   * 前端通過元素展示Json資料為表格，因 [Fork: {@link https://github.com/marianoguerra/json.human.js json.human.js}] 的js與css設定無法進行模組化，自己下載來修改
   *
   * @export
   * @param {Object} jsonObj 輸入Json物件
   * @param {Element} rootElem 輸入初始化元素
   * @param {Object} [option={}] 輸入設定物件，預設為空物件
   * @param {Boolean} [option.expanded=false] 輸入是否預先展開，預設為false
   */

  function viewJsonTable(jsonObj, rootElem, option) {
    var prefixer = makePrefixer('jh');
    var p = prefixer;
    var ARRAY = 1;
    var BOOL = 2;
    var INT = 3;
    var FLOAT = 4;
    var STRING = 5;
    var OBJECT = 6;
    var FUNCTION = 7;
    var UNK = 99;
    var STRING_CLASS_NAME = p('type-string');
    var STRING_EMPTY_CLASS_NAME = p('type-string') + ' ' + p('empty');
    var BOOL_TRUE_CLASS_NAME = p('type-bool-true');
    var BOOL_FALSE_CLASS_NAME = p('type-bool-false');
    var BOOL_IMAGE = p('type-bool-image');
    var INT_CLASS_NAME = p('type-int') + ' ' + p('type-number');
    var FLOAT_CLASS_NAME = p('type-float') + ' ' + p('type-number');
    var OBJECT_CLASS_NAME = p('type-object');
    var OBJ_KEY_CLASS_NAME = p('key') + ' ' + p('object-key');
    var OBJ_VAL_CLASS_NAME = p('value') + ' ' + p('object-value');
    var OBJ_EMPTY_CLASS_NAME = p('type-object') + ' ' + p('empty');
    var FUNCTION_CLASS_NAME = p('type-function');
    var ARRAY_KEY_CLASS_NAME = p('key') + ' ' + p('array-key');
    var ARRAY_VAL_CLASS_NAME = p('value') + ' ' + p('array-value');
    var ARRAY_CLASS_NAME = p('type-array');
    var ARRAY_EMPTY_CLASS_NAME = p('type-array') + ' ' + p('empty');
    var HYPERLINK_CLASS_NAME = p('a');
    var UNKNOWN_CLASS_NAME = p('type-unk');

    var indexOf = [].indexOf || function (item) {
      for (var i = 0, l = this.length; i < l; i++) {
        if (i in this && this[i] === item) return i;
      }

      return -1;
    }; //Init


    Init(jsonObj, rootElem, option);
    /**
     * Initialize
     * @param {Object} jsonObj 輸入Json物件
     * @param {Element} rootElem 輸入初始化元素
     * @param {Object} [option={}] 輸入設定物件，預設為空物件
     * @param {Boolean} [option.expanded=false] 輸入是否預先展開，預設為false
     */

    function Init(jsonObj, rootElem) {
      var option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      //     // Show or hide Array-Indices in the output
      //     showArrayIndex: true,
      //     // Hyperlinks Option
      //     // Enable <a> tag in the output html based on object keys
      //     // Supports only strings and arrays
      //     hyperlinks: {
      //         enable: true,
      //         keys: ['url'], // Keys which will be output as links
      //         target: '_blank' // 'target' attribute of a
      //     },
      //     // Options for displaying bool
      //     bool: {
      //         // Show text? And what text for true & false?
      //         showText: true,
      //         text: {
      //             true: 'Yes',
      //             false: 'No'
      //         },
      //         // Show image? And which images (urls)?
      //         showImage: true,
      //         img: {
      //             true: 'css/true.png',
      //             false: 'css/false.png'
      //         }
      //     }
      // }
      //clear


      rootElem.innerHTML = ''; //add class

      rootElem.classList.add('CompCssDJsonViewTable'); //render

      var node = format(jsonObj, option);
      rootElem.appendChild(node);
    }

    function makePrefixer(prefix) {
      return function (name) {
        return prefix + '-' + name;
      };
    }

    function isArray(obj) {
      return Object.prototype.toString.call(obj) === '[object Array]';
    }

    function sn(tagName, className, data) {
      var result = document.createElement(tagName);
      result.className = className;
      result.appendChild(document.createTextNode('' + data));
      return result;
    }

    function scn(tagName, className, child) {
      var result = document.createElement(tagName);
      var i;
      var len;
      result.className = className;

      if (isArray(child)) {
        for (i = 0, len = child.length; i < len; i += 1) {
          result.appendChild(child[i]);
        }
      } else {
        result.appendChild(child);
      }

      return result;
    }

    function linkNode(child, href, target) {
      var a = scn('a', HYPERLINK_CLASS_NAME, child);
      a.setAttribute('href', href);
      a.setAttribute('target', target);
      return a;
    }

    function getType(obj) {
      var type = _typeof(obj);

      switch (type) {
        case 'boolean':
          return BOOL;

        case 'string':
          return STRING;

        case 'number':
          return obj % 1 === 0 ? INT : FLOAT;

        case 'function':
          return FUNCTION;

        default:
          if (isArray(obj)) {
            return ARRAY;
          } else if (obj === Object(obj)) {
            return OBJECT;
          } else {
            return UNK;
          }

      }
    }

    function _format(data, options, parentKey) {
      var result;
      var container;
      var key;
      var keyNode;
      var valNode;
      var len;
      var childs;
      var tr;
      var value;
      var isEmpty = true;
      var type = getType(data); // Initialized & used only in case of objects & arrays

      var hyperlinksEnabled, aTarget, hyperlinkKeys;

      switch (type) {
        case BOOL:
          var boolOpt = options.bool;
          container = document.createElement('div');

          if (boolOpt.showImage) {
            var img = document.createElement('img');
            img.setAttribute('class', BOOL_IMAGE);
            img.setAttribute('src', '' + (data ? boolOpt.img["true"] : boolOpt.img["false"]));
            container.appendChild(img);
          }

          if (boolOpt.showText) {
            container.appendChild(data ? sn('span', BOOL_TRUE_CLASS_NAME, boolOpt.text["true"]) : sn('span', BOOL_FALSE_CLASS_NAME, boolOpt.text["false"]));
          }

          result = container;
          break;

        case STRING:
          if (data === '') {
            result = sn('span', STRING_EMPTY_CLASS_NAME, '(Empty Text)');
          } else {
            result = sn('span', STRING_CLASS_NAME, data);
          }

          break;

        case INT:
          result = sn('span', INT_CLASS_NAME, data);
          break;

        case FLOAT:
          result = sn('span', FLOAT_CLASS_NAME, data);
          break;

        case OBJECT:
          childs = [];
          aTarget = options.hyperlinks.target;
          hyperlinkKeys = options.hyperlinks.keys; // Is Hyperlink Key

          hyperlinksEnabled = options.hyperlinks.enable && hyperlinkKeys && hyperlinkKeys.length > 0;

          for (key in data) {
            isEmpty = false;
            value = data[key];
            valNode = _format(value, options, key);
            keyNode = sn('th', OBJ_KEY_CLASS_NAME, key);

            if (hyperlinksEnabled && typeof value === 'string' && indexOf.call(hyperlinkKeys, key) >= 0) {
              valNode = scn('td', OBJ_VAL_CLASS_NAME, linkNode(valNode, value, aTarget));
            } else {
              valNode = scn('td', OBJ_VAL_CLASS_NAME, valNode);
            }

            tr = document.createElement('tr');
            tr.appendChild(keyNode);
            tr.appendChild(valNode);
            childs.push(tr);
          }

          if (isEmpty) {
            result = sn('span', OBJ_EMPTY_CLASS_NAME, '(Empty Object)');
          } else {
            result = scn('table', OBJECT_CLASS_NAME, scn('tbody', '', childs));
          }

          break;

        case FUNCTION:
          result = sn('span', FUNCTION_CLASS_NAME, data);
          break;

        case ARRAY:
          if (data.length > 0) {
            childs = [];
            var showArrayIndices = options.showArrayIndex;
            aTarget = options.hyperlinks.target;
            hyperlinkKeys = options.hyperlinks.keys; // Hyperlink of arrays?

            hyperlinksEnabled = parentKey && options.hyperlinks.enable && hyperlinkKeys && hyperlinkKeys.length > 0 && indexOf.call(hyperlinkKeys, parentKey) >= 0;

            for (key = 0, len = data.length; key < len; key += 1) {
              keyNode = sn('th', ARRAY_KEY_CLASS_NAME, key);
              value = data[key];

              if (hyperlinksEnabled && typeof value === 'string') {
                valNode = _format(value, options, key);
                valNode = scn('td', ARRAY_VAL_CLASS_NAME, linkNode(valNode, value, aTarget));
              } else {
                valNode = scn('td', ARRAY_VAL_CLASS_NAME, _format(value, options, key));
              }

              tr = document.createElement('tr');

              if (showArrayIndices) {
                tr.appendChild(keyNode);
              }

              tr.appendChild(valNode);
              childs.push(tr);
            }

            result = scn('table', ARRAY_CLASS_NAME, scn('tbody', '', childs));
          } else {
            result = sn('span', ARRAY_EMPTY_CLASS_NAME, '(Empty List)');
          }

          break;

        default:
          result = sn('span', UNKNOWN_CLASS_NAME, data);
          break;
      }

      return result;
    }

    function validateOptions(options) {
      options = validateArrayIndexOption(options);
      options = validateHyperlinkOptions(options);
      options = validateBoolOptions(options); // Add any more option validators here

      return options;
    }

    function validateArrayIndexOption(options) {
      if (options.showArrayIndex === undefined) {
        options.showArrayIndex = true;
      } else {
        // Force to boolean just in case
        options.showArrayIndex = !!options.showArrayIndex;
      }

      return options;
    }

    function validateHyperlinkOptions(options) {
      var hyperlinks = {
        enable: false,
        keys: null,
        target: ''
      };

      if (options.hyperlinks && options.hyperlinks.enable) {
        hyperlinks.enable = true;
        hyperlinks.keys = isArray(options.hyperlinks.keys) ? options.hyperlinks.keys : [];

        if (options.hyperlinks.target) {
          hyperlinks.target = '' + options.hyperlinks.target;
        } else {
          hyperlinks.target = '_blank';
        }
      }

      options.hyperlinks = hyperlinks;
      return options;
    }

    function validateBoolOptions(options) {
      if (!options.bool) {
        options.bool = {
          text: {
            "true": 'true',
            "false": 'false'
          },
          img: {
            "true": '',
            "false": ''
          },
          showImage: false,
          showText: true
        };
      } else {
        var boolOptions = options.bool; // Show text if no option

        if (!boolOptions.showText && !boolOptions.showImage) {
          boolOptions.showImage = false;
          boolOptions.showText = true;
        }

        if (boolOptions.showText) {
          if (!boolOptions.text) {
            boolOptions.text = {
              "true": 'true',
              "false": 'false'
            };
          } else {
            var t = boolOptions.text["true"];
            var f = boolOptions.text["false"];

            if (getType(t) !== STRING || t === '') {
              boolOptions.text["true"] = 'true';
            }

            if (getType(f) !== STRING || f === '') {
              boolOptions.text["false"] = 'false';
            }
          }
        }

        if (boolOptions.showImage) {
          if (!boolOptions.img["true"] && !boolOptions.img["false"]) {
            boolOptions.showImage = false;
          }
        }
      }

      return options;
    }

    function format(data, options) {
      options = validateOptions(options || {});
      var result;
      result = _format(data, options);
      result.className = result.className + ' ' + prefixer('root');
      return result;
    }
  }

  return viewJsonTable;

}));
//# sourceMappingURL=w-jsonview-table.umd.js.map
