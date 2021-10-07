"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[41302],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||p;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,o=new Array(p);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<p;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},82825:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var r=n(87462),a=n(63366),p=(n(67294),n(3905)),o=["components"],i={},l=void 0,s={unversionedId:"puppeteer.page.setcontent",id:"version-10.1.0/puppeteer.page.setcontent",isDocsHomePage:!1,title:"puppeteer.page.setcontent",description:"Home &gt; puppeteer &gt; Page &gt; setContent",source:"@site/versioned_docs/version-10.1.0/puppeteer.page.setcontent.md",sourceDirName:".",slug:"/puppeteer.page.setcontent",permalink:"/puppeteer/docs/puppeteer.page.setcontent",editUrl:"https://github.com/facebook/puppeteer/edit/main/website/versioned_docs/version-10.1.0/puppeteer.page.setcontent.md",version:"10.1.0",frontMatter:{},sidebar:"version-10.1.0/docs",previous:{title:"puppeteer.page.setcacheenabled",permalink:"/puppeteer/docs/puppeteer.page.setcacheenabled"},next:{title:"puppeteer.page.setcookie",permalink:"/puppeteer/docs/puppeteer.page.setcookie"}},u=[{value:"Page.setContent() method",id:"pagesetcontent-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Remarks",id:"remarks",children:[]}],c={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,p.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/index"},"Home")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer"},"puppeteer")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.page"},"Page")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.page.setcontent"},"setContent")),(0,p.kt)("h2",{id:"pagesetcontent-method"},"Page.setContent() method"),(0,p.kt)("b",null,"Signature:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"setContent(html: string, options?: WaitForOptions): Promise<void>;\n")),(0,p.kt)("h2",{id:"parameters"},"Parameters"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,p.kt)("th",{parentName:"tr",align:null},"Type"),(0,p.kt)("th",{parentName:"tr",align:null},"Description"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"html"),(0,p.kt)("td",{parentName:"tr",align:null},"string"),(0,p.kt)("td",{parentName:"tr",align:null},"HTML markup to assign to the page.")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"options"),(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.waitforoptions"},"WaitForOptions")),(0,p.kt)("td",{parentName:"tr",align:null},"Parameters that has some properties.")))),(0,p.kt)("b",null,"Returns:"),(0,p.kt)("p",null,"Promise","<","void",">"),(0,p.kt)("h2",{id:"remarks"},"Remarks"),(0,p.kt)("p",null,"The parameter ",(0,p.kt)("inlineCode",{parentName:"p"},"options")," might have the following options."),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"timeout")," : Maximum time in milliseconds for resources to load, defaults to 30 seconds, pass ",(0,p.kt)("inlineCode",{parentName:"p"},"0")," to disable timeout. The default value can be changed by using the ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.page.setdefaultnavigationtimeout"},"page.setDefaultNavigationTimeout(timeout)")," or ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.page.setdefaulttimeout"},"page.setDefaultTimeout(timeout)")," methods.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"waitUntil"),": When to consider setting markup succeeded, defaults to ",(0,p.kt)("inlineCode",{parentName:"p"},"load"),". Given an array of event strings, setting content is considered to be successful after all events have been fired. Events can be either:",(0,p.kt)("br",null)," - ",(0,p.kt)("inlineCode",{parentName:"p"},"load")," : consider setting content to be finished when the ",(0,p.kt)("inlineCode",{parentName:"p"},"load")," event is fired.",(0,p.kt)("br",null)," - ",(0,p.kt)("inlineCode",{parentName:"p"},"domcontentloaded")," : consider setting content to be finished when the ",(0,p.kt)("inlineCode",{parentName:"p"},"DOMContentLoaded")," event is fired.",(0,p.kt)("br",null)," - ",(0,p.kt)("inlineCode",{parentName:"p"},"networkidle0")," : consider setting content to be finished when there are no more than 0 network connections for at least ",(0,p.kt)("inlineCode",{parentName:"p"},"500")," ms.",(0,p.kt)("br",null)," - ",(0,p.kt)("inlineCode",{parentName:"p"},"networkidle2")," : consider setting content to be finished when there are no more than 2 network connections for at least ",(0,p.kt)("inlineCode",{parentName:"p"},"500")," ms."))))}d.isMDXComponent=!0}}]);