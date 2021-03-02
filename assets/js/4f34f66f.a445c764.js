(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{123:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return c})),t.d(r,"toc",(function(){return l})),t.d(r,"default",(function(){return u}));var n=t(3),o=t(7),a=(t(0),t(227)),i={title:"Deploy with RPM"},c={unversionedId:"deploy-with-rpm",id:"deploy-with-rpm",isDocsHomePage:!1,title:"Deploy with RPM",description:"\x3c!--",source:"@site/docs/apisix-dashboard/deploy-with-rpm.md",slug:"/deploy-with-rpm",permalink:"/docs/dashboard/deploy-with-rpm",version:"current",sidebar:"docs",previous:{title:"Deploy with Docker",permalink:"/docs/dashboard/deploy-with-docker"},next:{title:"Development Guide",permalink:"/docs/dashboard/develop"}},l=[{value:"Install from RPM",id:"install-from-rpm",children:[]},{value:"Run",id:"run",children:[]}],p={toc:l};function u(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"NOTE:")," Only support CentOS 7 currently, for more information, please refer to ",Object(a.b)("a",{parentName:"p",href:"/docs/dashboard/deploy"},"here"),"."),Object(a.b)("h2",{id:"install-from-rpm"},"Install from RPM"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"$ sudo yum install -y https://github.com/apache/apisix-dashboard/releases/download/v2.4/apisix-dashboard-2.4-0.x86_64.rpm\n")),Object(a.b)("h2",{id:"run"},"Run"),Object(a.b)("p",null,"Before you start, make sure the following dependencies are installed and running in your environment."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://etcd.io/docs/v3.4.0/dl-build/"},"etcd")," 3.4.0+")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"$ sudo nohup manager-api -p /usr/local/apisix/dashboard/ &\n")))}u.isMDXComponent=!0},227:function(e,r,t){"use strict";t.d(r,"a",(function(){return s})),t.d(r,"b",(function(){return m}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),u=function(e){var r=o.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},s=function(e){var r=u(e.components);return o.a.createElement(p.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},b=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(t),b=n,m=s["".concat(i,".").concat(b)]||s[b]||d[b]||a;return t?o.a.createElement(m,c(c({ref:r},p),{},{components:t})):o.a.createElement(m,c({ref:r},p))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=b;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<a;p++)i[p]=t[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);