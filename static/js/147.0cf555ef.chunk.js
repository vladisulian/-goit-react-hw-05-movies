"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[147,790],{418:function(e,t,n){n.d(t,{Lo:function(){return o},NG:function(){return d},Rl:function(){return x},Uh:function(){return h},rc:function(){return v}});var r=n(861),a=n(757),c=n.n(a),s=n(912),i="635ac74a11f3f55a21a984cd556f5915",u="https://api.themoviedb.org/3/";function o(){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("\n   ".concat(u,"trending/all/day?api_key=").concat(i));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(u,"movie/").concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(u,"search/movie?api_key=").concat(i,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(u,"movie/").concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){return w.apply(this,arguments)}function w(){return(w=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(u,"movie/").concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},147:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var r=n(439),a=n(418),c=n(791),s=n(689),i=n(184),u=function(e){var t=e.children;return(0,i.jsx)("ul",{className:"reviews-list",children:t})},o=n(790),l=function(e){var t=e.reviews;return 0===t.length?(0,i.jsx)("h1",{children:"There is no reviews :("}):t.map((function(e){var n=(0,o.getPosterUrl)(e.author_details.avatar_path);if(0!==t.length)return(0,i.jsxs)("li",{className:"review-author",children:[(0,i.jsxs)("div",{className:"review-author-info",children:[(0,i.jsxs)("p",{className:"review-author-name",children:[e.author," ",(0,i.jsxs)("span",{children:['"',e.author_details.username,'"']})]}),e.author_details.avatar_path?(0,i.jsx)("img",{src:n,alt:"avatar",className:"review-avatar"}):(0,i.jsx)("div",{className:"review-without-avatar",children:"Avatar"})]}),(0,i.jsx)("div",{className:"review-text-container",children:(0,i.jsx)("p",{className:"review-text",children:e.content})})]},e.id)}))},h=function(){var e=(0,s.UO)().movieId,t=(0,c.useState)([]),n=(0,r.Z)(t,2),o=n[0],h=n[1];return(0,c.useEffect)((function(){h([]),(0,a.Rl)(e).then((function(e){return h(e)})).catch((function(e){return console.log(e)}))}),[e]),(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(u,{children:(0,i.jsx)(l,{reviews:o})})})}},790:function(e,t,n){n.r(t),n.d(t,{default:function(){return l},getPosterUrl:function(){return o}});var r=n(439),a=n(791),c=n(87),s=n(689),i=n(418),u=n(184),o=function(e){return String(e).includes("https:")?e.slice(1):"https://www.themoviedb.org/t/p/w220_and_h330_face".concat(e)},l=function(){var e=(0,s.UO)().movieId,t=(0,a.useState)({}),n=(0,r.Z)(t,2),l=n[0],h=n[1],p=o(l.poster_path);return(0,a.useEffect)((function(){(0,i.Uh)(e).then((function(e){return h(e)})).catch((function(e){return console.log(e)}))}),[e]),(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(a.Suspense,{fallback:(0,u.jsx)("h4",{children:"Please, wait a bit. Loading..."}),children:[(0,u.jsxs)("div",{className:"movie-container",children:[(0,u.jsx)("img",{src:p,alt:"poster",className:"poster"}),(0,u.jsxs)("div",{className:"text-container",children:[(0,u.jsxs)("p",{className:"film-title ",children:[l.title,(0,u.jsxs)("span",{children:["(",String(l.release_date).slice(0,4),")"]})]}),(0,u.jsx)("p",{className:"film-bold",children:"Popularity"}),(0,u.jsx)("span",{className:"popularity",children:l.popularity}),(0,u.jsx)("p",{className:"film-bold overview",children:"Overview"}),(0,u.jsx)("p",{className:"overview-desc",children:l.overview}),(0,u.jsx)("h4",{children:"Additional information"}),(0,u.jsxs)("ul",{children:[(0,u.jsx)("li",{children:(0,u.jsx)(c.rU,{to:"cast",children:"Cast"})}),(0,u.jsx)("li",{children:(0,u.jsx)(c.rU,{to:"reviews",children:"Reviews"})})]})]})]}),(0,u.jsx)(s.j3,{})]})})}}}]);
//# sourceMappingURL=147.0cf555ef.chunk.js.map