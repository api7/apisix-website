(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{206:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return u}));var r=t(3),a=t(7),i=(t(0),t(229)),o={title:"consul_kv"},s={unversionedId:"discovery/consul_kv",id:"discovery/consul_kv",isDocsHomePage:!1,title:"consul_kv",description:"\x3c!--",source:"@site/docs/apisix/discovery/consul_kv.md",slug:"/discovery/consul_kv",permalink:"/zh/docs/apisix/discovery/consul_kv",version:"current"},c=[{value:"Summary",id:"summary",children:[]},{value:"Configuration for discovery client",id:"configuration-for-discovery-client",children:[{value:"Configuration for Consul KV",id:"configuration-for-consul-kv",children:[]},{value:"Register Http API Services",id:"register-http-api-services",children:[]},{value:"Upstream setting",id:"upstream-setting",children:[]}]},{value:"Debugging API",id:"debugging-api",children:[]}],l={toc:c};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"summary"},"Summary"),Object(i.b)("p",null,"For users who used ",Object(i.b)("a",{parentName:"p",href:"https://github.com/weibocom/nginx-upsync-module"},"nginx-upsync-module")," and consul key value for service discovery way, as we Weibo Mobile Team, maybe need it."),Object(i.b)("p",null,"Thanks to @fatman-x guy, who developed this module, called ",Object(i.b)("inlineCode",{parentName:"p"},"consul_kv"),", and its worker process data flow is below:\n",Object(i.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/548385/107141841-6ced3e00-6966-11eb-8aa4-bc790a4ad113.png",alt:null})),Object(i.b)("h2",{id:"configuration-for-discovery-client"},"Configuration for discovery client"),Object(i.b)("h3",{id:"configuration-for-consul-kv"},"Configuration for Consul KV"),Object(i.b)("p",null,"Add following configuration in ",Object(i.b)("inlineCode",{parentName:"p"},"conf/config.yaml")," :"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},'discovery:\n  consul_kv:\n    servers:\n      - "http://127.0.0.1:8500"\n      - "http://127.0.0.1:8600"\n    prefix: "upstreams"\n    skip_keys:                    # if you need to skip special keys\n      - "upstreams/unused_api/"\n    timeout:\n      connect: 1000               # default 2000 ms\n      read: 1000                  # default 2000 ms\n      wait: 60                    # default 60 sec\n    weight: 1                     # default 1\n    fetch_interval: 5             # default 3 sec, only take effect for keepalive: false way\n    keepalive: true               # default true, use the long pull way to query consul servers\n    default_server:               # you can define default server when missing hit\n      host: "127.0.0.1"\n      port: 20999\n      metadata:\n        fail_timeout: 1           # default 1 ms\n        weight: 1                 # default 1\n        max_fails: 1              # default 1\n')),Object(i.b)("p",null,"And you can config it in short by default value:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},'discovery:\n  consul_kv:\n    servers:\n      - "http://127.0.0.1:8500"\n')),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"keepalive")," has two optional values:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"true"),", default and recommend value, use the long pull way to query consul servers"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"false"),", not recommend, it would use the short pull way to query consul servers, then you can set the ",Object(i.b)("inlineCode",{parentName:"li"},"fetch_interval")," for fetch interval")),Object(i.b)("h3",{id:"register-http-api-services"},"Register Http API Services"),Object(i.b)("p",null,"Service register Key&Value template:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'Key:    {Prefix}/{Service_Name}/{IP}:{Port}\nValue: {"weight": <Num>, "max_fails": <Num>, "fail_timeout": <Num>}\n')),Object(i.b)("p",null,"The register consul key use ",Object(i.b)("inlineCode",{parentName:"p"},"upstreams")," as prefix by default. The http api service name called ",Object(i.b)("inlineCode",{parentName:"p"},"webpages")," for example, and you can also use ",Object(i.b)("inlineCode",{parentName:"p"},"webpages/oneteam/hello")," as service name. The api instance of node's ip and port make up new key: ",Object(i.b)("inlineCode",{parentName:"p"},"<IP>:<Port>"),"."),Object(i.b)("p",null,"Now, register nodes into consul:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},'curl \\\n    -X PUT \\\n    -d \' {"weight": 1, "max_fails": 2, "fail_timeout": 1}\' \\\n    http://127.0.0.1:8500/v1/kv/upstreams/webpages/172.19.5.12:8000\n\ncurl \\\n    -X PUT \\\n    -d \' {"weight": 1, "max_fails": 2, "fail_timeout": 1}\' \\\n    http://127.0.0.1:8500/v1/kv/upstreams/webpages/172.19.5.13:8000\n')),Object(i.b)("p",null,"In some case, same keys exist in different consul servers.\nTo avoid confusion, use the full consul key url path as service name in practice."),Object(i.b)("h3",{id:"upstream-setting"},"Upstream setting"),Object(i.b)("p",null,'Here is an example of routing a request with a URL of "/*" to a service which named "',Object(i.b)("a",{parentName:"p",href:"http://127.0.0.1:8500/v1/kv/upstreams/webpages/%22"},'http://127.0.0.1:8500/v1/kv/upstreams/webpages/"')," and use consul_kv discovery client in the registry :"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -i -d \'\n{\n    "uri": "/*",\n    "upstream": {\n        "service_name": "http://127.0.0.1:8500/v1/kv/upstreams/webpages/",\n        "type": "roundrobin",\n        "discovery_type": "consul_kv"\n    }\n}\'\n')),Object(i.b)("p",null,"The format response as below:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "node": {\n    "value": {\n      "priority": 0,\n      "update_time": 1612755230,\n      "upstream": {\n        "discovery_type": "consul_kv",\n        "service_name": "http://127.0.0.1:8500/v1/kv/upstreams/webpages/",\n        "hash_on": "vars",\n        "type": "roundrobin",\n        "pass_host": "pass"\n      },\n      "id": "1",\n      "uri": "/*",\n      "create_time": 1612755230,\n      "status": 1\n    },\n    "key": "/apisix/routes/1"\n  },\n  "action": "set"\n}\n')),Object(i.b)("p",null,"You could find more usage in the ",Object(i.b)("inlineCode",{parentName:"p"},"apisix/t/discovery/consul_kv.t")," file."),Object(i.b)("h2",{id:"debugging-api"},"Debugging API"),Object(i.b)("p",null,"TODO"))}u.isMDXComponent=!0},229:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),u=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=u(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(t),d=r,m=p["".concat(o,".").concat(d)]||p[d]||b[d]||i;return t?a.a.createElement(m,s(s({ref:n},l),{},{components:t})):a.a.createElement(m,s({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);