(this["webpackJsonpmern.ecommerce.client"]=this["webpackJsonpmern.ecommerce.client"]||[]).push([[38],{2859:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return u}));var n=a(10),r=a.n(n),c=a(17),d=a(27),s=a(25),i=function(e,t,a){var n,r;console.error("[actions]".concat(a," error"),(null===t||void 0===t||null===(n=t.response)||void 0===n?void 0:n.data)||t),e({type:d.e.ERROR,payload:(null===t||void 0===t||null===(r=t.response)||void 0===r?void 0:r.data)||t})},o=function(e,t,a,n,o){return function(){var u=Object(c.a)(r.a.mark((function c(u){var l,b;return r.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,n=Number.parseInt(n,10)||1,o=Number.parseInt(o,10)||10,u({type:d.e.START_LOADING}),r.next=6,s.S.getAll(e,t,a,n,o);case 6:l=r.sent,b=l.data,u({type:d.e.GET_ALL,payload:b}),u({type:d.e.END_LOADING}),r.next=16;break;case 13:r.prev=13,r.t0=r.catch(0),i(u,r.t0,"[orders][getAll]");case 16:case"end":return r.stop()}}),c,null,[[0,13]])})));return function(e){return u.apply(this,arguments)}}()},u=function(e,t){return function(){var a=Object(c.a)(r.a.mark((function a(n){var c,o;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,n({type:d.e.START_LOADING}),a.next=5,s.S.update(e,t);case 5:c=a.sent,o=c.data,n({type:d.e.UPDATE,payload:o.data}),n({type:d.e.END_LOADING}),a.next=15;break;case 12:a.prev=12,a.t0=a.catch(0),i(n,a.t0,"[orders][update]");case 15:case"end":return a.stop()}}),a,null,[[0,12]])})));return function(e){return a.apply(this,arguments)}}()}},3621:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return D}));var n=a(16),r=a(26),c=a(1),d=a(2783),s=a.n(d),i=a(2885),o=a(2886),u=a(2889),l=a(2888),b=a(2756),j=a(2772),O=a(305),h=a(2776),p=a(92),f=a(2859),g=a(36),m=a(101),x=a(389),v=a(126),S=a(2787),y=a(235),P=a(2808),I=a(3096),k=a(2958),w=a(29),A=a(2799),C=a(0);function D(){var e=Object(m.d)().t,t=Object(p.b)(),a=Object(p.c)((function(e){return e.orderManager})),d=a.list,D=a.isLoading,N=a.error,L=Object(c.useState)("asc"),E=Object(n.a)(L,2),R=E[0],T=E[1],G=Object(c.useState)("order"),_=Object(n.a)(G,2),M=_[0],J=_[1],U=Object(c.useState)(0),K=Object(n.a)(U,2),W=K[0],q=K[1],z=Object(c.useState)(10),B=Object(n.a)(z,2),F=B[0],H=B[1],Q=Object(c.useState)(null),V=Object(n.a)(Q,2),X=V[0],Y=V[1],Z=Object(c.useState)(!1),$=Object(n.a)(Z,2),ee=$[0],te=$[1],ae=Object(c.useState)(null),ne=Object(n.a)(ae,2),re=ne[0],ce=ne[1],de=Object(c.useState)(!1),se=Object(n.a)(de,2),ie=se[0],oe=se[1],ue=Object(c.useState)(""),le=Object(n.a)(ue,2),be=le[0],je=le[1],Oe=Object(c.useState)(""),he=Object(n.a)(Oe,2),pe=he[0],fe=he[1],ge=Object(c.useState)(""),me=Object(n.a)(ge,2),xe=me[0],ve=me[1];Object(c.useEffect)((function(){t(Object(f.a)(be,pe,xe,1,1e5))}),[t,pe,xe]);var Se=[{id:"numericId",disablePadding:!1,label:"M\xe3"},{id:"name",numeric:!1,disablePadding:!0,label:"Kh\xe1ch h\xe0ng"},{id:"phone",numeric:!1,disablePadding:!0,label:"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i"},{id:"status",numeric:!1,disablePadding:!0,label:e("order.order-status")},{id:"paymentStatus",numeric:!1,disablePadding:!0,label:e("order.payment-status")},{id:"paymentMethod",numeric:!1,disablePadding:!0,label:e("order.payment-method")},{id:"total",numeric:!0,disablePadding:!1,label:e("cart.order.total")},{id:"createdAt",numeric:!0,disablePadding:!0,label:e("dashboard.created-at")},{id:"action",numeric:!1,disablePadding:!1}],ye=function(e,t){T(M===t&&"asc"===R?"desc":"asc"),J(t)},Pe=function(e,t){q(t)},Ie=function(e){H(parseInt(e.target.value,10)),q(0)},ke=Math.max(0,(1+W)*F-d.length);return Object(C.jsx)(x.a,{title:e("order.dashboard-page-title"),children:Object(C.jsxs)(j.a,{maxWidth:!1,children:[Object(C.jsx)(k.a,{open:ee,setOpen:te,currentId:X,setCurrentId:Y}),Object(C.jsx)(I.a,{order:re,open:ie,setOpen:oe,handleUpdate:function(e,a){t(Object(f.b)(e,a)),console.log("handleUpdateOrder",{orderId:e,updatedData:a})}}),Object(C.jsx)(S.a,{heading:e("order.heading"),links:[{name:e("dashboard.general"),href:g.b.general},{name:e("order.title")}],action:Object(C.jsx)(O.a,{variant:"contained",startIcon:Object(C.jsx)(r.Icon,{icon:s.a}),onClick:function(){},children:e("dashboard.orders.add")})}),Object(C.jsxs)(h.a,{children:[Object(C.jsx)(I.c,{search:be,onSearchChange:function(e){je(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&t(Object(f.a)(be,pe,xe,1,1e5))},orderStatus:pe,onChangeOrderStatus:function(e,t){t&&fe(t.value)},paymentStatus:xe,onChangePaymentStatus:function(e,t){t&&ve(t.value)}}),function(){if(D)return Object(C.jsx)(y.a,{});if(N){var t="";try{t=JSON.parse(N)}catch(a){}return Object(C.jsx)("p",{children:t})}return d&&0!==d.length?Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(v.a,{children:Object(C.jsx)(i.a,{sx:{minWidth:800},children:Object(C.jsxs)(o.a,{size:"small",children:[Object(C.jsx)(I.b,{order:R,orderBy:M,headLabel:Se,numSelected:0,onRequestSort:ye,rowCount:d.length}),Object(C.jsxs)(u.a,{children:[Object(A.b)(d,Object(A.a)(R,M)).slice(W*F,W*F+F).map((function(e,t){return Object(C.jsx)(I.d,{row:e,onClick:function(){ce(e),oe(!0)}},t)})),ke>0&&Object(C.jsx)(l.a,{style:{height:33*ke},children:Object(C.jsx)(b.a,{colSpan:6})})]})]})})}),Object(C.jsx)(w.k,{count:d.length,rowsPerPage:F,page:W,onPageChange:Pe,onRowsPerPageChange:Ie})]}):Object(C.jsx)(P.a,{title:e("dashboard.categories.title-not-found")})}()]})]})})}}}]);
//# sourceMappingURL=38.7826aeb0.chunk.js.map