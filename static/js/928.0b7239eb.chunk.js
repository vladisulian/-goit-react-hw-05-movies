"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[928],{418:function(n,t,e){e.d(t,{Lo:function(){return s},NG:function(){return h},Rl:function(){return m},Uh:function(){return f},rc:function(){return v}});var r=e(861),a=e(757),c=e.n(a),u=e(912),i="635ac74a11f3f55a21a984cd556f5915",o="https://api.themoviedb.org/3/";function s(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("\n   ".concat(o,"trending/all/day?api_key=").concat(i));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"movie/").concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"search/movie?api_key=").concat(i,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"movie/").concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"movie/").concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},928:function(n,t,e){e.r(t),e.d(t,{default:function(){return p}});var r=e(439),a=e(791),c=e(418),u=e(87),i=e(184),o=function(n){return n.trendFilms.map((function(n){if(n.title)return(0,i.jsx)("li",{children:(0,i.jsx)(u.rU,{to:"movies/".concat(n.id),children:n.title})},n.id)}))},s=function(n){var t=n.children;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h3",{children:"In trends this day!"}),(0,i.jsx)("ul",{children:t})]})},p=function(){var n=(0,a.useState)([]),t=(0,r.Z)(n,2),e=t[0],u=t[1];return(0,a.useEffect)((function(){(0,c.Lo)().then((function(n){return u(n)})).catch((function(n){return console.log(n)}))}),[]),(0,i.jsx)(s,{children:(0,i.jsx)(o,{trendFilms:e})})}}}]);
//# sourceMappingURL=928.0b7239eb.chunk.js.map