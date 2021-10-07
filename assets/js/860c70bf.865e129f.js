"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[51917],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(67294);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var u=n.createContext({}),i=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=i(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,p=e.mdxType,a=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=i(r),m=p,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||a;return r?n.createElement(f,o(o({ref:t},l),{},{components:r})):n.createElement(f,o({ref:t},l))}));function m(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var a=r.length,o=new Array(a);o[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:p,o[1]=s;for(var i=2;i<a;i++)o[i]=r[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9854:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return i},toc:function(){return l},default:function(){return d}});var n=r(87462),p=r(63366),a=(r(67294),r(3905)),o=["components"],s={},u=void 0,i={unversionedId:"puppeteer.httprequest.respond",id:"puppeteer.httprequest.respond",isDocsHomePage:!1,title:"puppeteer.httprequest.respond",description:"Home &gt; puppeteer &gt; HTTPRequest &gt; respond",source:"@site/docs/puppeteer.httprequest.respond.md",sourceDirName:".",slug:"/puppeteer.httprequest.respond",permalink:"/puppeteer/docs/next/puppeteer.httprequest.respond",editUrl:"https://github.com/facebook/puppeteer/edit/main/website/docs/puppeteer.httprequest.respond.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"puppeteer.httprequest.resourcetype",permalink:"/puppeteer/docs/next/puppeteer.httprequest.resourcetype"},next:{title:"puppeteer.httprequest.response",permalink:"/puppeteer/docs/next/puppeteer.httprequest.response"}},l=[{value:"HTTPRequest.respond() method",id:"httprequestrespond-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Remarks",id:"remarks",children:[]},{value:"Example",id:"example",children:[]}],c={toc:l};function d(e){var t=e.components,r=(0,p.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/index"},"Home")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer"},"puppeteer")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.httprequest"},"HTTPRequest")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.httprequest.respond"},"respond")),(0,a.kt)("h2",{id:"httprequestrespond-method"},"HTTPRequest.respond() method"),(0,a.kt)("p",null,"Fulfills a request with the given response."),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"respond(response: Partial<ResponseForRequest>, priority?: number): Promise<void>;\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"response"),(0,a.kt)("td",{parentName:"tr",align:null},"Partial","<",(0,a.kt)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.responseforrequest"},"ResponseForRequest"),">"),(0,a.kt)("td",{parentName:"tr",align:null},"the response to fulfill the request with.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"priority"),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"If provided, intercept is resolved using cooperative handling rules. Otherwise, intercept is resolved immediately.")))),(0,a.kt)("b",null,"Returns:"),(0,a.kt)("p",null,"Promise","<","void",">"),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"To use this, request interception should be enabled with ",(0,a.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.page.setrequestinterception"},"Page.setRequestInterception()"),"."),(0,a.kt)("p",null,"Exception is immediately thrown if the request interception is not enabled."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"An example of fulfilling all requests with 404 responses:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"await page.setRequestInterception(true);\npage.on('request', request => {\n  request.respond({\n    status: 404,\n    contentType: 'text/plain',\n    body: 'Not Found!'\n  });\n});\n")),(0,a.kt)("p",null,"NOTE: Mocking responses for dataURL requests is not supported. Calling ",(0,a.kt)("inlineCode",{parentName:"p"},"request.respond")," for a dataURL request is a noop."))}d.isMDXComponent=!0}}]);