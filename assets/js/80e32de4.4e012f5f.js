"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[25581],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(f,p(p({ref:t},s),{},{components:n})):r.createElement(f,p({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var u=2;u<o;u++)p[u]=n[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7391:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return m}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),p=["components"],i={},l=void 0,u={unversionedId:"puppeteer.page.waitforselector",id:"puppeteer.page.waitforselector",isDocsHomePage:!1,title:"puppeteer.page.waitforselector",description:"Home &gt; puppeteer &gt; Page &gt; waitForSelector",source:"@site/docs/puppeteer.page.waitforselector.md",sourceDirName:".",slug:"/puppeteer.page.waitforselector",permalink:"/puppeteer/docs/next/puppeteer.page.waitforselector",editUrl:"https://github.com/facebook/puppeteer/edit/main/website/docs/puppeteer.page.waitforselector.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"puppeteer.page.waitforresponse",permalink:"/puppeteer/docs/next/puppeteer.page.waitforresponse"},next:{title:"puppeteer.page.waitfortimeout",permalink:"/puppeteer/docs/next/puppeteer.page.waitfortimeout"}},s=[{value:"Page.waitForSelector() method",id:"pagewaitforselector-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Remarks",id:"remarks",children:[]}],c={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/index"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer"},"puppeteer")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.page"},"Page")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.page.waitforselector"},"waitForSelector")),(0,o.kt)("h2",{id:"pagewaitforselector-method"},"Page.waitForSelector() method"),(0,o.kt)("p",null,"Wait for the ",(0,o.kt)("inlineCode",{parentName:"p"},"selector")," to appear in page. If at the moment of calling the method the ",(0,o.kt)("inlineCode",{parentName:"p"},"selector")," already exists, the method will return immediately. If the ",(0,o.kt)("inlineCode",{parentName:"p"},"selector")," doesn't appear after the ",(0,o.kt)("inlineCode",{parentName:"p"},"timeout")," milliseconds of waiting, the function will throw."),(0,o.kt)("p",null,"This method works across navigations:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const puppeteer = require('puppeteer');\n(async () => {\nconst browser = await puppeteer.launch();\nconst page = await browser.newPage();\nlet currentURL;\npage\n.waitForSelector('img')\n.then(() => console.log('First URL with image: ' + currentURL));\nfor (currentURL of [\n'https://example.com',\n'https://google.com',\n'https://bbc.com',\n]) {\nawait page.goto(currentURL);\n}\nawait browser.close();\n})();\n")),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"waitForSelector(selector: string, options?: {\n        visible?: boolean;\n        hidden?: boolean;\n        timeout?: number;\n    }): Promise<ElementHandle | null>;\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"selector"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"A ",(0,o.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors"},"selector")," of an element to wait for")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"options"),(0,o.kt)("td",{parentName:"tr",align:null},"{ visible?: boolean; hidden?: boolean; timeout?: number; }"),(0,o.kt)("td",{parentName:"tr",align:null},"Optional waiting parameters")))),(0,o.kt)("b",null,"Returns:"),(0,o.kt)("p",null,"Promise","<",(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.elementhandle"},"ElementHandle")," ","|"," null",">"),(0,o.kt)("p",null,"Promise which resolves when element specified by selector string is added to DOM. Resolves to ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," if waiting for hidden: ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," and selector is not found in DOM."),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"The optional Parameter in Arguments ",(0,o.kt)("inlineCode",{parentName:"p"},"options")," are :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Visible"),": A boolean wait for element to be present in DOM and to be visible, i.e. to not have ",(0,o.kt)("inlineCode",{parentName:"p"},"display: none")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"visibility: hidden")," CSS properties. Defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"hidden"),": ait for element to not be found in the DOM or to be hidden, i.e. have ",(0,o.kt)("inlineCode",{parentName:"p"},"display: none")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"visibility: hidden")," CSS properties. Defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"timeout"),": maximum time to wait for in milliseconds. Defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"30000")," (30 seconds). Pass ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," to disable timeout. The default value can be changed by using the ",(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.page.setdefaulttimeout"},"Page.setDefaultTimeout()")," method."))))}m.isMDXComponent=!0}}]);