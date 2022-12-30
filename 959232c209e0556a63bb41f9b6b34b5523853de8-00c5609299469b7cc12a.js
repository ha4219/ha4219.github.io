"use strict";(self.webpackChunkha4219_github_io=self.webpackChunkha4219_github_io||[]).push([[504],{3204:function(e){const t=(e,t)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);if(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim(),0===e.length)return"";if(1===e.length)return t.pascalCase?e.toUpperCase():e.toLowerCase();return e!==e.toLowerCase()&&(e=(e=>{let t=!1,a=!1,r=!1;for(let n=0;n<e.length;n++){const s=e[n];t&&/[a-zA-Z]/.test(s)&&s.toUpperCase()===s?(e=e.slice(0,n)+"-"+e.slice(n),t=!1,r=a,a=!0,n++):a&&r&&/[a-zA-Z]/.test(s)&&s.toLowerCase()===s?(e=e.slice(0,n-1)+"-"+e.slice(n-1),r=a,a=!1,t=!0):(t=s.toLowerCase()===s&&s.toUpperCase()!==s,r=a,a=s.toUpperCase()===s&&s.toLowerCase()!==s)}return e})(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,((e,t)=>t.toUpperCase())).replace(/\d+(\w|$)/g,(e=>e.toUpperCase())),a=e,t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a;var a};e.exports=t,e.exports.default=t},3723:function(e,t,a){a.d(t,{L:function(){return u},M:function(){return x},P:function(){return w},S:function(){return I},_:function(){return i},a:function(){return o},b:function(){return d},g:function(){return c},h:function(){return l}});var r=a(7294),n=(a(3204),a(5697)),s=a.n(n);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)t.indexOf(a=s[r])>=0||(n[a]=e[a]);return n}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function d(e,t,a,r,n){return void 0===n&&(n={}),o({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:o({},n,{opacity:t?1:0})})}function c(e,t,a,r,n,s,i,l){const d={};s&&(d.backgroundColor=s,"fixed"===a?(d.width=r,d.height=n,d.backgroundColor=s,d.position="relative"):("constrained"===a||"fullWidth"===a)&&(d.position="absolute",d.top=0,d.left=0,d.bottom=0,d.right=0)),i&&(d.objectFit=i),l&&(d.objectPosition=l);const c=o({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:o({opacity:t?0:1,transition:"opacity 500ms linear"},d)});return c}const m=["children"],g=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+n+"' width='"+a+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},u=function(e){let{children:t}=e,a=i(e,m);return r.createElement(r.Fragment,null,r.createElement(g,o({},a)),t,null)},p=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],f=function(e){let{src:t,srcSet:a,loading:n,alt:s="",shouldLoad:l}=e,d=i(e,p);return r.createElement("img",o({},d,{decoding:"async",loading:n,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,alt:s}))},b=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,s=i(e,h);const l=s.sizes||(null==t?void 0:t.sizes),d=r.createElement(f,o({},s,t,{sizes:l,shouldLoad:n}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:s}=e;return r.createElement("source",{key:t+"-"+s+"-"+a,type:s,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:l})})),d):d};var y;f.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},b.displayName="Picture",b.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const v=["fallback"],w=function(e){let{fallback:t}=e,a=i(e,v);return t?r.createElement(b,o({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",o({},a))};w.displayName="Placeholder",w.propTypes={fallback:n.string,sources:null==(y=b.propTypes)?void 0:y.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const x=function(e){return r.createElement(r.Fragment,null,r.createElement(b,o({},e)),r.createElement("noscript",null,r.createElement(b,o({},e,{shouldLoad:!0}))))};x.displayName="MainImage",x.propTypes=b.propTypes;const k=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),o=3;o<r;o++)n[o-3]=arguments[o];return e.alt||""===e.alt?s().string.apply(s(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},E={image:s().object.isRequired,alt:k},C=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],N=["style","className"],L=new Set;let S,T;const z=function(e){let{as:t="div",image:n,style:s,backgroundColor:d,className:c,class:m,onStartLoad:g,onLoad:u,onError:p}=e,h=i(e,C);const{width:f,height:b,layout:y}=n,v=function(e,t,a){const r={};let n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}(f,b,y),{style:w,className:x}=v,k=i(v,N),E=(0,r.useRef)(),z=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);m&&(c=m);const A=function(e,t,a){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+a+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(y,f,b);return(0,r.useEffect)((()=>{S||(S=Promise.all([a.e(774),a.e(223)]).then(a.bind(a,8223)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return T=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=E.current.querySelector("[data-gatsby-image-ssr]");if(e&&l())return e.complete?(null==g||g({wasCached:!0}),null==u||u({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==g||g({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==u||u({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void L.add(z);if(T&&L.has(z))return;let t,r;return S.then((e=>{let{renderImageToString:a,swapPlaceholderImage:i}=e;E.current&&(E.current.innerHTML=a(o({isLoading:!0,isLoaded:L.has(z),image:n},h)),L.has(z)||(t=requestAnimationFrame((()=>{E.current&&(r=i(E.current,z,L,s,g,u,p))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{L.has(z)&&T&&(E.current.innerHTML=T(o({isLoading:L.has(z),isLoaded:L.has(z),image:n},h)),null==g||g({wasCached:!0}),null==u||u({wasCached:!0}))}),[n]),(0,r.createElement)(t,o({},k,{style:o({},w,s,{backgroundColor:d}),className:x+(c?" "+c:""),ref:E,dangerouslySetInnerHTML:{__html:A},suppressHydrationWarning:!0}))},A=(0,r.memo)((function(e){return e.image?(0,r.createElement)(z,e):null}));A.propTypes=E,A.displayName="GatsbyImage";const R=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],j=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?s().number.apply(s(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},O=new Set(["fixed","fullWidth","constrained"]),_={src:s().string.isRequired,alt:k,width:j,height:j,sizes:s().string,layout:e=>{if(void 0!==e.layout&&!O.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},I=(M=A,function(e){let{src:t,__imageData:a,__error:n}=e,s=i(e,R);return n&&console.warn(n),a?r.createElement(M,o({image:a},s)):(console.warn("Image not loaded",t),null)});var M;I.displayName="StaticImage",I.propTypes=_},2968:function(e,t,a){a.d(t,{Z:function(){return l}});var r=a(7294);var n=()=>r.createElement("footer",{"data-testid":"footer",className:"absolute bottom-0 w-full whitespace-nowrap bg-white p-4 px-2 dark:bg-gray-900 sm:p-6"},r.createElement("div",{className:"container mx-auto"},r.createElement("div",{className:"sm:flex sm:items-center sm:justify-between"},r.createElement("span",{className:"text-sm text-gray-500 dark:text-gray-400 sm:text-center"},"© 2022 ",r.createElement("a",{href:"https://flowbite.com/",className:"hover:underline"},"jeongdongha.me"),". All Rights Reserved."),r.createElement("div",{className:"mt-4 flex justify-center space-x-6 sm:mt-0"},r.createElement("a",{href:"https://www.instagram.com/dhjeong4219/",className:"text-gray-500 hover:text-gray-900 dark:hover:text-white"},r.createElement("svg",{className:"h-5 w-5",fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true"},r.createElement("path",{fillRule:"evenodd",d:"M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",clipRule:"evenodd"})),r.createElement("span",{className:"sr-only"},"Instagram page")),r.createElement("a",{href:"https://twitter.com/jdh4219",className:"text-gray-500 hover:text-gray-900 dark:hover:text-white"},r.createElement("svg",{className:"h-5 w-5",fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true"},r.createElement("path",{d:"M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"})),r.createElement("span",{className:"sr-only"},"Twitter page")),r.createElement("a",{href:"https://github.com/ha4219",className:"text-gray-500 hover:text-gray-900 dark:hover:text-white"},r.createElement("svg",{className:"h-5 w-5",fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true"},r.createElement("path",{fillRule:"evenodd",d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",clipRule:"evenodd"})),r.createElement("span",{className:"sr-only"},"GitHub account")))))),s=a(1883),o=a(3723);function i(){var e;const{0:t,1:n}=(0,r.useState)(!1);return r.createElement("header",{"data-testid":"header",className:"border-gray-200 bg-white px-2 dark:border-gray-700 dark:bg-gray-900"},r.createElement("div",{className:"container mx-auto flex flex-wrap items-center justify-between"},r.createElement(s.Link,{to:"/",className:"flex items-center","data-testid":"logo"},r.createElement(o.S,{src:"../images/logoB.png",alt:"logo-image",className:"sm:h-15 mr-3 h-10",__imageData:a(5716)}),r.createElement("span",{className:"text-l self-center whitespace-nowrap font-semibold dark:text-white"},"jeongdongha.me")),r.createElement("button",{"data-collapse-toggle":"navbar-default",type:"button",className:"ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2  dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden","aria-controls":"navbar-default","aria-expanded":t,onClick:()=>n((e=>!e))},r.createElement("span",{className:"sr-only"},"Open main menu"),r.createElement("svg",{"data-collapse-toggle":"navbar-default",className:"h-6 w-6","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{fillRule:"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",clipRule:"evenodd"}))),r.createElement("div",{className:"w-full md:block md:w-auto",id:"navbar-default",hidden:null!==(e=!t)&&void 0!==e&&e},r.createElement("ul",{className:"mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:text-sm md:font-medium md:dark:bg-gray-900"},r.createElement("li",null,r.createElement(s.Link,{to:"/about",activeClassName:"bg-gray-100 dark:bg-gray-700 dark:text-white md:hover:bg-transparent md:hover:text-blue-700 md:dark:bg-transparent md:dark:text-white md:bg-transparent md:text-blue-700",className:"block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"},"About")),r.createElement("li",null,r.createElement(s.Link,{to:"/projects",activeClassName:"bg-gray-100 dark:bg-gray-700 dark:text-white md:hover:bg-transparent md:hover:text-blue-700 md:dark:bg-transparent md:dark:text-white md:bg-transparent md:text-blue-700",className:"block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"},"Projects")),r.createElement("li",null,r.createElement(s.Link,{to:"/posts",activeClassName:"bg-gray-100 dark:bg-gray-700 dark:text-white md:hover:bg-transparent md:hover:text-blue-700 md:dark:bg-transparent md:dark:text-white md:bg-transparent md:text-blue-700",className:"block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"},"Posts"))))))}var l=e=>{let{children:t}=e;return r.createElement("div",{style:{position:"relative",minHeight:"100vh",paddingBottom:"6rem"}},r.createElement(i,null),r.createElement("div",{className:"px-10 pt-10 sm:px-24"},t),r.createElement(n,null))}},5716:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/e9471ff7cc72c4b159fd9fe8f6569f14/fcdb9/logoB.png","srcSet":"/static/e9471ff7cc72c4b159fd9fe8f6569f14/29278/logoB.png 12w,\\n/static/e9471ff7cc72c4b159fd9fe8f6569f14/2391d/logoB.png 24w,\\n/static/e9471ff7cc72c4b159fd9fe8f6569f14/fcdb9/logoB.png 48w","sizes":"(min-width: 48px) 48px, 100vw"},"sources":[{"srcSet":"/static/e9471ff7cc72c4b159fd9fe8f6569f14/30aa9/logoB.webp 12w,\\n/static/e9471ff7cc72c4b159fd9fe8f6569f14/4e704/logoB.webp 24w,\\n/static/e9471ff7cc72c4b159fd9fe8f6569f14/e78b1/logoB.webp 48w","type":"image/webp","sizes":"(min-width: 48px) 48px, 100vw"}]},"width":48,"height":48}')}}]);
//# sourceMappingURL=959232c209e0556a63bb41f9b6b34b5523853de8-00c5609299469b7cc12a.js.map