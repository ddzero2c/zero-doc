"use strict";(self.webpackChunktmp=self.webpackChunktmp||[]).push([[7255],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),a=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=a(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=a(n),f=o,d=g["".concat(u,".").concat(f)]||g[f]||s[f]||i;return n?r.createElement(d,c(c({ref:t},p),{},{components:n})):r.createElement(d,c({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=g;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var a=2;a<i;a++)c[a]=n[a];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},9797:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return a},toc:function(){return p},default:function(){return g}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),c=["components"],l={sidebar_position:3},u="Plugin Center",a={unversionedId:"ecology/plugin-center",id:"ecology/plugin-center",title:"Plugin Center",description:"The goctl api provides the plugin command to support functional extensions to the api, when the functionality in the goctl api does not satisfy your use.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/ecology/plugin-center.md",sourceDirName:"ecology",slug:"/ecology/plugin-center",permalink:"/en/docs/ecology/plugin-center",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"vscode plugin",permalink:"/en/docs/ecology/vscode"},next:{title:"Distributed Transaction Support",permalink:"/en/docs/ecology/distributed-transaction"}},p=[{value:"Plugin resources",id:"plugin-resources",children:[],level:2}],s={toc:p};function g(e){var t=e.components,n=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"plugin-center"},"Plugin Center"),(0,i.kt)("p",null,"The goctl api provides the plugin command to support functional extensions to the api, when the functionality in the goctl api does not satisfy your use.\nor you need to extend the goctl api with custom features, then the plugin function will be perfect for developers to be self-sufficient, see\n","[goctl plugin]","(. /build-tool/plugin.md)"),(0,i.kt)("h2",{id:"plugin-resources"},"Plugin resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/zeromicro/goctl-go-compact"},"goctl-go-compact"),"\ngoctl's default one route one file merge into one file"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/zeromicro/goctl-swagger"},"goctl-swagger"),"\nGenerate swagger documentation from api files"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/zeromicro/goctl-php"},"goctl-php"),"\ngoctl-php is a goctl-based plugin for generating php call-side (server-side) http server request code")))}g.isMDXComponent=!0}}]);