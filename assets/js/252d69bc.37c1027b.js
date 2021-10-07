"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[32148],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,x=d["".concat(i,".").concat(m)]||d[m]||s[m]||o;return n?a.createElement(x,p(p({ref:t},c),{},{components:n})):a.createElement(x,p({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,p[1]=l;for(var u=2;u<o;u++)p[u]=n[u];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},48117:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),p=["components"],l={},i=void 0,u={unversionedId:"puppeteer.executioncontext.evaluate",id:"puppeteer.executioncontext.evaluate",isDocsHomePage:!1,title:"puppeteer.executioncontext.evaluate",description:"Home &gt; puppeteer &gt; ExecutionContext &gt; evaluate",source:"@site/docs/puppeteer.executioncontext.evaluate.md",sourceDirName:".",slug:"/puppeteer.executioncontext.evaluate",permalink:"/puppeteer/docs/next/puppeteer.executioncontext.evaluate",editUrl:"https://github.com/facebook/puppeteer/edit/main/website/docs/puppeteer.executioncontext.evaluate.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"puppeteer.executioncontext",permalink:"/puppeteer/docs/next/puppeteer.executioncontext"},next:{title:"puppeteer.executioncontext.evaluatehandle",permalink:"/puppeteer/docs/next/puppeteer.executioncontext.evaluatehandle"}},c=[{value:"ExecutionContext.evaluate() method",id:"executioncontextevaluate-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Remarks",id:"remarks",children:[]},{value:"Example 1",id:"example-1",children:[]},{value:"Example 2",id:"example-2",children:[]},{value:"Example 3",id:"example-3",children:[]}],s={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,p);return(0,o.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/index"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer"},"puppeteer")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.executioncontext"},"ExecutionContext")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.executioncontext.evaluate"},"evaluate")),(0,o.kt)("h2",{id:"executioncontextevaluate-method"},"ExecutionContext.evaluate() method"),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"evaluate<ReturnType extends any>(pageFunction: Function | string, ...args: unknown[]): Promise<ReturnType>;\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"pageFunction"),(0,o.kt)("td",{parentName:"tr",align:null},"Function ","|"," string"),(0,o.kt)("td",{parentName:"tr",align:null},"a function to be evaluated in the ",(0,o.kt)("code",null,"executionContext"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"args"),(0,o.kt)("td",{parentName:"tr",align:null},"unknown","[","]"),(0,o.kt)("td",{parentName:"tr",align:null},"argument to pass to the page function")))),(0,o.kt)("b",null,"Returns:"),(0,o.kt)("p",null,"Promise","<","ReturnType",">"),(0,o.kt)("p",null,"A promise that resolves to the return value of the given function."),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"If the function passed to the ",(0,o.kt)("inlineCode",{parentName:"p"},"executionContext.evaluate")," returns a Promise, then ",(0,o.kt)("inlineCode",{parentName:"p"},"executionContext.evaluate")," would wait for the promise to resolve and return its value. If the function passed to the ",(0,o.kt)("inlineCode",{parentName:"p"},"executionContext.evaluate")," returns a non-serializable value, then ",(0,o.kt)("inlineCode",{parentName:"p"},"executionContext.evaluate")," resolves to ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined"),". DevTools Protocol also supports transferring some additional values that are not serializable by ",(0,o.kt)("inlineCode",{parentName:"p"},"JSON"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"-0"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"NaN"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Infinity"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"-Infinity"),", and bigint literals."),(0,o.kt)("h2",{id:"example-1"},"Example 1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const executionContext = await page.mainFrame().executionContext();\nconst result = await executionContext.evaluate(() => Promise.resolve(8 * 7))* ;\nconsole.log(result); // prints "56"\n')),(0,o.kt)("h2",{id:"example-2"},"Example 2"),(0,o.kt)("p",null,"A string can also be passed in instead of a function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"console.log(await executionContext.evaluate('1 + 2')); // prints \"3\"\n")),(0,o.kt)("h2",{id:"example-3"},"Example 3"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.jshandle"},"JSHandle")," instances can be passed as arguments to the ",(0,o.kt)("inlineCode",{parentName:"p"},"executionContext.* evaluate"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const oneHandle = await executionContext.evaluateHandle(() => 1);\nconst twoHandle = await executionContext.evaluateHandle(() => 2);\nconst result = await executionContext.evaluate(\n   (a, b) => a + b, oneHandle, * twoHandle\n);\nawait oneHandle.dispose();\nawait twoHandle.dispose();\nconsole.log(result); // prints '3'.\n")))}d.isMDXComponent=!0}}]);