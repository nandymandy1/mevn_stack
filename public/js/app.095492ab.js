(function(t){function e(e){for(var r,n,i=e[0],c=e[1],u=e[2],l=0,d=[];l<i.length;l++)n=i[l],s[n]&&d.push(s[n][0]),s[n]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);p&&p(e);while(d.length)d.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],r=!0,n=1;n<a.length;n++){var i=a[n];0!==s[i]&&(r=!1)}r&&(o.splice(e--,1),t=c(c.s=a[0]))}return t}var r={},n={app:0},s={app:0},o=[];function i(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"e7980fed"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={about:1};n[t]?e.push(n[t]):0!==n[t]&&a[t]&&e.push(n[t]=new Promise(function(e,a){for(var r="css/"+({about:"about"}[t]||t)+"."+{about:"a287592d"}[t]+".css",s=c.p+r,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var u=o[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===s))return e()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],l=u.getAttribute("data-href");if(l===r||l===s)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var r=e&&e.target&&e.target.src||s,o=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete n[t],p.parentNode.removeChild(p),a(o)},p.href=s;var f=document.getElementsByTagName("head")[0];f.appendChild(p)}).then(function(){n[t]=0}));var r=s[t];if(0!==r)if(r)e.push(r[2]);else{var o=new Promise(function(e,a){r=s[t]=[e,a]});e.push(r[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(t),u=function(e){l.onerror=l.onload=null,clearTimeout(d);var a=s[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src,o=new Error("Loading chunk "+t+" failed.\n("+r+": "+n+")");o.type=r,o.request=n,a[1](o)}s[t]=void 0}};var d=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(a,r,function(e){return t[e]}.bind(null,r));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var p=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Navbar"),a("br"),a("div",{staticClass:"container"},[a("router-view")],1)],1)},s=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark"},[a("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[t._v("MEVN-Auth")]),t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[a("ul",{staticClass:"navbar-nav ml-auto"},[a("li",{staticClass:"nav-item active"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("\n          Home\n          "),a("span",{staticClass:"sr-only"},[t._v("(current)")])])],1),t.isLoggedIn?t._e():a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/register"}},[t._v("Register")])],1),t.isLoggedIn?t._e():a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/login"}},[t._v("Login")])],1),t.isLoggedIn?a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/about"}},[t._v("About")])],1):t._e(),t.isLoggedIn?a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/profile"}},[t._v("Profile")])],1):t._e(),t.isLoggedIn?a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",on:{click:function(e){return e.preventDefault(),t.logout(e)}}},[t._v("Logout")])]):t._e()])])],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],c=a("cebc"),u=a("2f62"),l={computed:Object(c["a"])({},Object(u["c"])(["isLoggedIn"])),methods:Object(c["a"])({},Object(u["b"])(["logout"]))},d=l,p=a("2877"),f=Object(p["a"])(d,o,i,!1,null,null,null),g=f.exports,m={components:{Navbar:g}},v=m,h=Object(p["a"])(v,n,s,!1,null,null,null),b=h.exports,_=a("8c4f"),C=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},w=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{staticClass:"jumbotron jumbotron-fluid"},[a("div",{staticClass:"container"},[a("h1",{staticClass:"display-4"},[t._v("MEVN Stack")]),a("p",{staticClass:"lead"},[t._v("Simple authentication application built with MEVN Stack using Express, Node.js, Vue.js and MongoDB by Codebook Inc.")])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-3 col-sm-6 col-xs-12"},[a("div",{staticClass:"card bg-dark text-white"},[a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v("MongoDB")]),a("p",{staticClass:"card-text"},[t._v("MongoDB is a cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with schemata. MongoDB is developed by MongoDB Inc.")]),a("a",{staticClass:"btn bg-white",attrs:{href:"https://www.mongodb.com/",target:"_blank"}},[t._v("More Info.")])])])]),a("div",{staticClass:"col-md-3 col-sm-6 col-xs-12"},[a("div",{staticClass:"card bg-info text-white"},[a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v("Express.js")]),a("p",{staticClass:"card-text"},[t._v("Express.js, or simply Express, is a web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs.")]),a("a",{staticClass:"btn bg-white",attrs:{href:"https://expressjs.com/",target:"_blank"}},[t._v("More Info.")])])])]),a("div",{staticClass:"col-md-3 col-sm-6 col-xs-12"},[a("div",{staticClass:"card bg-danger text-white"},[a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v("Vue.js")]),a("p",{staticClass:"card-text"},[t._v("Vue.js features an incrementally adoptable architecture that focuses on declarative rendering and component composition. Advanced features required for complex applications such as routing...")]),a("a",{staticClass:"btn bg-white",attrs:{href:"https://vuejs.org/",target:"_blank"}},[t._v("More Info.")])])])]),a("div",{staticClass:"col-md-3 col-sm-6 col-xs-12"},[a("div",{staticClass:"card bg-success text-white"},[a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v("Node.js")]),a("p",{staticClass:"card-text"},[t._v('As an asynchronous event driven JavaScript runtime, Node is designed to build scalable network applications. In the following "hello world" example, many connections can be handled concurrently.')]),a("a",{staticClass:"btn bg-white",attrs:{href:"https://nodejs.org/",target:"_blank"}},[t._v("More Info.")])])])])])])}],y={name:"home",components:{}},k=y,x=Object(p["a"])(k,C,w,!1,null,null,null),j=x.exports,I=(a("96cf"),a("3b8d")),S=a("bc3a"),O=a.n(S),E={token:localStorage.getItem("token")||"",user:{},status:""},M={isLoggedIn:function(t){return!!t.token},authStatus:function(t){return t.status},user:function(t){return t.user}},A={login:function(){var t=Object(I["a"])(regeneratorRuntime.mark(function t(e,a){var r,n,s,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,r("auth_request"),t.next=4,O.a.post("/api/users/login",a);case 4:return n=t.sent,n.data.success&&(s=n.data.token,o=n.data.user,localStorage.setItem("token",s),O.a.defaults.headers.common["Authorization"]=s,r("auth_success",s,o)),t.abrupt("return",n);case 7:case"end":return t.stop()}},t)}));function e(e,a){return t.apply(this,arguments)}return e}(),register:function(){var t=Object(I["a"])(regeneratorRuntime.mark(function t(e,a){var r,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,r("register_request"),t.next=4,O.a.post("/api/users/register",a);case 4:return n=t.sent,void 0!==n.data.success&&r("register_success"),t.abrupt("return",n);case 7:case"end":return t.stop()}},t)}));function e(e,a){return t.apply(this,arguments)}return e}(),loadProfile:function(){var t=Object(I["a"])(regeneratorRuntime.mark(function t(e){var a,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return a=e.commit,t.next=3,O.a.get("/api/users/profile");case 3:return r=t.sent,a("get_profile",r.data.user),t.abrupt("return",r);case 6:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}(),logout:function(){var t=Object(I["a"])(regeneratorRuntime.mark(function t(e){var a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return a=e.commit,t.next=3,localStorage.removeItem("token");case 3:return a("logout"),delete O.a.defaults.headers.common["Authorization"],T.push("/login"),t.abrupt("return");case 7:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}()},L={auth_request:function(t){t.status="loading"},register_request:function(t){t.status="loading"},register_success:function(t){t.status="success"},register_error:function(t){t.status="error"},auth_success:function(t,e,a){t.status="success",t.token=e,t.user=a},get_profile:function(t,e){t.user=e},auth_error:function(t){t.status="error"},logout:function(t){t.status="",t.token="",t.user={}}},N={state:E,actions:A,getters:M,mutations:L};r["a"].use(u["a"]);var q=new u["a"].Store({modules:{Auth:N},state:{},mutations:{},actions:{}});r["a"].use(_["a"]);var P=new _["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:j},{path:"/login",name:"login",component:function(){return a.e("about").then(a.bind(null,"a55b"))},meta:{requiresGuest:!0}},{path:"/register",name:"register",component:function(){return a.e("about").then(a.bind(null,"73cf"))},meta:{requiresGuest:!0}},{path:"/profile",name:"profile",component:function(){return a.e("about").then(a.bind(null,"c66d"))},meta:{requiresAuth:!0}},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}}]});P.beforeEach(function(t,e,a){t.matched.some(function(t){return t.meta.requiresAuth})?q.getters.isLoggedIn?a():a("/login"):t.matched.some(function(t){return t.meta.requiresGuest})&&q.getters.isLoggedIn?a("/profile"):a()});var T=P;r["a"].config.productionTip=!1,r["a"].prototype.$http=O.a;var B=localStorage.getItem("token");B&&(r["a"].prototype.$http.defaults.headers.common["Authorization"]=B),new r["a"]({router:T,store:q,render:function(t){return t(b)}}).$mount("#app")}});
//# sourceMappingURL=app.095492ab.js.map