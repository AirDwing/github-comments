!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.gc=t():e.gc=t()}(this,function(){return function(e){function t(n){if(o[n])return o[n].exports;var i=o[n]={exports:{},id:n,loaded:!1};return e[n].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){"use strict";function n(e){if(Array.isArray(e)){for(var t=0,o=Array(e.length);t<e.length;t++)o[t]=e[t];return o}return Array.from(e)}o(1),o(5);var i={};i.package=o(7);var c=o(8),m='\n<div class="gc-comments-item">\n    <div class="gc-comments-item-hd">\n        <img class="gc-comments-item-hd-avatar" src="{{user.avatar_url}}" />\n        <a href="https://github.com/{{user.login}}" class="gc-comments-item-hd-user">{{user.login}}</a>\n        <a href="{{html_url}}" class="gc-comments-item-hd-date">{{created_at}}</a>\n    </div>\n    <div class="gc-comments-item-bd">\n        <p>{{body_html}}</p>\n    </div>\n</div>\n';i.load=function(e,t,o){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"(⊙o⊙) No comments";o.className+=" gc-comments";var r="https://github.com/"+e+"/issues/"+t,s=e.split("/"),a=s[0],d=s[1];[].concat(n(o.querySelectorAll('a[href="{{issues_link}}"],a[href="issues_link"]'))).forEach(function(e){e.href=r,e.innerHTML=e.innerHTML.replace(/(\{\{issues_link\}\}|issues_link)/g,r)});var l=o.querySelector(".gc-comments-title");l&&(l.innerHTML+='<div style="display:inline-block;position:relative;top:0.15em;height:20px;"><iframe style="display:inline;" src="https://ghbtns.com/github-btn.html?user='+a+"&repo="+d+'&type=star&count=true" frameborder="0" scrolling="0" width="120px" height="20px"></iframe></div>'),o.innerHTML+='<div class="gc-comments-loading">Loading</div>';var g=new XMLHttpRequest;g.open("GET","https://api.github.com/repos/nimojs/github-comments/issues/1/comments?per_page=100"),g.setRequestHeader("Accept","application/vnd.github.full+json"),g.onreadystatechange=function(){if(4===this.readyState){var e=document.querySelector(".gc-comments-loading");e&&(e.style="display: none");var t=JSON.parse(this.responseText);if(this.status>=200&&this.status<400){if(0===t.length)return void(o.innerHTML+='<div class="gc-comments-nocomments">'+i+"</div>");var n=[];t.forEach(function(e){e.updated_at=c(e.updated_at),e.created_at=c(e.created_at),n.push(m.replace(/\{\{([^{}]+)\}\}/g,function(){var t=arguments.length<=1?void 0:arguments[1],o=e;return t.split(".").forEach(function(e){o=o[e]}),o}))}),o.innerHTML+=n.join("")}else t.message&&(o.innerHTML+="<div>"+t.message+"</div>")}},g.send()},document.addEventListener("DOMContentLoaded",function(){return"undefined"==typeof window.__NIMO__gc_load&&(window.__NIMO__gc_load=!0,void[].concat(n(document.getElementsByClassName("gc-comments"))).forEach(function(e){var t=e.attributes;t["data-repos"]&&i.load(t["data-repos"].value,t["data-issues"].value,e,t["data-nocommentstip"]?t["data-nocommentstip"].value:void 0)}))}),e.exports=i},function(e,t,o){var n=o(2);"string"==typeof n&&(n=[[e.id,n,""]]);o(4)(n,{});n.locals&&(e.exports=n.locals)},function(e,t,o){t=e.exports=o(3)(),t.push([e.id,'.gc-comments-item-bd{font-family:Helvetica Neue,Helvetica,Segoe UI,Arial,freesans,sans-serif;font-size:1em;line-height:1.6;word-wrap:break-word}.gc-comments-item-bd:before{display:table;content:""}.gc-comments-item-bd:after{display:table;clear:both;content:""}.gc-comments-item-bd>:first-child{margin-top:0!important}.gc-comments-item-bd>:last-child{margin-bottom:0!important}.gc-comments-item-bd a:not([href]){color:inherit;text-decoration:none}.gc-comments-item-bd .absent{color:#c00}.gc-comments-item-bd .anchor{display:inline-block;padding-right:2px;margin-left:-18px}.gc-comments-item-bd .anchor:focus{outline:none}.gc-comments-item-bd h1,.gc-comments-item-bd h2,.gc-comments-item-bd h3,.gc-comments-item-bd h4,.gc-comments-item-bd h5,.gc-comments-item-bd h6{margin-top:1em;margin-bottom:16px;font-weight:700;line-height:1.4}.gc-comments-item-bd h1 .octicon-link,.gc-comments-item-bd h2 .octicon-link,.gc-comments-item-bd h3 .octicon-link,.gc-comments-item-bd h4 .octicon-link,.gc-comments-item-bd h5 .octicon-link,.gc-comments-item-bd h6 .octicon-link{color:#000;vertical-align:middle;visibility:hidden}.gc-comments-item-bd h1:hover .anchor,.gc-comments-item-bd h2:hover .anchor,.gc-comments-item-bd h3:hover .anchor,.gc-comments-item-bd h4:hover .anchor,.gc-comments-item-bd h5:hover .anchor,.gc-comments-item-bd h6:hover .anchor{text-decoration:none}.gc-comments-item-bd h1:hover .anchor .octicon-link,.gc-comments-item-bd h2:hover .anchor .octicon-link,.gc-comments-item-bd h3:hover .anchor .octicon-link,.gc-comments-item-bd h4:hover .anchor .octicon-link,.gc-comments-item-bd h5:hover .anchor .octicon-link,.gc-comments-item-bd h6:hover .anchor .octicon-link{visibility:visible}.gc-comments-item-bd h1 code,.gc-comments-item-bd h1 tt,.gc-comments-item-bd h2 code,.gc-comments-item-bd h2 tt,.gc-comments-item-bd h3 code,.gc-comments-item-bd h3 tt,.gc-comments-item-bd h4 code,.gc-comments-item-bd h4 tt,.gc-comments-item-bd h5 code,.gc-comments-item-bd h5 tt,.gc-comments-item-bd h6 code,.gc-comments-item-bd h6 tt{font-size:inherit}.gc-comments-item-bd h1{padding-bottom:.3em;font-size:2.25em;line-height:1.2;border-bottom:1px solid #eee}.gc-comments-item-bd h1 .anchor{line-height:1}.gc-comments-item-bd h2{padding-bottom:.3em;font-size:1.75em;line-height:1.225;border-bottom:1px solid #eee}.gc-comments-item-bd h2 .anchor{line-height:1}.gc-comments-item-bd h3{font-size:1.5em;line-height:1.43}.gc-comments-item-bd h3 .anchor{line-height:1.2}.gc-comments-item-bd h4{font-size:1.25em}.gc-comments-item-bd h4 .anchor{line-height:1.2}.gc-comments-item-bd h5{font-size:1em}.gc-comments-item-bd h5 .anchor{line-height:1.1}.gc-comments-item-bd h6{font-size:1em;color:#777}.gc-comments-item-bd h6 .anchor{line-height:1.1}.gc-comments-item-bd blockquote,.gc-comments-item-bd dl,.gc-comments-item-bd ol,.gc-comments-item-bd p,.gc-comments-item-bd pre,.gc-comments-item-bd table,.gc-comments-item-bd ul{margin-top:0;margin-bottom:16px}.gc-comments-item-bd hr{height:4px;padding:0;margin:16px 0;background-color:#e7e7e7;border:0 none}.gc-comments-item-bd ol,.gc-comments-item-bd ul{padding-left:2em}.gc-comments-item-bd ol.no-list,.gc-comments-item-bd ul.no-list{padding:0;list-style-type:none}.gc-comments-item-bd ol ol,.gc-comments-item-bd ol ul,.gc-comments-item-bd ul ol,.gc-comments-item-bd ul ul{margin-top:0;margin-bottom:0}.gc-comments-item-bd li>p{margin-top:16px}.gc-comments-item-bd dl{padding:0}.gc-comments-item-bd dl dt{padding:0;margin-top:16px;font-size:1em;font-style:italic;font-weight:700}.gc-comments-item-bd dl dd{padding:0 16px;margin-bottom:16px}.gc-comments-item-bd blockquote{padding:0 15px;color:#777;border-left:4px solid #ddd}.gc-comments-item-bd blockquote>:first-child{margin-top:0}.gc-comments-item-bd blockquote>:last-child{margin-bottom:0}.gc-comments-item-bd table{display:block;width:100%;overflow:auto;word-break:normal;word-break:keep-all}.gc-comments-item-bd table th{font-weight:700}.gc-comments-item-bd table td,.gc-comments-item-bd table th{padding:6px 13px;border:1px solid #ddd}.gc-comments-item-bd table tr{background-color:#fff;border-top:1px solid #ccc}.gc-comments-item-bd table tr:nth-child(2n){background-color:#f8f8f8}.gc-comments-item-bd img{max-width:100%;box-sizing:content-box;background-color:#fff}.gc-comments-item-bd img[align=right]{padding-left:20px}.gc-comments-item-bd img[align=left]{padding-right:20px}.gc-comments-item-bd .emoji{max-width:none}.gc-comments-item-bd span.frame{display:block;overflow:hidden}.gc-comments-item-bd span.frame>span{display:block;float:left;width:auto;padding:7px;margin:13px 0 0;overflow:hidden;border:1px solid #ddd}.gc-comments-item-bd span.frame span img{display:block;float:left}.gc-comments-item-bd span.frame span span{display:block;padding:5px 0 0;clear:both;color:#333}.gc-comments-item-bd span.align-center{display:block;overflow:hidden;clear:both}.gc-comments-item-bd span.align-center>span{display:block;margin:13px auto 0;overflow:hidden;text-align:center}.gc-comments-item-bd span.align-center span img{margin:0 auto;text-align:center}.gc-comments-item-bd span.align-right{display:block;overflow:hidden;clear:both}.gc-comments-item-bd span.align-right>span{display:block;margin:13px 0 0;overflow:hidden;text-align:right}.gc-comments-item-bd span.align-right span img{margin:0;text-align:right}.gc-comments-item-bd span.float-left{display:block;float:left;margin-right:13px;overflow:hidden}.gc-comments-item-bd span.float-left span{margin:13px 0 0}.gc-comments-item-bd span.float-right{display:block;float:right;margin-left:13px;overflow:hidden}.gc-comments-item-bd span.float-right>span{display:block;margin:13px auto 0;overflow:hidden;text-align:right}.gc-comments-item-bd code,.gc-comments-item-bd tt{padding:0;padding-top:.2em;padding-bottom:.2em;margin:0;font-size:85%;background-color:rgba(0,0,0,.04);border-radius:3px}.gc-comments-item-bd code:after,.gc-comments-item-bd code:before,.gc-comments-item-bd tt:after,.gc-comments-item-bd tt:before{letter-spacing:-.2em;content:"\\A0"}.gc-comments-item-bd code br,.gc-comments-item-bd tt br{display:none}.gc-comments-item-bd del code{text-decoration:inherit}.gc-comments-item-bd pre>code{padding:0;margin:0;font-size:100%;word-break:normal;white-space:pre;background:transparent;border:0}.gc-comments-item-bd .highlight{margin-bottom:16px}.gc-comments-item-bd .highlight pre,.gc-comments-item-bd pre{padding:16px;overflow:auto;font-size:85%;line-height:1.45;background-color:#f7f7f7;border-radius:3px}.gc-comments-item-bd .highlight pre{margin-bottom:0;word-break:normal}.gc-comments-item-bd pre{word-wrap:normal}.gc-comments-item-bd pre code,.gc-comments-item-bd pre tt{display:inline;max-width:none;padding:0;margin:0;overflow:initial;line-height:inherit;word-wrap:normal;background-color:transparent;border:0}.gc-comments-item-bd pre code:after,.gc-comments-item-bd pre code:before,.gc-comments-item-bd pre tt:after,.gc-comments-item-bd pre tt:before{content:normal}.gc-comments-item-bd kbd{display:inline-block;padding:3px 5px;font-size:11px;line-height:10px;color:#555;vertical-align:middle;background-color:#fcfcfc;border:1px solid #ccc;border-bottom-color:#bbb;border-radius:3px;box-shadow:inset 0 -1px 0 #bbb}.gc-comments-item-bd .pl-c{color:#969896}.gc-comments-item-bd .pl-c1,.gc-comments-item-bd .pl-s .pl-v{color:#0086b3}.gc-comments-item-bd .pl-e,.gc-comments-item-bd .pl-en{color:#795da3}.gc-comments-item-bd .pl-s .pl-s1,.gc-comments-item-bd .pl-smi{color:#333}.gc-comments-item-bd .pl-ent{color:#63a35c}.gc-comments-item-bd .pl-k{color:#a71d5d}.gc-comments-item-bd .pl-pds,.gc-comments-item-bd .pl-s,.gc-comments-item-bd .pl-s .pl-pse .pl-s1,.gc-comments-item-bd .pl-sr,.gc-comments-item-bd .pl-sr .pl-cce,.gc-comments-item-bd .pl-sr .pl-sra,.gc-comments-item-bd .pl-sr .pl-sre{color:#183691}.gc-comments-item-bd .pl-v{color:#ed6a43}.gc-comments-item-bd .pl-id{color:#b52a1d}.gc-comments-item-bd .pl-ii{background-color:#b52a1d;color:#f8f8f8}.gc-comments-item-bd .pl-sr .pl-cce{color:#63a35c;font-weight:700}.gc-comments-item-bd .pl-ml{color:#693a17}.gc-comments-item-bd .pl-mh,.gc-comments-item-bd .pl-mh .pl-en,.gc-comments-item-bd .pl-ms{color:#1d3e81;font-weight:700}.gc-comments-item-bd .pl-mq{color:teal}.gc-comments-item-bd .pl-mi{color:#333;font-style:italic}.gc-comments-item-bd .pl-mb{color:#333;font-weight:700}.gc-comments-item-bd .pl-md{background-color:#ffecec;color:#bd2c00}.gc-comments-item-bd .pl-mi1{background-color:#eaffea;color:#55a532}.gc-comments-item-bd .pl-mdr{color:#795da3;font-weight:700}.gc-comments-item-bd .pl-mo{color:#1d3e81}',""])},function(e,t){"use strict";e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var o=this[t];o[2]?e.push("@media "+o[2]+"{"+o[1]+"}"):e.push(o[1])}return e.join("")},e.i=function(t,o){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},i=0;i<this.length;i++){var c=this[i][0];"number"==typeof c&&(n[c]=!0)}for(i=0;i<t.length;i++){var m=t[i];"number"==typeof m[0]&&n[m[0]]||(o&&!m[2]?m[2]=o:o&&(m[2]="("+m[2]+") and ("+o+")"),e.push(m))}},e}},function(e,t,o){function n(e,t){for(var o=0;o<e.length;o++){var n=e[o],i=p[n.id];if(i){i.refs++;for(var c=0;c<i.parts.length;c++)i.parts[c](n.parts[c]);for(;c<n.parts.length;c++)i.parts.push(a(n.parts[c],t))}else{for(var m=[],c=0;c<n.parts.length;c++)m.push(a(n.parts[c],t));p[n.id]={id:n.id,refs:1,parts:m}}}}function i(e){for(var t=[],o={},n=0;n<e.length;n++){var i=e[n],c=i[0],m=i[1],r=i[2],s=i[3],a={css:m,media:r,sourceMap:s};o[c]?o[c].parts.push(a):t.push(o[c]={id:c,parts:[a]})}return t}function c(e,t){var o=f(),n=x[x.length-1];if("top"===e.insertAt)n?n.nextSibling?o.insertBefore(t,n.nextSibling):o.appendChild(t):o.insertBefore(t,o.firstChild),x.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");o.appendChild(t)}}function m(e){e.parentNode.removeChild(e);var t=x.indexOf(e);t>=0&&x.splice(t,1)}function r(e){var t=document.createElement("style");return t.type="text/css",c(e,t),t}function s(e){var t=document.createElement("link");return t.rel="stylesheet",c(e,t),t}function a(e,t){var o,n,i;if(t.singleton){var c=v++;o=u||(u=r(t)),n=d.bind(null,o,c,!1),i=d.bind(null,o,c,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(o=s(t),n=g.bind(null,o),i=function(){m(o),o.href&&URL.revokeObjectURL(o.href)}):(o=r(t),n=l.bind(null,o),i=function(){m(o)});return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else i()}}function d(e,t,o,n){var i=o?"":n.css;if(e.styleSheet)e.styleSheet.cssText=y(t,i);else{var c=document.createTextNode(i),m=e.childNodes;m[t]&&e.removeChild(m[t]),m.length?e.insertBefore(c,m[t]):e.appendChild(c)}}function l(e,t){var o=t.css,n=t.media;if(n&&e.setAttribute("media",n),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}function g(e,t){var o=t.css,n=t.sourceMap;n&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");var i=new Blob([o],{type:"text/css"}),c=e.href;e.href=URL.createObjectURL(i),c&&URL.revokeObjectURL(c)}var p={},b=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},h=b(function(){return/msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())}),f=b(function(){return document.head||document.getElementsByTagName("head")[0]}),u=null,v=0,x=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=h()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var o=i(e);return n(o,t),function(e){for(var c=[],m=0;m<o.length;m++){var r=o[m],s=p[r.id];s.refs--,c.push(s)}if(e){var a=i(e);n(a,t)}for(var m=0;m<c.length;m++){var s=c[m];if(0===s.refs){for(var d=0;d<s.parts.length;d++)s.parts[d]();delete p[s.id]}}}};var y=function(){var e=[];return function(t,o){return e[t]=o,e.filter(Boolean).join("\n")}}()},function(e,t,o){var n=o(6);"string"==typeof n&&(n=[[e.id,n,""]]);o(4)(n,{});n.locals&&(e.exports=n.locals)},function(e,t,o){t=e.exports=o(3)(),t.push([e.id,'.gc-comments{font:1em/1.5 Lantinghei SC,Microsoft Yahei,Hiragino Sans GB,Microsoft Sans Serif,WenQuanYi Micro Hei,sans-serif}.gc-comments a{color:#333;text-decoration:none}.gc-comments-item{border-radius:2px;border:1px solid #ccc;margin-bottom:10px}.gc-comments-item-hd{border-top-left-radius:2px;border-top-right-radius:2px;position:relative;padding:10px;padding-left:40px;line-height:16px;background:linear-gradient(top,#fcfcfc,#f9f9f9);border-bottom:1px solid #ccc}.gc-comments-item-hd-avatar{position:absolute;left:10px;top:5px;width:22px;height:22px;border-radius:3px;vertical-align:middle;padding:1px;background-color:#fff;border:1px solid #ccc}.gc-comments-item-hd-user{font-weight:700;margin-left:.5em;margin-right:.5em}a.gc-comments-item-hd-date{color:#999;font-size:.8em}.gc-comments-item-bd{padding-left:1em;padding-right:1em;font-size:1em;background-color:#fff}.gc-comments-title{font-size:1.6em;line-height:1.6em}.gc-comments-info{background-image:linear-gradient(180deg,#fcf8e3 0,#f8efc0);background-repeat:repeat-x;border-color:#f5e79e;text-shadow:0 1px 0 hsla(0,0%,100%,.2);box-shadow:inset 0 1px 0 hsla(0,0%,100%,.25),0 1px 2px rgba(0,0,0,.05);color:#8a6d3b;background-color:#fcf8e3;padding:15px;margin-bottom:20px;border:1px solid transparent;border-radius:4px;border-color:#faebcc}.gc-comments-info a{color:#428bca}.gc-comments-loading{width:60px;height:60px;position:relative;margin-left:auto;margin-right:auto;font-size:.8em;line-height:60px;text-align:center;color:#ddd}.gc-comments-loading:after,.gc-comments-loading:before{content:" ";width:100%;height:100%;border-radius:50%;background-color:#6cc644;opacity:.6;position:absolute;top:0;left:0;-webkit-animation:gccommentsloadinganiamte 2s infinite ease-in-out;animation:gccommentsloadinganiamte 2s infinite ease-in-out}.gc-comments-loading:after{-webkit-animation-delay:-1s;animation-delay:-1s}@-webkit-keyframes gccommentsloadinganiamte{0%,to{-webkit-transform:scale(0)}50%{-webkit-transform:scale(1)}}@keyframes gccommentsloadinganiamte{0%,to{transform:scale(0);-webkit-transform:scale(0)}50%{transform:scale(1);-webkit-transform:scale(1)}}',""])},function(e,t){e.exports={filename:"gc.js",homepage:"http://nimojs.github.io/github-comments/",name:"github-comments",version:"0.5.0",description:"Github 留言系统 | 让评论质量更高，让网站与 Github 关联 | 适合程序员的评论系统，基于 Github issues 留言",main:"lib/index.js",scripts:{test:'echo "Error: no test specified" && exit 1',dev:"webpack --watch --colors --progress",s:"node server.js"},repository:{type:"git",url:"git+https://github.com/nimojs/github-comments.git"},keywords:["github","comments","issues"],author:"nimojs",license:"MIT",bugs:{url:"https://github.com/nimojs/github-comments/issues"},devDependencies:{"babel-core":"^6.13.2","babel-loader":"^6.2.5","babel-preset-es2015":"^6.13.2","css-loader":"^0.23.1","es3ify-loader":"^0.2.0",eslint:"^3.19.0","eslint-config-dwing":"^1.0.2","json-loader":"^0.5.4","static-server":"^2.0.3","style-loader":"^0.13.1",webpack:"^1.13.2"},dependencies:{}}},function(e,t){"use strict";function o(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,o=""+e;o.length<t;)o="0"+o;return o}function n(e){var t=new Date(e.replace(/T/," ").replace(/Z/," UTC").replace(/-/g,"/"));return t.getFullYear()+"-"+o(t.getMonth()+1)+"-"+o(t.getDate())+" "+o(t.getHours())+":"+o(t.getMinutes())+":"+o(t.getSeconds())}e.exports=n}])});