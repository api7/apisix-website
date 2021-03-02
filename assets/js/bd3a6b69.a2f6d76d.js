(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{188:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),o=(n(0),n(227)),i={title:"Deploy with Source Codes"},c={unversionedId:"deploy",id:"deploy",isDocsHomePage:!1,title:"Deploy with Source Codes",description:"\x3c!--",source:"@site/docs/apisix-dashboard/deploy.md",slug:"/deploy",permalink:"/docs/dashboard/deploy",version:"current",sidebar:"docs",previous:{title:"API doc of Manager API.",permalink:"/docs/dashboard/api/api"},next:{title:"Deploy with Docker",permalink:"/docs/dashboard/deploy-with-docker"}},l=[{value:"Prerequisites",id:"prerequisites",children:[{value:"manager-api",id:"manager-api",children:[]},{value:"web",id:"web",children:[]}]},{value:"Clone the project",id:"clone-the-project",children:[]},{value:"Build",id:"build",children:[]},{value:"Launch",id:"launch",children:[]},{value:"Working directory",id:"working-directory",children:[]}],p={toc:l};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The Dashboard contains both ",Object(o.b)("inlineCode",{parentName:"p"},"manager-api")," and ",Object(o.b)("inlineCode",{parentName:"p"},"web"),", but ",Object(o.b)("inlineCode",{parentName:"p"},"web")," is ",Object(o.b)("em",{parentName:"p"},"optional"),"."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"manager-api")," and ",Object(o.b)("inlineCode",{parentName:"p"},"web")," will be included in this build guide product."),Object(o.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(o.b)("p",null,"Before using source codes to build, make sure that the following dependencies are installed in your environment."),Object(o.b)("h3",{id:"manager-api"},"manager-api"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"https://golang.org/dl/"},"Golang")," 1.13+: For users in mainland China, you can use the following command to speed up the module downloads.")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"$ go env -w GOPROXY=https://goproxy.cn,direct\n")),Object(o.b)("h3",{id:"web"},"web"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"Node.js")," 10.23.0+"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"https://yarnpkg.com/getting-started/install"},"Yarn"))),Object(o.b)("h2",{id:"clone-the-project"},"Clone the project"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"$ git clone -b v2.4 https://github.com/apache/apisix-dashboard.git\n")),Object(o.b)("h2",{id:"build"},"Build"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"$ cd apisix-dashboard\n$ make build\n")),Object(o.b)("p",null,"When the build is complete, the results are stored in the root ",Object(o.b)("inlineCode",{parentName:"p"},"output")," directory."),Object(o.b)("p",null,"Note: ",Object(o.b)("inlineCode",{parentName:"p"},"make build")," will build ",Object(o.b)("inlineCode",{parentName:"p"},"manger-api")," and ",Object(o.b)("inlineCode",{parentName:"p"},"web"),", use the ",Object(o.b)("inlineCode",{parentName:"p"},"make help")," command to see more commands."),Object(o.b)("h2",{id:"launch"},"Launch"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"After the build is complete and before you start, make sure the following dependencies are installed and running in your environment.")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://etcd.io/docs/v3.4.0/dl-build/"},"etcd")," 3.4.0+")),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Check and modify the configuration information in ",Object(o.b)("inlineCode",{parentName:"p"},"output/conf/conf.yaml")," according to your deployment environment.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Launch the Dashboard"))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"$ cd ./output\n\n$ ./manager-api\n\n# or running in background\n$ nohup ./manager-api &\n")),Object(o.b)("ol",{start:4},Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Without changing the configuration, visit ",Object(o.b)("inlineCode",{parentName:"p"},"http://127.0.0.1:9000")," to use the dashboard with GUI, where the default username and password are ",Object(o.b)("inlineCode",{parentName:"p"},"admin"),".")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Stop the Dashboard"))),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"manager-api")," provides a sub command ",Object(o.b)("inlineCode",{parentName:"p"},"stop")," to quit the program gracefully, just\nrun:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"$ ./manager-api stop\n")),Object(o.b)("h2",{id:"working-directory"},"Working directory"),Object(o.b)("p",null,"the ",Object(o.b)("inlineCode",{parentName:"p"},"output")," directory mention above is the default working directory."),Object(o.b)("p",null,"You can move the entire directory to any path you want, and use the ",Object(o.b)("inlineCode",{parentName:"p"},"-p")," to specify it as the working directory."),Object(o.b)("p",null,"For example, you can move it to ",Object(o.b)("inlineCode",{parentName:"p"},"/usr/local/apisix-dashboard/")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"$ mv ./output/manager-api /usr/local/bin/\n\n$ mv ./output/ /usr/local/apisix-dashboard/\n\n$ manager-api -p /usr/local/apisix-dashboard/\n")))}b.isMDXComponent=!0},227:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),b=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=b(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=b(n),s=a,m=d["".concat(i,".").concat(s)]||d[s]||u[s]||o;return n?r.a.createElement(m,c(c({ref:t},p),{},{components:n})):r.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);