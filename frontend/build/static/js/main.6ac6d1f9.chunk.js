(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{40:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),s=n(13),a=n.n(s),o=n(15),j=n(14),i=n.n(j).a.create({baseURL:"localhost:3333"});console.log(i);var b=i,u=n(0),l=function(e){var t=e.user;return Object(u.jsxs)("div",{children:[Object(u.jsx)("strong",{children:"Nome: "}),t.name," ",Object(u.jsx)("br",{}),Object(u.jsx)("strong",{children:"Email "}),t.email||"nao possui email"," ",Object(u.jsx)("br",{})," ",Object(u.jsx)("br",{})]})};var d=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){b.get("/users").then((function(e){r(e.data)}))}),[]),Object(u.jsx)("div",{className:"App",children:n.map((function(e){return Object(u.jsx)(l,{user:e},e.email)}))})};a.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(d,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.6ac6d1f9.chunk.js.map