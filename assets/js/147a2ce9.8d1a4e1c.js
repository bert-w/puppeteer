"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[71005],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return k}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),i=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=i(r),k=a,m=s["".concat(u,".").concat(k)]||s[k]||d[k]||o;return r?n.createElement(m,l(l({ref:t},c),{},{components:r})):n.createElement(m,l({ref:t},c))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=s;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var i=2;i<o;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},60123:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return i},toc:function(){return c},default:function(){return s}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),l=["components"],p={},u=void 0,i={unversionedId:"puppeteer.webworker",id:"puppeteer.webworker",isDocsHomePage:!1,title:"puppeteer.webworker",description:"Home &gt; puppeteer &gt; WebWorker",source:"@site/docs/puppeteer.webworker.md",sourceDirName:".",slug:"/puppeteer.webworker",permalink:"/puppeteer/docs/next/puppeteer.webworker",editUrl:"https://github.com/facebook/puppeteer/edit/main/website/docs/puppeteer.webworker.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"puppeteer.page.workers",permalink:"/puppeteer/docs/next/puppeteer.page.workers"},next:{title:"puppeteer.webworker.evaluate",permalink:"/puppeteer/docs/next/puppeteer.webworker.evaluate"}},c=[{value:"WebWorker class",id:"webworker-class",children:[]},{value:"Remarks",id:"remarks",children:[]},{value:"Example",id:"example",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Methods",id:"methods",children:[]}],d={toc:c};function s(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/index"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer"},"puppeteer")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.webworker"},"WebWorker")),(0,o.kt)("h2",{id:"webworker-class"},"WebWorker class"),(0,o.kt)("p",null,"The WebWorker class represents a ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API"},"WebWorker"),"."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare class WebWorker extends EventEmitter \n")),(0,o.kt)("b",null,"Extends:")," [EventEmitter](/puppeteer/docs/next/puppeteer.eventemitter)",(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"The events ",(0,o.kt)("inlineCode",{parentName:"p"},"workercreated")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"workerdestroyed")," are emitted on the page object to signal the worker lifecycle."),(0,o.kt)("p",null,"The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,o.kt)("inlineCode",{parentName:"p"},"WebWorker")," class."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"page.on('workercreated', worker => console.log('Worker created: ' + worker.url()));\npage.on('workerdestroyed', worker => console.log('Worker destroyed: ' + worker.url()));\n\nconsole.log('Current workers:');\nfor (const worker of page.workers()) {\n  console.log('  ' + worker.url());\n}\n")),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.webworker._client"},"_","client")),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.cdpsession"},"CDPSession")),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.webworker._executioncontextcallback"},"_","executionContextCallback")),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"(value: ",(0,o.kt)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.executioncontext"},"ExecutionContext"),") =",">"," void"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.webworker._executioncontextpromise"},"_","executionContextPromise")),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Promise","<",(0,o.kt)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.executioncontext"},"ExecutionContext"),">"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.webworker._url"},"_","url")),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("h2",{id:"methods"},"Methods"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Method"),(0,o.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.webworker.evaluate"},"evaluate(pageFunction, args)")),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"If the function passed to the ",(0,o.kt)("code",null,"worker.evaluate")," returns a Promise, then ",(0,o.kt)("code",null,"worker.evaluate")," would wait for the promise to resolve and return its value. If the function passed to the ",(0,o.kt)("code",null,"worker.evaluate")," returns a non-serializable value, then ",(0,o.kt)("code",null,"worker.evaluate")," resolves to ",(0,o.kt)("code",null,"undefined"),". DevTools Protocol also supports transferring some additional values that are not serializable by ",(0,o.kt)("code",null,"JSON"),": ",(0,o.kt)("code",null,"-0"),", ",(0,o.kt)("code",null,"NaN"),", ",(0,o.kt)("code",null,"Infinity"),", ",(0,o.kt)("code",null,"-Infinity"),", and bigint literals. Shortcut for ",(0,o.kt)("code",null,"await worker.executionContext()).evaluate(pageFunction, ...args)"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.webworker.evaluatehandle"},"evaluateHandle(pageFunction, args)")),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"The only difference between ",(0,o.kt)("code",null,"worker.evaluate")," and ",(0,o.kt)("code",null,"worker.evaluateHandle")," is that ",(0,o.kt)("code",null,"worker.evaluateHandle")," returns in-page object (JSHandle). If the function passed to the ",(0,o.kt)("code",null,"worker.evaluateHandle")," returns a ",(0,o.kt)("code",null,"Promise"),", then ",(0,o.kt)("code",null,"worker.evaluateHandle")," would wait for the promise to resolve and return its value. Shortcut for ",(0,o.kt)("code",null,"await worker.executionContext()).evaluateHandle(pageFunction, ...args)"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.webworker.executioncontext"},"executionContext()")),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Returns the ExecutionContext the WebWorker runs in")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.webworker.url"},"url()")),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null})))))}s.isMDXComponent=!0}}]);