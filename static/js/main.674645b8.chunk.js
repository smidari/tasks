(this["webpackJsonpignat-dz"]=this["webpackJsonpignat-dz"]||[]).push([[0],{10:function(e,t,a){e.exports={sidenav:"Navbar_sidenav__39jMu",sidenav_closed:"Navbar_sidenav_closed__3JJJl",item:"Navbar_item__2Rj4q",active:"Navbar_active__R68hQ"}},11:function(e,t,a){e.exports={dialog:"Task1_dialog__igOiP",avatar:"Task1_avatar__38MPi",message:"Task1_message__19SXB",text:"Task1_text__1YGTE",time:"Task1_time__3Y4Eb"}},19:function(e,t,a){e.exports={btn:"MyBtn_btn__1wNxN",btn_red:"MyBtn_btn_red__WNNM2"}},22:function(e,t,a){e.exports={input:"MyInput_input__T75wP",error:"MyInput_error__24tNT"}},31:function(e,t,a){e.exports=a.p+"static/media/task1.74055f83.jpg"},32:function(e,t,a){e.exports={checkbox:"MyCheckBox_checkbox__3ZGP9"}},36:function(e,t,a){e.exports=a(51)},41:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(25),l=a.n(c),o=(a(41),a(16)),m=a(4),u=a(9),i=a(10),s=a.n(i),E=a(58),d=a(19),p=a.n(d),h=function(e){return r.a.createElement("button",{className:"".concat(p.a.btn," ").concat("red"===e.styleBtn?p.a.btn_red:""),onClick:e.onClick},e.nameBtn)},_=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",null,r.a.createElement("div",{className:s.a.btn},r.a.createElement(h,{onClick:function(){return c(!a)},nameBtn:"".concat(a?"Close":"Open")})),r.a.createElement(E.a,{className:"".concat(s.a.sidenav," ").concat(a?s.a.sidenav_open:s.a.sidenav_closed)},["PreJunior","Junior","Junior+"].map((function(e,t){return r.a.createElement(o.b,{key:t,to:"/".concat(e),className:s.a.item,activeClassName:s.a.active},e)}))))},f=a(53),v=a(54),b=a(55),k=a(11),g=a.n(k),x=a(56),N=a(31),C=a.n(N),y=function(e){return r.a.createElement(f.a,{className:g.a.dialog},r.a.createElement("h3",null,"Task 1"),r.a.createElement(v.a,null,r.a.createElement(b.a,{xs:4,md:1,className:g.a.avatar},r.a.createElement(x.a,{src:C.a,alt:"avatar"})),r.a.createElement(b.a,{xs:6,md:3,className:g.a.message},r.a.createElement("h6",null,e.name),r.a.createElement("span",{className:g.a.text},e.text),r.a.createElement("span",{className:g.a.time},e.time))))},j=a(57),T=function(e){return r.a.createElement(f.a,null,r.a.createElement("h3",null,"Task 2"),r.a.createElement(v.a,null,r.a.createElement(b.a,{xs:4,md:1},r.a.createElement(j.a,{striped:!0,bordered:!0,hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Doings"),r.a.createElement("th",null,r.a.createElement("span",{onClick:function(){return e.sortToDo(e.toDo)}},"Importance\u2195")),r.a.createElement("th",null,"Remove"))),r.a.createElement("tbody",null,e.toDo.map((function(t){return r.a.createElement("tr",{key:t.id},r.a.createElement("td",null,t.n),r.a.createElement("td",null,t.p),r.a.createElement("td",null,r.a.createElement(h,{onClick:function(){return e.removeToDo(t.id)},nameBtn:"remove",styleBtn:"red"})))})))))))},O=a(34),B=a(59),w=a(60),J=a(22),P=a.n(J),M=function(e){return r.a.createElement("input",{className:"".concat(P.a.input," ").concat(e.error?P.a.error:""),value:e.value,onChange:function(t){return e.onChange(t.target.value)},onKeyPress:e.onKeyPress})},D=function(){var e=Object(n.useState)([{}]),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),o=Object(u.a)(l,2),m=o[0],i=o[1];function s(){!function(e){if(""!==e){var t={id:Object(w.a)(),name:e};0===Object.keys(a[0]).length?c([t]):c([t].concat(Object(O.a)(a))),alert("Hello ".concat(e))}}(m),i("")}return r.a.createElement(f.a,null,r.a.createElement("h3",null,"Task 3"),r.a.createElement(v.a,null,r.a.createElement(b.a,{xs:4,md:5},r.a.createElement(B.a,{className:"mb-3"},r.a.createElement(M,{value:m,onChange:i,onKeyPress:function(e){"Enter"===e.key&&s()}}),r.a.createElement(B.a.Append,null,r.a.createElement(h,{onClick:s,nameBtn:"Add"}))),r.a.createElement("p",null,"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0438\u043c\u0435\u043d ",0===Object.keys(a[0]).length?a.length-1:a.length))))},S=a(32),A=a.n(S),R=function(e){return r.a.createElement("input",{type:"checkbox",className:A.a.checkbox,checked:e.checked,onChange:function(t){return e.onChange(t.currentTarget.checked)}})},I=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!1),o=Object(u.a)(l,2),m=o[0],i=o[1];return r.a.createElement(f.a,null,r.a.createElement("h3",null,"Task 4"),r.a.createElement(v.a,null,r.a.createElement(b.a,{xs:4,md:5},r.a.createElement(M,{value:a,onChange:c}),r.a.createElement(M,{value:a,onChange:c,error:!0}),r.a.createElement(h,{onClick:function(){},nameBtn:"Test"}),r.a.createElement(h,{onClick:function(){},nameBtn:"Test",styleBtn:"red"}),r.a.createElement(R,{checked:m,onChange:i}))))},W=function(){var e=Object(n.useState)([{id:1,n:"Work",p:"hight"},{id:2,n:"Poker",p:"low"},{id:3,n:"Games",p:"middle"},{id:4,n:"React",p:"hight"},{id:5,n:"Redux",p:"middle"}]),t=Object(u.a)(e,2),a=t[0],c=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(y,{name:"Artem",text:"npm start \u043d\u0430\u0436\u0438\u043c\u0430\u043b?",time:"20:00"}),r.a.createElement(T,{toDo:a,sortToDo:function(e){var t=e.map((function(e){return"hight"===e.p?(e.p="A",e):"middle"===e.p?(e.p="B",e):"low"===e.p?(e.p="C",e):e})).sort((function(e,t){return e.p>t.p?1:-1})).map((function(e){return"A"===e.p?(e.p="hight",e):"B"===e.p?(e.p="middle",e):"C"===e.p?(e.p="low",e):e}));c(t)},removeToDo:function(e){var t=a.filter((function(t){return t.id!==e}));c(t)}}),r.a.createElement(D,null),r.a.createElement(I,null))},F=function(){return r.a.createElement(r.a.Fragment,null," ",r.a.createElement("p",null,"Junior"))},G=function(){return r.a.createElement(r.a.Fragment,null," ",r.a.createElement("p",null,"JuniorPlus"))},K=function(){return r.a.createElement(o.a,null,r.a.createElement(f.a,null,r.a.createElement(v.a,null,r.a.createElement(b.a,{md:3},r.a.createElement(_,null)),r.a.createElement(b.a,{md:9},r.a.createElement(m.a,{path:"/PreJunior",component:W}),r.a.createElement(m.a,{path:"/Junior",component:F}),r.a.createElement(m.a,{path:"/Junior+",component:G})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(50);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(K,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.674645b8.chunk.js.map