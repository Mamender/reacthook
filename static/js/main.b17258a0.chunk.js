(this.webpackJsonpreacthook=this.webpackJsonpreacthook||[]).push([[0],{11:function(t,e,n){"use strict";n.r(e);var c=n(1),o=n.n(c),r=n(4),i=n.n(r),a=(n(9),n(3)),u=n(0),s=function(){var t=Object(c.useState)([]),e=Object(a.a)(t,2),n=e[0],o=e[1],r=Object(c.useState)("react"),i=Object(a.a)(r,2),s=i[0],h=i[1];Object(c.useEffect)((function(){!function(){var t=window.location.protocol;fetch("".concat(t,"://hn.algolia.com/api/v1/search?query=").concat(s)).then((function(t){return t.json()})).then((function(t){return o(t.hits)})).catch((function(t){return console.log(t)}))}()}),[s]);return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"News"}),Object(u.jsxs)("form",{children:[Object(u.jsx)("input",{type:"text",value:s,onChange:function(t){h(t.target.value)}}),Object(u.jsx)("button",{children:"Serach"})]}),n.map((function(t,e){return Object(u.jsx)("p",{children:t.title},e)}))]})},h=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,12)).then((function(e){var n=e.getCLS,c=e.getFID,o=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),c(t),o(t),r(t),i(t)}))};i.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(s,{})}),document.getElementById("root")),h()},9:function(t,e,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.b17258a0.chunk.js.map