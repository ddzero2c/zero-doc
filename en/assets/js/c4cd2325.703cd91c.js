"use strict";(self.webpackChunktmp=self.webpackChunktmp||[]).push([[8204],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=i.createContext({}),s=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=s(n),f=o,g=p["".concat(c,".").concat(f)]||p[f]||u[f]||l;return n?i.createElement(g,r(r({ref:t},d),{},{components:n})):i.createElement(g,r({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,r=new Array(l);r[0]=p;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,r[1]=a;for(var s=2;s<l;s++)r[s]=n[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6935:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return d},default:function(){return p}});var i=n(7462),o=n(3366),l=(n(7294),n(3905)),r=["components"],a={sidebar_position:1},c="vscode plugin",s={unversionedId:"ecology/vscode",id:"ecology/vscode",title:"vscode plugin",description:'This plugin can be installed on Visual Studio Code version 1.46.0+. First make sure your version of Visual Studio Code meets the requirements and that the goctl command line tool is installed. If Visual Studio Code is not yet installed, please install and open Visual Studio Code. Navigate to the Extensions pane, search for goctl and install this extension (publisher ID "xiaoxin- technology.goctl").',source:"@site/i18n/en/docusaurus-plugin-content-docs/current/ecology/vscode.md",sourceDirName:"ecology",slug:"/ecology/vscode",permalink:"/en/docs/ecology/vscode",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Intellij Plugin",permalink:"/en/docs/ecology/intellij"},next:{title:"Plugin Center",permalink:"/en/docs/ecology/plugin-center"}},d=[{value:"Feature List",id:"feature-list",children:[{value:"Syntax highlighting",id:"syntax-highlighting",children:[],level:3},{value:"Code skipping",id:"code-skipping",children:[],level:3},{value:"Code formatting",id:"code-formatting",children:[],level:3},{value:"Code block hints",id:"code-block-hints",children:[{value:"info code block",id:"info-code-block",children:[],level:4},{value:"type code block",id:"type-code-block",children:[],level:4},{value:"service code block",id:"service-code-block",children:[],level:4},{value:"handler block",id:"handler-block",children:[],level:4}],level:3}],level:2}],u={toc:d};function p(e){var t=e.components,a=(0,o.Z)(e,r);return(0,l.kt)("wrapper",(0,i.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"vscode-plugin"},"vscode plugin"),(0,l.kt)("p",null,'This plugin can be installed on Visual Studio Code version 1.46.0+. First make sure your version of Visual Studio Code meets the requirements and that the goctl command line tool is installed. If Visual Studio Code is not yet installed, please install and open Visual Studio Code. Navigate to the Extensions pane, search for goctl and install this extension (publisher ID "xiaoxin- technology.goctl").'),(0,l.kt)("p",null,"Please refer to ",(0,l.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/editor/extension-gallery"},"here")," for Visual Studio Code extension usage."),(0,l.kt)("h2",{id:"feature-list"},"Feature List"),(0,l.kt)("p",null,"Implemented features"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Syntax highlighting"),(0,l.kt)("li",{parentName:"ul"},"Jump to definition/reference"),(0,l.kt)("li",{parentName:"ul"},"Code formatting"),(0,l.kt)("li",{parentName:"ul"},"Code block hinting")),(0,l.kt)("p",null,"Unimplemented function:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Syntax error checking"),(0,l.kt)("li",{parentName:"ul"},"Cross-file code jumping"),(0,l.kt)("li",{parentName:"ul"},"goctl command line calls")),(0,l.kt)("h3",{id:"syntax-highlighting"},"Syntax highlighting"),(0,l.kt)("h3",{id:"code-skipping"},"Code skipping"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"jump",src:n(9556).Z})),(0,l.kt)("h3",{id:"code-formatting"},"Code formatting"),(0,l.kt)("p",null,"Call the goctl command line formatting tool, make sure goctl is added to ",(0,l.kt)("inlineCode",{parentName:"p"},"$PATH")," and has executable permissions before using it"),(0,l.kt)("h3",{id:"code-block-hints"},"Code block hints"),(0,l.kt)("h4",{id:"info-code-block"},"info code block"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"info",src:n(9837).Z})),(0,l.kt)("h4",{id:"type-code-block"},"type code block"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"type",src:n(4367).Z})),(0,l.kt)("h4",{id:"service-code-block"},"service code block"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"type",src:n(3888).Z})),(0,l.kt)("h4",{id:"handler-block"},"handler block"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"type",src:n(919).Z})))}p.isMDXComponent=!0},919:function(e,t,n){t.Z=n.p+"assets/images/handler-94175b5e8a0b61b2125a701cb5c02cd2.gif"},9837:function(e,t,n){t.Z=n.p+"assets/images/info-41c6974d658823798de8d21a203dabad.gif"},9556:function(e,t,n){t.Z=n.p+"assets/images/jump-316332f33ff00bb2a5c5d4d87d7ef138.gif"},3888:function(e,t,n){t.Z=n.p+"assets/images/service-e274e780a0e80c9c5ddb55401d956e57.gif"},4367:function(e,t,n){t.Z=n.p+"assets/images/type-7646e132a2fc9430102094df92ad04f2.gif"}}]);