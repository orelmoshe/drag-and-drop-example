(this["webpackJsonpdrag-drop-example"]=this["webpackJsonpdrag-drop-example"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(5),i=n.n(o),c=(n(12),n(13),n(6)),m=n(3),l=[{id:"item-1",name:"Item 1",bcColor:"#1d5cb3"},{id:"item-2",name:"Item 2",bcColor:"#2a6948"},{id:"item-3",name:"Item 3",bcColor:"#b72828"},{id:"item-4",name:"Item 4",bcColor:"#8c8c4a"},{id:"item-5",name:"Item 5",bcColor:"brown"},{id:"item-6",name:"Item 6",bcColor:"purple"},{id:"item-7",name:"Item 7",bcColor:"#a74e5d"},{id:"item-8",name:"Item 8",bcColor:"#245869"},{id:"item-9",name:"Item 9",bcColor:"#595d49"},{id:"item-10",name:"Item 10",bcColor:"#5bc3de"},{id:"item-11",name:"Item 11",bcColor:"#1c3556"},{id:"item-12",name:"Item 12",bcColor:"#394c12"},{id:"item-13",name:"Item 13",bcColor:"orange"},{id:"item-14",name:"Item 14",bcColor:"purple"},{id:"item-15",name:"Item 15",bcColor:"#921149"}],d=function(){var e=Object(a.useState)(l),t=Object(m.a)(e,2),n=t[0],o=t[1],i=Object(a.useState)(null),d=Object(m.a)(i,2),u=d[0],b=d[1],g=function(e){b(e.target.getAttribute("data-drag"))},s=function(e){var t=e.target.getAttribute("data-drag");if(t&&t!==u){var a=n.findIndex((function(e){return e.id===u})),r=n.findIndex((function(e){return e.id===t}));o(I(n,a,r))}},p=function(e){return e.preventDefault()},f=function(){return b(null)},I=function(e,t,n){var a=Object(c.a)(e);return a.splice(t,1),a.splice(n,0,e[t]),a};return r.a.createElement("div",{className:"Main"},r.a.createElement("h2",null,"Dragging with drag listener"),r.a.createElement("div",{className:"grid-drag-drop"},n.map((function(e){var t=u===e.id;return r.a.createElement("div",{className:"item ".concat(t?"dragging":""),key:e.id,draggable:"true","data-drag":e.id,style:{backgroundColor:"".concat(e.bcColor)},onDragStart:g,onDragEnter:s,onDragOver:p,onDragEnd:f},r.a.createElement("span",null,e.name))}))))};var u=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(u,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},7:function(e,t,n){e.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.066fa13b.chunk.js.map