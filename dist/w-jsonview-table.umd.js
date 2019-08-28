/*!
 * w-jsonview-table v1.0.9
 * (c) 2018-2019 yuda-lyu(semisphere)
 * Released under the MIT License.
 */(function(a,b){"object"==typeof exports&&"undefined"!=typeof module?module.exports=b():"function"==typeof define&&define.amd?define(b):(a=a||self,a["w-jsonview-table"]=b())})(this,function(){'use strict';function a(b){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},a(b)}return function(a,b){void 0===b&&(b={});var c=b.insertAt;if(a&&"undefined"!=typeof document){var d=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style");e.type="text/css","top"===c?d.firstChild?d.insertBefore(e,d.firstChild):d.appendChild(e):d.appendChild(e),e.styleSheet?e.styleSheet.cssText=a:e.appendChild(document.createTextNode(a))}}(".CompCssDJsonViewTable .jh-root, .jh-type-object, .jh-type-array, .jh-key, .jh-value, .jh-root tr{\r\n    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */\r\n    -moz-box-sizing: border-box;    /* Firefox, other Gecko */\r\n    box-sizing: border-box;         /* Opera/IE 8+ */\r\n}\r\n\r\n.CompCssDJsonViewTable .jh-key, .jh-value{\r\n    margin: 0;\r\n    padding: 0.2em;\r\n}\r\n\r\n.CompCssDJsonViewTable .jh-value{\r\n    border-left: 1px solid #ddd;\r\n}\r\n\r\n.CompCssDJsonViewTable .jh-type-number{\r\n    text-align: center;\r\n    color: #f9ae58;\r\n}\r\n\r\n.CompCssDJsonViewTable .jh-type-bool-true{\r\n    text-align: center;\r\n    color: #ec5f66;\r\n}\r\n\r\n.CompCssDJsonViewTable .jh-type-bool-false{\r\n    text-align: center;\r\n    color: #ec5f66;\r\n}\r\n\r\n.CompCssDJsonViewTable .jh-type-bool-image {\r\n    width: 20px;\r\n    height: 20px;\r\n    margin-right: 5px;\r\n    vertical-align: bottom;\r\n}\r\n\r\n.CompCssDJsonViewTable .jh-type-string{\r\n    color: #86b25c;\r\n}\r\n\r\n.CompCssDJsonViewTable .jh-array-key{\r\n    font-size: small;\r\n    text-align: center;\r\n}\r\n\r\n.CompCssDJsonViewTable .jh-object-key, .jh-array-key{\r\n    color: #444;\r\n    vertical-align: top;\r\n}\r\n\r\n.CompCssDJsonViewTable .jh-type-object > tr:nth-child(odd), .jh-type-array > tr:nth-child(odd){\r\n    background-color: #f5f5f5;\r\n}\r\n\r\n.CompCssDJsonViewTable .jh-type-object > tr:nth-child(even), .jh-type-array > tr:nth-child(even){\r\n    background-color: #fff;\r\n}\r\n\r\n.CompCssDJsonViewTable .jh-type-object, .jh-type-array{\r\n    width: 100%;\r\n    border-collapse: collapse;\r\n}\r\n\r\n.CompCssDJsonViewTable .jh-root{\r\n    border: 1px solid #ccc;\r\n    margin: 0.2em;\r\n}\r\n\r\n.CompCssDJsonViewTable .jh-key{\r\n    text-align: left;\r\n}\r\n\r\n.CompCssDJsonViewTable .jh-type-object > tr, .jh-type-array > tr{\r\n    border: 1px solid #ddd;\r\n    border-bottom: none;\r\n}\r\n\r\n.CompCssDJsonViewTable .jh-type-object > tr:last-child, .jh-type-array > tr:last-child{\r\n    border-bottom: 1px solid #ddd;\r\n}\r\n\r\n.CompCssDJsonViewTable .jh-type-object > tr:hover, .jh-type-array > tr:hover{\r\n    border: 1px solid #F99927;\r\n}\r\n\r\n.CompCssDJsonViewTable .jh-empty{\r\n    font-style: italic;\r\n    color: #999;\r\n    font-size: small;\r\n}\r\n\r\n.CompCssDJsonViewTable .jh-a {\r\n    text-decoration: none;\r\n}\r\n\r\n.CompCssDJsonViewTable .jh-a:hover{\r\n    text-decoration: underline;\r\n}\r\n\r\n.CompCssDJsonViewTable .jh-a span.jh-type-string {\r\n    text-decoration: none;\r\n    color : #268ddd;\r\n    font-style: normal;\r\n}"),function(b,c,d){function e(a){return"[object Array]"===Object.prototype.toString.call(a)}function f(a,b,c){var d=document.createElement(a);return d.className=b,d.appendChild(document.createTextNode(""+c)),d}function g(a,b,c){var d,f,g=document.createElement(a);if(g.className=b,e(c))for(d=0,f=c.length;d<f;d+=1)g.appendChild(c[d]);else g.appendChild(c);return g}function h(b,c,d){var e=g("a",H,b);return e.setAttribute("href",c),e.setAttribute("target",d),e}function i(b){var c=a(b);return"boolean"===c?2:"string"===c?5:"number"===c?0==b%1?3:4:"function"===c?7:e(b)?1:b===Object(b)?6:99}function j(a,b,c){var d,e,k,l,m,n,o,q,r,H,K,L,M=!0,N=i(a);switch(N){case 2:var O=b.bool;if(e=document.createElement("div"),O.showImage){var P=document.createElement("img");P.setAttribute("class",v),P.setAttribute("src",""+(a?O.img["true"]:O.img["false"])),e.appendChild(P)}O.showText&&e.appendChild(a?f("span",t,O.text["true"]):f("span",u,O.text["false"])),d=e;break;case 5:d=""===a?f("span",s,"(Empty Text)"):f("span",p,a);break;case 3:d=f("span",w,a);break;case 4:d=f("span",x,a);break;case 6:for(k in o=[],K=b.hyperlinks.target,L=b.hyperlinks.keys,H=b.hyperlinks.enable&&L&&0<L.length,a)M=!1,r=a[k],m=j(r,b,k),l=f("th",z,k),m=H&&"string"==typeof r&&0<=J.call(L,k)?g("td",A,h(m,r,K)):g("td",A,m),q=document.createElement("tr"),q.appendChild(l),q.appendChild(m),o.push(q);d=M?f("span",B,"(Empty Object)"):g("table",y,g("tbody","",o));break;case 7:d=f("span",C,a);break;case 1:if(0<a.length){o=[];var Q=b.showArrayIndex;for(K=b.hyperlinks.target,L=b.hyperlinks.keys,H=c&&b.hyperlinks.enable&&L&&0<L.length&&0<=J.call(L,c),(k=0,n=a.length);k<n;k+=1)l=f("th",D,k),r=a[k],H&&"string"==typeof r?(m=j(r,b,k),m=g("td",E,h(m,r,K))):m=g("td",E,j(r,b,k)),q=document.createElement("tr"),Q&&q.appendChild(l),q.appendChild(m),o.push(q);d=g("table",F,g("tbody","",o))}else d=f("span",G,"(Empty List)");break;default:d=f("span",I,a);}return d}function k(a){return a=l(a),a=m(a),a=n(a),a}function l(a){return a.showArrayIndex=void 0===a.showArrayIndex||!!a.showArrayIndex,a}function m(a){var b={enable:!1,keys:null,target:""};return a.hyperlinks&&a.hyperlinks.enable&&(b.enable=!0,b.keys=e(a.hyperlinks.keys)?a.hyperlinks.keys:[],b.target=a.hyperlinks.target?""+a.hyperlinks.target:"_blank"),a.hyperlinks=b,a}function n(a){if(!a.bool)a.bool={text:{true:"true",false:"false"},img:{true:"",false:""},showImage:!1,showText:!0};else{var b=a.bool;if(b.showText||b.showImage||(b.showImage=!1,b.showText=!0),b.showText)if(!b.text)b.text={true:"true",false:"false"};else{var c=b.text["true"],d=b.text["false"];(5!==i(c)||""===c)&&(b.text["true"]="true"),(5!==i(d)||""===d)&&(b.text["false"]="false")}!b.showImage||b.img["true"]||b.img["false"]||(b.showImage=!1)}return a}function o(a,b){b=k(b||{});var c;return c=j(a,b),c.className=c.className+" "+q("root"),c}var q=function(a){return function(b){return a+"-"+b}}("jh"),r=q,p=r("type-string"),s=r("type-string")+" "+r("empty"),t=r("type-bool-true"),u=r("type-bool-false"),v=r("type-bool-image"),w=r("type-int")+" "+r("type-number"),x=r("type-float")+" "+r("type-number"),y=r("type-object"),z=r("key")+" "+r("object-key"),A=r("value")+" "+r("object-value"),B=r("type-object")+" "+r("empty"),C=r("type-function"),D=r("key")+" "+r("array-key"),E=r("value")+" "+r("array-value"),F=r("type-array"),G=r("type-array")+" "+r("empty"),H=r("a"),I=r("type-unk"),J=[].indexOf||function(a){for(var b=0,c=this.length;b<c;b++)if(b in this&&this[b]===a)return b;return-1};(function(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};b.innerHTML="",b.classList.add("CompCssDJsonViewTable");var d=o(a,c);b.appendChild(d)})(b,c,d)}});
//# sourceMappingURL=w-jsonview-table.umd.js.map
