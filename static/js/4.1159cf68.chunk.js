(this.webpackJsonpcodeid=this.webpackJsonpcodeid||[]).push([[4],{140:function(e,t,n){e.exports=n.p+"static/media/star_border-24px.e8c07bf4.svg"},176:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return w}));var a=n(142),r=n(143),c=n(115),i=n(0),o=n.n(i),u=n(89),l=n(90),s=n(93),f=n(75),m=n(175),p=n(167),d=n(29),b=n(168),v=n(169),h=n(172),E=n(170),g=n(171),O=n(94),j=n(92),x=n.n(j),k=n(140),y=n.n(k),I=Object(f.a)((function(e){return{postercontainer:{backgroundColor:"#fafafa",display:"flex",justifyContent:"center",marginBottom:e.spacing(2)},posterTitle:{marginBottom:e.spacing(2)}}})),w=function(){var e=I(),t=Object(i.useState)([]),n=Object(c.a)(t,2),f=n[0],j=n[1],k=Object(i.useState)({}),w=Object(c.a)(k,2),S=w[0],D=w[1],C=Object(i.useState)(""),P=Object(c.a)(C,2),J=P[0],N=P[1],T=Object(i.useState)(!1),W=Object(c.a)(T,2),Y=W[0],_=W[1];Object(i.useEffect)((function(){B("start"),F()}),[]);var A=function(e){e.preventDefault(),B(J)},B=function(e){Object(u.c)(e).then((function(e){var t=e.Search.map((function(e){return Object(r.a)(Object(r.a)({},e),{},{favorite:!1})})),n=JSON.parse(Object(l.a)());n?(t.forEach((function(e){n.forEach((function(t){e.imdbID===t.imdbID&&(e.favorite=!0)}))})),j(t)):j(t)})).catch((function(e){alert(e.message)}))},F=function(){Object(u.a)().then((function(e){console.log("res = ",e)})).catch((function(e){console.log("err = ",e)}))},z=function(e){var t=Object(a.a)(f),n=t.findIndex((function(t){return t.imdbID===e.imdbID})),r=JSON.parse(Object(l.a)());if(t[n].favorite=!t[n].favorite,r){var c=r,i=c.findIndex((function(t){return t.imdbID===e.imdbID}));i<0?(c.push(e),Object(l.b)(JSON.stringify(c))):(c.splice(i,1),Object(l.b)(JSON.stringify(c)))}else Object(l.b)(JSON.stringify([e]));j(t)},R=function(e){Object(u.b)(e).then((function(e){_(!0),D(e)})).catch((function(e){alert(e.message)}))},q=function(){_(!1)},G=[{heading:"Title",value:function(e){return function(e){return o.a.createElement(d.a,{onClick:function(){return R(e.imdbID)}},e.Title)}(e)}},{heading:"Year",value:"Year"},{heading:"ID",value:"imdbID"},{heading:"",value:function(e){return function(e){return o.a.createElement(m.a,{title:e.favorite?"remove favorite":"add favorite"},o.a.createElement(p.a,{id:"konfirmasi-".concat(e.imdbID),onClick:function(){return z(e)}},e.favorite?o.a.createElement("img",{alt:x.a,src:x.a}):o.a.createElement("img",{alt:y.a,src:y.a})))}(e)}}],H=[];return 0!==Object.keys(S).length&&["Year","Released","Director","Actors","Plot","Awards"].forEach((function(e,t){var n=o.a.createElement(i.Fragment,{key:t},o.a.createElement(b.a,{item:!0,xs:2},o.a.createElement(d.a,null,e)),o.a.createElement(b.a,{item:!0,xs:10},S[e]));H.push(n)})),o.a.createElement("div",null,o.a.createElement(v.a,{maxWidth:"md"},o.a.createElement("form",{onSubmit:function(e){return A(e)}},o.a.createElement(b.a,{alignItems:"center",container:!0,direction:"row",spacing:2},o.a.createElement(b.a,{item:!0,xs:8},o.a.createElement(h.a,{fullWidth:!0,onChange:function(e){return N(e.target.value)},placeholder:"Search movie title",size:"small",variant:"outlined"})),o.a.createElement(b.a,{item:!0,xs:2},o.a.createElement(p.a,{color:"primary",fullWidth:!0,onClick:function(e){return A(e)},variant:"outlined"},"Cari"))))),0!==f.length?o.a.createElement(s.a,{column:G,data:f}):"",o.a.createElement(O.a,{inputProps:{open:Y,onClose:q}},o.a.createElement(E.a,null,o.a.createElement(b.a,{container:!0},o.a.createElement(b.a,{item:!0,xs:12},o.a.createElement("div",{className:e.postercontainer},o.a.createElement("img",{alt:S.Title,src:S.Poster}))),o.a.createElement(b.a,{item:!0,xs:12},o.a.createElement(d.a,{className:e.posterTitle,variant:"h5"},S.Title),o.a.createElement(b.a,{container:!0,spacing:2},H)))),o.a.createElement(g.a,null,o.a.createElement(p.a,{color:"primary",onClick:q},"Close"))))}},89:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return f})),n.d(t,"a",(function(){return m}));var a=n(99),r=n.n(a),c=n(100),i=n(101),o=n.n(i),u="http://www.omdbapi.com",l=function(e,t,n,a){return new Promise((function(r,c){o.a[t](e,n,a).then((function(e){return r(e.data)})).catch((function(e){var t={code:500,status:"error",message:"Failed to fetch data. Please contact developer."};e.response&&e.response.data?c(e.response.data):c(t)}))}))},s=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l("".concat(u,"/?s=").concat(t,"&plot=full&apikey=761befef"),"get");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l("".concat(u,"/?i=").concat(t,"&apikey=761befef"),"get");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l("".concat("https://simple-contact-crud.herokuapp.com","/contact"),"get");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},90:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));function a(e){localStorage.setItem("fav_novie",e)}function r(){return localStorage.getItem("fav_novie")}},92:function(e,t,n){e.exports=n.p+"static/media/star-24px.555f59ec.svg"},93:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(0),r=n.n(a),c=n(159),i=n(58),o=n(160),u=n(161),l=n(162),s=n(163),f=n(164),m=function(e){var t=e.column,n=e.data;return r.a.createElement(c.a,{component:i.a},r.a.createElement(o.a,null,r.a.createElement(u.a,null,r.a.createElement(l.a,null,t.map((function(e,t){return r.a.createElement(s.a,{key:"".concat(t)},e.heading)})))),r.a.createElement(f.a,null,n.map((function(e,n){return r.a.createElement(l.a,{key:"".concat(n)},t.map((function(t,n){var a=t.value,c="function"===typeof a?a(e):e[a];return r.a.createElement(s.a,{key:n},c||"-")})))})))))};m.defaultProps={column:[],data:[]};var p=m},94:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(0),r=n.n(a),c=n(174),i=function(e){var t=e.children,n=e.inputProps;return r.a.createElement(c.a,n,t)};i.defaultProps={children:null,inputProps:{}};var o=i}}]);
//# sourceMappingURL=4.1159cf68.chunk.js.map