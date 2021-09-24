(self.webpackChunk=self.webpackChunk||[]).push([[17716],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>d,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(r),h=a,f=p["".concat(s,".").concat(h)]||p[h]||c[h]||o;return r?n.createElement(f,i(i({ref:t},d),{},{components:r})):n.createElement(f,i({ref:t},d))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},12375:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>u,toc:()=>d,default:()=>p});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),i=["components"],l={id:"routing",title:"Routing",original_id:"routing"},s=void 0,u={unversionedId:"routing",id:"version-v5.0.0/routing",isDocsHomePage:!1,title:"Routing",description:"Historically, Relay started out internally at Facebook as a routing framework. However, Relay no longer makes any assumptions about routing, and works with a variety of routing options.",source:"@site/versioned_docs/version-v5.0.0/Modern-Routing.md",sourceDirName:".",slug:"/routing",permalink:"/docs/v5.0.0/routing",editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v5.0.0/Modern-Routing.md",version:"v5.0.0",lastUpdatedBy:"Jordan Eldredge",lastUpdatedAt:1632515793,formattedLastUpdatedAt:"9/24/2021",frontMatter:{id:"routing",title:"Routing",original_id:"routing"},sidebar:"version-v5.0.0/docs",previous:{title:"fetchQuery",permalink:"/docs/v5.0.0/fetch-query"},next:{title:"Debugging",permalink:"/docs/v5.0.0/relay-debugging"}},d=[{value:"No Routing",id:"no-routing",children:[]},{value:"Flat Routes",id:"flat-routes",children:[]},{value:"Nested Routes",id:"nested-routes",children:[{value:"React Router",id:"react-router",children:[]},{value:"Found",id:"found",children:[]}]},{value:"Custom Routing and More",id:"custom-routing-and-more",children:[]}],c={toc:d};function p(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Historically, Relay started out internally at Facebook as a routing framework. However, Relay no longer makes any assumptions about routing, and works with a variety of routing options."),(0,o.kt)("h2",{id:"no-routing"},"No Routing"),(0,o.kt)("p",null,"If the Relay part of an application is some widget or single view as part of a larger application, you don't need any routing. You can just render a ",(0,o.kt)("inlineCode",{parentName:"p"},"QueryRenderer")," somewhere on the page to fetch and render the data you need there. This option is simple and should be used when sufficient."),(0,o.kt)("h2",{id:"flat-routes"},"Flat Routes"),(0,o.kt)("p",null,"When not nesting routes with Relay data dependencies, such as when using flat routes, it is sufficient to just render a ",(0,o.kt)("inlineCode",{parentName:"p"},"QueryRenderer")," for the parts of your application that require Relay data. You can also use the options below that integrate your routes with their data dependencies."),(0,o.kt)("h2",{id:"nested-routes"},"Nested Routes"),(0,o.kt)("p",null,"Nested routes with Relay data dependencies introduce an additional complication. While it's possible to render a ",(0,o.kt)("inlineCode",{parentName:"p"},"QueryRenderer")," per route, doing so will lead to request waterfalls in the general case where parent routes do not render their child routes until the data for those parent routes are available. This generally leads to an unnecessary additional delay in loading the data for the page, but may be acceptable for small applications or for applications with shallow route trees."),(0,o.kt)("p",null,"Integration options are available for open-source routing libraries that can instead fetch data for nested routes in parallel. In many of these cases, using a batching network layer can bring additional benefits in avoiding sending multiple HTTP requests."),(0,o.kt)("h3",{id:"react-router"},(0,o.kt)("a",{parentName:"h3",href:"https://reacttraining.com/react-router/"},"React Router")),(0,o.kt)("p",null,"Integration with Relay Classic for React Router v2 or v3 is available via ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/relay-tools/react-router-relay"},(0,o.kt)("inlineCode",{parentName:"a"},"react-router-relay")),", which will aggregate the queries for matched routes, and request data for all routes in parallel."),(0,o.kt)("p",null,"The component-based approach of React Router v4 does not readily allow for aggregating the data requirements for nested routes, and as such does not readily permit an approach that will avoid request waterfalls from nesting ",(0,o.kt)("inlineCode",{parentName:"p"},"QueryRenderer")," components."),(0,o.kt)("h3",{id:"found"},(0,o.kt)("a",{parentName:"h3",href:"https://github.com/4Catalyzer/found"},"Found")),(0,o.kt)("p",null,"Found offers integration with Relay Modern and Relay Classic via ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/4Catalyzer/found-relay"},"Found Relay"),". Found Relay runs queries for matched routes in parallel, and supports fetching Relay data in parallel with downloading async bundles from code splitting when using Relay Modern."),(0,o.kt)("h2",{id:"custom-routing-and-more"},"Custom Routing and More"),(0,o.kt)("p",null,"The options listed above are not exhaustive. If you are aware of other routing solutions that work well with Relay Modern, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/relay/issues/new"},"please let us know"),"."))}p.isMDXComponent=!0}}]);