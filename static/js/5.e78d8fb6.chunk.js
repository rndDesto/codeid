(this.webpackJsonpcodeid=this.webpackJsonpcodeid||[]).push([[5],{177:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return O}));var a=n(115),r=n(0),c=n.n(r),u=n(90),o=n(93),i=n(75),s=n(29),l=n(175),f=n(167),m=n(168),p=n(170),d=n(171),v=n(94),b=n(89),E=n(92),h=n.n(E),g=Object(i.a)((function(e){return{postercontainer:{backgroundColor:"#fafafa",display:"flex",justifyContent:"center",marginBottom:e.spacing(2)},posterTitle:{marginBottom:e.spacing(2)}}})),O=function(){var e=g(),t=Object(r.useState)([]),n=Object(a.a)(t,2),i=n[0],E=n[1],O=Object(r.useState)({}),k=Object(a.a)(O,2),j=k[0],y=k[1],x=Object(r.useState)(!1),w=Object(a.a)(x,2),I=w[0],P=w[1];Object(r.useEffect)((function(){var e=Object(u.a)();e&&E(JSON.parse(e))}),[]);var S=function(e){Object(b.b)(e).then((function(e){P(!0),y(e)})).catch((function(e){alert(e.message)}))},C=function(){P(!1)},D=function(e){var t=JSON.parse(Object(u.a)()),n=t.findIndex((function(t){return t.imdbID===e.imdbID}));t.splice(n,1),Object(u.b)(JSON.stringify(t)),E(t)},T=[{heading:"Title",value:function(e){return function(e){return c.a.createElement(s.a,{onClick:function(){return S(e.imdbID)}},e.Title)}(e)}},{heading:"Year",value:"Year"},{heading:"ID",value:"imdbID"},{heading:"",value:function(e){return function(e){return c.a.createElement(l.a,{title:"remove favorite"},c.a.createElement(f.a,{id:"konfirmasi-".concat(e.imdbID),onClick:function(){return D(e)}},c.a.createElement("img",{alt:h.a,src:h.a})))}(e)}}],J=[];return 0!==Object.keys(j).length&&["Year","Released","Director","Actors","Plot","Awards"].forEach((function(e,t){var n=c.a.createElement(r.Fragment,{key:t},c.a.createElement(m.a,{item:!0,xs:2},c.a.createElement(s.a,null,e)),c.a.createElement(m.a,{item:!0,xs:10},j[e]));J.push(n)})),c.a.createElement("div",null,0!==i.length?c.a.createElement(o.a,{column:T,data:i}):"",c.a.createElement(v.a,{inputProps:{open:I,onClose:C}},c.a.createElement(p.a,null,c.a.createElement(m.a,{container:!0},c.a.createElement(m.a,{item:!0,xs:12},c.a.createElement("div",{className:e.postercontainer},c.a.createElement("img",{alt:j.Title,src:j.Poster}))),c.a.createElement(m.a,{item:!0,xs:12},c.a.createElement(s.a,{className:e.posterTitle,variant:"h5"},j.Title),c.a.createElement(m.a,{container:!0,spacing:2},J)))),c.a.createElement(d.a,null,c.a.createElement(f.a,{color:"primary",onClick:C},"Close"))))}},89:function(e,t,n){"use strict";n.d(t,"c",(function(){return l})),n.d(t,"b",(function(){return f})),n.d(t,"a",(function(){return m}));var a=n(99),r=n.n(a),c=n(100),u=n(101),o=n.n(u),i="http://www.omdbapi.com",s=function(e,t,n,a){return new Promise((function(r,c){o.a[t](e,n,a).then((function(e){return r(e.data)})).catch((function(e){var t={code:500,status:"error",message:"Failed to fetch data. Please contact developer."};e.response&&e.response.data?c(e.response.data):c(t)}))}))},l=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s("".concat(i,"/?s=").concat(t,"&plot=full&apikey=761befef"),"get");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s("".concat(i,"/?i=").concat(t,"&apikey=761befef"),"get");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s("".concat("https://simple-contact-crud.herokuapp.com","/contact"),"get");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},90:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));function a(e){localStorage.setItem("fav_novie",e)}function r(){return localStorage.getItem("fav_novie")}},92:function(e,t,n){e.exports=n.p+"static/media/star-24px.555f59ec.svg"},93:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(0),r=n.n(a),c=n(159),u=n(58),o=n(160),i=n(161),s=n(162),l=n(163),f=n(164),m=function(e){var t=e.column,n=e.data;return r.a.createElement(c.a,{component:u.a},r.a.createElement(o.a,null,r.a.createElement(i.a,null,r.a.createElement(s.a,null,t.map((function(e,t){return r.a.createElement(l.a,{key:"".concat(t)},e.heading)})))),r.a.createElement(f.a,null,n.map((function(e,n){return r.a.createElement(s.a,{key:"".concat(n)},t.map((function(t,n){var a=t.value,c="function"===typeof a?a(e):e[a];return r.a.createElement(l.a,{key:n},c||"-")})))})))))};m.defaultProps={column:[],data:[]};var p=m},94:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(0),r=n.n(a),c=n(174),u=function(e){var t=e.children,n=e.inputProps;return r.a.createElement(c.a,n,t)};u.defaultProps={children:null,inputProps:{}};var o=u}}]);
//# sourceMappingURL=5.e78d8fb6.chunk.js.map