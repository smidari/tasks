(this["webpackJsonpignat-dz"]=this["webpackJsonpignat-dz"]||[]).push([[0],{15:function(e,t,a){e.exports={sidenav:"Navbar_sidenav__39jMu",sidenav_closed:"Navbar_sidenav_closed__3JJJl",item:"Navbar_item__2Rj4q",active:"Navbar_active__R68hQ"}},20:function(e,t,a){e.exports={dialog:"Task1_dialog__igOiP",avatar:"Task1_avatar__38MPi",message:"Task1_message__19SXB",text:"Task1_text__1YGTE",time:"Task1_time__3Y4Eb"}},37:function(e,t,a){e.exports={btn:"MyBtn_btn__1wNxN",btn_red:"MyBtn_btn_red__WNNM2"}},40:function(e,t,a){e.exports={input:"MyInput_input__T75wP",error:"MyInput_error__24tNT"}},52:function(e,t,a){e.exports=a.p+"static/media/task1.74055f83.jpg"},54:function(e,t,a){e.exports={checkbox:"MyCheckBox_checkbox__3ZGP9"}},55:function(e,t,a){e.exports=a.p+"static/media/spinner.60e1dee8.svg"},61:function(e,t,a){e.exports=a(75)},66:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(10),c=a.n(l),o=(a(66),a(29)),u=a(7),m=a(6),i=a(15),s=a.n(i),E=a(88),d=a(37),p=a.n(d),f=function(e){return r.a.createElement("button",{className:"".concat(p.a.btn," ").concat("red"===e.styleBtn?p.a.btn_red:""),onClick:e.onClick},e.nameBtn)},g=function(){var e=Object(n.useState)(!1),t=Object(m.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement("div",{className:s.a.btn},r.a.createElement(f,{onClick:function(){return l(!a)},nameBtn:"".concat(a?"Close":"Open")})),r.a.createElement(E.a,{className:"".concat(s.a.sidenav," ").concat(a?s.a.sidenav_open:s.a.sidenav_closed)},["PreJunior","Junior","Junior+"].map((function(e,t){return r.a.createElement(o.b,{key:t,to:"/".concat(e),className:s.a.item,activeClassName:s.a.active},e)}))))},h=a(81),v=a(82),b=a(53),k=a(20),_=a.n(k),y=a(83),O=a(52),C=a.n(O),j=function(e){return r.a.createElement(h.a,{className:_.a.dialog},r.a.createElement("h3",null,"Task 1"),r.a.createElement(v.a,null,r.a.createElement(b.a,{xs:4,md:1,className:_.a.avatar},r.a.createElement(y.a,{src:C.a,alt:"avatar"})),r.a.createElement(b.a,{xs:6,md:3,className:_.a.message},r.a.createElement("h6",null,e.name),r.a.createElement("span",{className:_.a.text},e.text),r.a.createElement("span",{className:_.a.time},e.time))))},S=a(84),T=function(e){return r.a.createElement(h.a,null,r.a.createElement("h3",null,"Task 2"),r.a.createElement(v.a,null,r.a.createElement(b.a,{xs:4,md:1},r.a.createElement(S.a,{striped:!0,bordered:!0,hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Doings"),r.a.createElement("th",null,r.a.createElement("span",{onClick:function(){return e.sortToDo(e.toDo)}},"Importance\u2195")),r.a.createElement("th",null,"Remove"))),r.a.createElement("tbody",null,e.toDo.map((function(t){return r.a.createElement("tr",{key:t.id},r.a.createElement("td",null,t.n),r.a.createElement("td",null,t.p),r.a.createElement("td",null,r.a.createElement(f,{onClick:function(){return e.removeToDo(t.id)},nameBtn:"remove",styleBtn:"red"})))})))))))},B=a(18),N=a(85),w=a(90),x=a(40),D=a.n(x),J=function(e){return r.a.createElement("input",{className:"".concat(D.a.input," ").concat(e.error?D.a.error:""),value:e.value,onChange:function(t){return e.onChange(t.target.value)},onKeyPress:e.onKeyPress,onBlur:e.onBlur,autoFocus:!0})},M=function(){var e=Object(n.useState)([{}]),t=Object(m.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(""),o=Object(m.a)(c,2),u=o[0],i=o[1];function s(){!function(e){if(""!==e){var t={id:Object(w.a)(),name:e};0===Object.keys(a[0]).length?l([t]):l([t].concat(Object(B.a)(a))),alert("Hello ".concat(e))}}(u),i("")}return r.a.createElement(h.a,null,r.a.createElement("h3",null,"Task 3"),r.a.createElement(v.a,null,r.a.createElement(b.a,{xs:4,md:5},r.a.createElement(N.a,{className:"mb-3"},r.a.createElement(J,{value:u,onChange:i,onKeyPress:function(e){"Enter"===e.key&&s()}}),r.a.createElement(N.a.Append,null,r.a.createElement(f,{onClick:s,nameBtn:"Add"}))),r.a.createElement("p",null,"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0438\u043c\u0435\u043d ",0===Object.keys(a[0]).length?a.length-1:a.length))))},A=a(54),F=a.n(A),I=function(e){return r.a.createElement("input",{type:"checkbox",className:F.a.checkbox,checked:e.checked,onChange:function(t){return e.onChange(t.currentTarget.checked)}})},P=function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(!1),o=Object(m.a)(c,2),u=o[0],i=o[1];return r.a.createElement(h.a,null,r.a.createElement("h3",null,"Task 4"),r.a.createElement(v.a,null,r.a.createElement(b.a,{xs:4,md:5},r.a.createElement(J,{value:a,onChange:l}),r.a.createElement(J,{value:a,onChange:l,error:!0}),r.a.createElement(f,{onClick:function(){},nameBtn:"Test"}),r.a.createElement(f,{onClick:function(){},nameBtn:"Test",styleBtn:"red"}),r.a.createElement(I,{checked:u,onChange:i}))))},R=function(){var e=Object(n.useState)([{id:1,n:"Work",p:"hight"},{id:2,n:"Poker",p:"low"},{id:3,n:"Games",p:"middle"},{id:4,n:"React",p:"hight"},{id:5,n:"Redux",p:"middle"}]),t=Object(m.a)(e,2),a=t[0],l=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(j,{name:"Artem",text:"npm start \u043d\u0430\u0436\u0438\u043c\u0430\u043b?",time:"20:00"}),r.a.createElement(T,{toDo:a,sortToDo:function(e){var t=e.map((function(e){return"hight"===e.p?(e.p="A",e):"middle"===e.p?(e.p="B",e):"low"===e.p?(e.p="C",e):e})).sort((function(e,t){return e.p>t.p?1:-1})).map((function(e){return"A"===e.p?(e.p="hight",e):"B"===e.p?(e.p="middle",e):"C"===e.p?(e.p="low",e):e}));l(t)},removeToDo:function(e){var t=a.filter((function(t){return t.id!==e}));l(t)}}),r.a.createElement(M,null),r.a.createElement(P,null))},G=function(){return r.a.createElement(r.a.Fragment,null," ",r.a.createElement("p",null,"JuniorPlus"))},K=function(e){var t=Object(n.useState)(!1),a=Object(m.a)(t,2),l=a[0],c=a[1];return l?r.a.createElement(J,{value:e.valueInput,onChange:e.onChange,onBlur:function(){c(!1),e.saveValue()},autoFocus:!0}):r.a.createElement("span",{onDoubleClick:function(){return c(!0)}},e.valueSpan)};var W=function(){var e=Object(n.useState)("Dasha"),t=Object(m.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(""),o=Object(m.a)(c,2),u=o[0],i=o[1];return r.a.createElement(h.a,null,r.a.createElement(v.a,null,r.a.createElement("h3",null,"Task 6")),r.a.createElement(v.a,null,r.a.createElement(b.a,{md:4},r.a.createElement(K,{valueSpan:a,valueInput:u,onChange:i,saveValue:function(){return l(u)}})),r.a.createElement(b.a,{md:4},r.a.createElement(f,{onClick:function(){return function(e,t){var a=JSON.stringify(t);localStorage.setItem(e,a)}("name",{name:a})},nameBtn:"Save"}),r.a.createElement(f,{onClick:function(){var e=function(e,t){var a=localStorage.getItem(e);return null!==a&&(t=JSON.parse(a)),t}("name",{name:""});l(e.name)},nameBtn:"Restore"}))))},V=a(87),H=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(V.a.Control,{as:"select",onChange:function(t){e.onChange(t.target.value)},value:e.value},e.options.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))))},L=function(e){var t=function(t){e.onChange(t.target.value)};return r.a.createElement(r.a.Fragment,null,e.inputValues.map((function(a,n){return r.a.createElement("div",{key:n},r.a.createElement("input",{type:"radio",name:e.name,value:a,checked:e.value===a,onChange:t})," ",a)})))},Y=["Minsk","Moscow","Paris","Amsterdam"],z=["Male","Female"],q=function(){var e=Object(n.useState)("select city"),t=Object(m.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)("select gender"),o=Object(m.a)(c,2),u=o[0],i=o[1];return r.a.createElement(h.a,null,r.a.createElement(v.a,null,r.a.createElement("h3",null,"Task 7")),r.a.createElement(v.a,null,r.a.createElement(b.a,{md:4},r.a.createElement("p",null,"Selected city: ",a)),r.a.createElement(b.a,{md:4},r.a.createElement(H,{options:Y,value:a,onChange:l}))),r.a.createElement(v.a,null,r.a.createElement(b.a,{md:4},r.a.createElement("p",null,"Selected gender: ",u)),r.a.createElement(b.a,{md:4},r.a.createElement(L,{inputValues:z,name:"gender",onChange:i,value:u}))))},Q=function(e){return{type:"SORT",sort:e}},X=function(e,t){switch(t.type){case"SORT":if("up"===t.sort)return Object(B.a)(e).sort((function(e,t){return e.name>t.name?1:-1}));if("down"===t.sort)return Object(B.a)(e).sort((function(e,t){return e.name>t.name?1:-1})).reverse();throw new Error("i don't understand this payload in type of 'SORT' ");case"CHECK":return Object(B.a)(e).filter((function(e){return e.age>=t.age}));default:throw new Error("I don't understand this type")}},Z=function(){var e=Object(n.useState)([{id:"1",name:"Dasha",age:18},{id:"2",name:"Anna",age:19},{id:"3",name:"Rita",age:20},{id:"4",name:"John",age:17},{id:"5",name:"Santa",age:33},{id:"6",name:"Max",age:22},{id:"7",name:"Dina",age:10}]),t=Object(m.a)(e,2),a=t[0],l=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,null,r.a.createElement(v.a,null,r.a.createElement("h3",null,"Task 8")),r.a.createElement(v.a,null,r.a.createElement(b.a,{md:4},r.a.createElement(S.a,{striped:!0,bordered:!0,hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Age"))),r.a.createElement("tbody",null,a.map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.age))}))))),r.a.createElement(b.a,{md:4},r.a.createElement(f,{onClick:function(){l(X(a,Q("up")))},nameBtn:"sort up"}),r.a.createElement(f,{onClick:function(){l(X(a,Q("down")))},nameBtn:"sort down"}),r.a.createElement(f,{onClick:function(){l(X(a,{type:"CHECK",age:18}))},nameBtn:"check"})))))},$=a(89),U=a(86),ee=["January","February","March","April","May","June","July","August","September","November","December"],te=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],ae=function(){var e=Object(n.useState)(),t=Object(m.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(new Date),o=Object(m.a)(c,2),u=o[0],i=o[1];return r.a.createElement(h.a,null,r.a.createElement(v.a,null,r.a.createElement("h3",null,"Task 9")),r.a.createElement(v.a,null,r.a.createElement(b.a,{md:2},r.a.createElement($.a,{placement:"right",overlay:r.a.createElement(U.a,{id:"tooltip"},"".concat(te[u.getDay()]," \n                                 ").concat(u.getDate()," \n                                 ").concat(ee[u.getMonth()]," \n                                 ").concat(u.getFullYear()))},r.a.createElement("h3",null,u.toLocaleTimeString())))),r.a.createElement(v.a,null,r.a.createElement(b.a,{md:4},r.a.createElement(f,{onClick:function(){var e=setInterval((function(){return i(new Date)}),1e3);l(e)},nameBtn:"uptade"}),r.a.createElement(f,{onClick:function(){clearInterval(a)},nameBtn:"clear"}))))},ne=a(55),re=a.n(ne),le=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,{onClick:function(){e.spinnerAC(!0),setTimeout((function(){e.spinnerAC(!1)}),3e3)},nameBtn:"Spinner"}),e.loading?r.a.createElement("div",null,r.a.createElement("img",{src:re.a,alt:"loader"})):r.a.createElement(r.a.Fragment,null,r.a.createElement(W,null),r.a.createElement(q,null),r.a.createElement(Z,null),r.a.createElement(ae,null)))},ce=a(45),oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LOADING":return Object(ce.a)(Object(ce.a)({},e),{},{loading:t.loading});default:return e}},ue=a(34),me=Object(ue.b)((function(e){return{loading:e.spinner.loading}}),(function(e){return{spinnerAC:function(t){return e(function(e){return{type:"SET_LOADING",loading:e}}(t))}}}))(le),ie=function(){return r.a.createElement(o.a,null,r.a.createElement(h.a,null,r.a.createElement(v.a,null,r.a.createElement(b.a,{md:3},r.a.createElement(g,null)),r.a.createElement(b.a,{md:9},r.a.createElement(u.a,{path:"/PreJunior",component:R}),r.a.createElement(u.a,{path:"/Junior",component:me}),r.a.createElement(u.a,{path:"/Junior+",component:G})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(74);var se=a(23),Ee=Object(se.b)({spinner:oe}),de=Object(se.c)(Ee);window.store=de,c.a.render(r.a.createElement(ue.a,{store:de},r.a.createElement(ie,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[61,1,2]]]);
//# sourceMappingURL=main.ab4a0c5c.chunk.js.map