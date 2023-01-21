/*!
 * w-jsonview-table v1.0.22
 * (c) 2018-2021 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self)["w-jsonview-table"]=r()}(this,(function(){"use strict";function e(r){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(r)}return function(e,r){void 0===r&&(r={});var t=r.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===t&&n.firstChild?n.insertBefore(o,n.firstChild):n.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}(".CompCssDJsonViewTable .jh-root, .jh-type-object, .jh-type-array, .jh-key, .jh-value, .jh-root tr{\r\n    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */\r\n    -moz-box-sizing: border-box;    /* Firefox, other Gecko */\r\n    box-sizing: border-box;         /* Opera/IE 8+ */\r\n}\r\n\r\n.CompCssDJsonViewTable .jh-key, .jh-value{\r\n    margin: 0;\r\n    padding: 0.2em;\r\n}\r\n\r\n.CompCssDJsonViewTable .jh-value{\r\n    border-left: 1px solid #ddd;\r\n}\r\n\r\n.CompCssDJsonViewTable .jh-type-number{\r\n    text-align: center;\r\n    color: #536dfe;\r\n}\r\n\r\n.CompCssDJsonViewTable .jh-type-bool-true{\r\n    text-align: center;\r\n    color: #9ccc65;\r\n}\r\n\r\n.CompCssDJsonViewTable .jh-type-bool-false{\r\n    text-align: center;\r\n    color: #9ccc65;\r\n}\r\n\r\n.CompCssDJsonViewTable .jh-type-bool-image {\r\n    width: 20px;\r\n    height: 20px;\r\n    margin-right: 5px;\r\n    vertical-align: bottom;\r\n}\r\n\r\n.CompCssDJsonViewTable .jh-type-string{\r\n    color: #ffab40;\r\n}\r\n\r\n.CompCssDJsonViewTable .jh-array-key{\r\n    font-size: small;\r\n    text-align: center;\r\n}\r\n\r\n.CompCssDJsonViewTable .jh-object-key, .jh-array-key{\r\n    color: #616161;\r\n    vertical-align: top;\r\n}\r\n\r\n.CompCssDJsonViewTable .jh-type-object > tr:nth-child(odd), .jh-type-array > tr:nth-child(odd){\r\n    background-color: #f5f5f5;\r\n}\r\n\r\n.CompCssDJsonViewTable .jh-type-object > tr:nth-child(even), .jh-type-array > tr:nth-child(even){\r\n    background-color: #fff;\r\n}\r\n\r\n.CompCssDJsonViewTable .jh-type-object, .jh-type-array{\r\n    width: 100%;\r\n    border-collapse: collapse;\r\n}\r\n\r\n.CompCssDJsonViewTable .jh-root{\r\n    border: 1px solid #ccc;\r\n    /* margin: 0.2em; */\r\n}\r\n\r\n.CompCssDJsonViewTable .jh-key{\r\n    text-align: left;\r\n}\r\n\r\n.CompCssDJsonViewTable .jh-type-object > tr, .jh-type-array > tr{\r\n    border: 1px solid #ddd;\r\n    border-bottom: none;\r\n}\r\n\r\n.CompCssDJsonViewTable .jh-type-object > tr:last-child, .jh-type-array > tr:last-child{\r\n    border-bottom: 1px solid #ddd;\r\n}\r\n\r\n.CompCssDJsonViewTable .jh-type-object > tr:hover, .jh-type-array > tr:hover{\r\n    border: 1px solid #F99927;\r\n}\r\n\r\n.CompCssDJsonViewTable .jh-empty{\r\n    font-style: italic;\r\n    color: #999;\r\n    font-size: small;\r\n}\r\n\r\n.CompCssDJsonViewTable .jh-a {\r\n    text-decoration: none;\r\n}\r\n\r\n.CompCssDJsonViewTable .jh-a:hover{\r\n    text-decoration: underline;\r\n}\r\n\r\n.CompCssDJsonViewTable .jh-a span.jh-type-string {\r\n    text-decoration: none;\r\n    color : #268ddd;\r\n    font-style: normal;\r\n}"),function(r,t,n){var o,a=(o="jh",function(e){return o+"-"+e}),s=a,l=s("type-string"),i=s("type-string")+" "+s("empty"),p=s("type-bool-true"),c=s("type-bool-false"),h=s("type-bool-image"),d=s("type-int")+" "+s("type-number"),y=s("type-float")+" "+s("type-number"),b=s("type-object"),u=s("key")+" "+s("object-key"),m=s("value")+" "+s("object-value"),f=s("type-object")+" "+s("empty"),C=s("type-function"),g=s("key")+" "+s("array-key"),j=s("value")+" "+s("array-value"),x=s("type-array"),w=s("type-array")+" "+s("empty"),k=s("a"),v=s("type-unk"),T=[].indexOf||function(e){for(var r=0,t=this.length;r<t;r++)if(r in this&&this[r]===e)return r;return-1};function D(e){return"[object Array]"===Object.prototype.toString.call(e)}function J(e,r,t){var n=document.createElement(e);return n.className=r,n.appendChild(document.createTextNode(""+t)),n}function V(e,r,t){var n,o,a=document.createElement(e);if(a.className=r,D(t))for(n=0,o=t.length;n<o;n+=1)a.appendChild(t[n]);else a.appendChild(t);return a}function E(e,r,t){var n=V("a",k,e);return n.setAttribute("href",r),n.setAttribute("target",t),n}function I(r){switch(e(r)){case"boolean":return 2;case"string":return 5;case"number":return r%1==0?3:4;case"function":return 7;default:return D(r)?1:r===Object(r)?6:99}}function A(e,r,t){var n,o,a,s,k,D,S,N,z,O,L,B,F=!0;switch(I(e)){case 2:var G=r.bool;if(o=document.createElement("div"),G.showImage){var H=document.createElement("img");H.setAttribute("class",h),H.setAttribute("src",""+(e?G.img.true:G.img.false)),o.appendChild(H)}G.showText&&o.appendChild(e?J("span",p,G.text.true):J("span",c,G.text.false)),n=o;break;case 5:n=""===e?J("span",i,"(Empty Text)"):J("span",l,e);break;case 3:n=J("span",d,e);break;case 4:n=J("span",y,e);break;case 6:for(a in S=[],L=r.hyperlinks.target,B=r.hyperlinks.keys,O=r.hyperlinks.enable&&B&&B.length>0,e)F=!1,k=A(z=e[a],r,a),s=J("th",u,a),k=O&&"string"==typeof z&&T.call(B,a)>=0?V("td",m,E(k,z,L)):V("td",m,k),(N=document.createElement("tr")).appendChild(s),N.appendChild(k),S.push(N);n=F?J("span",f,"(Empty Object)"):V("table",b,V("tbody","",S));break;case 7:n=J("span",C,e);break;case 1:if(e.length>0){S=[];var K=r.showArrayIndex;for(L=r.hyperlinks.target,B=r.hyperlinks.keys,O=t&&r.hyperlinks.enable&&B&&B.length>0&&T.call(B,t)>=0,a=0,D=e.length;a<D;a+=1)s=J("th",g,a),z=e[a],O&&"string"==typeof z?(k=A(z,r,a),k=V("td",j,E(k,z,L))):k=V("td",j,A(z,r,a)),N=document.createElement("tr"),K&&N.appendChild(s),N.appendChild(k),S.push(N);n=V("table",x,V("tbody","",S))}else n=J("span",w,"(Empty List)");break;default:n=J("span",v,e)}return n}function S(e){return e=function(e){if(e.bool){var r=e.bool;if(r.showText||r.showImage||(r.showImage=!1,r.showText=!0),r.showText)if(r.text){var t=r.text.true,n=r.text.false;5===I(t)&&""!==t||(r.text.true="true"),5===I(n)&&""!==n||(r.text.false="false")}else r.text={true:"true",false:"false"};r.showImage&&(r.img.true||r.img.false||(r.showImage=!1))}else e.bool={text:{true:"true",false:"false"},img:{true:"",false:""},showImage:!1,showText:!0};return e}(e=function(e){var r={enable:!1,keys:null,target:""};e.hyperlinks&&e.hyperlinks.enable&&(r.enable=!0,r.keys=D(e.hyperlinks.keys)?e.hyperlinks.keys:[],e.hyperlinks.target?r.target=""+e.hyperlinks.target:r.target="_blank");return e.hyperlinks=r,e}(e=function(e){void 0===e.showArrayIndex?e.showArrayIndex=!0:e.showArrayIndex=!!e.showArrayIndex;return e}(e)))}function N(e,r){var t;return(t=A(e,r=S(r||{}))).className=t.className+" "+a("root"),t}!function(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};r.innerHTML="",r.classList.add("CompCssDJsonViewTable");var n=N(e,t);r.appendChild(n)}(r,t,n)}}));
//# sourceMappingURL=w-jsonview-table.umd.js.map
