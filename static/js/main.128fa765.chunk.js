(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{13:function(e,t,l){},14:function(e,t,l){"use strict";l.r(t);var a=l(0),n=l.n(a),c=l(3),s=l.n(c),d=l(4),o=l(5),i=l(1),r=l(7),u=l(6),h=(l(13),["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"]),S=function(e){Object(r.a)(l,e);var t=Object(u.a)(l);function l(e){var a;return Object(d.a)(this,l),(a=t.call(this,e)).state={goodSelected:"",listSelected:[],prevSelected:void 0},a.handleSelected=a.handleSelected.bind(Object(i.a)(a)),a.handleDeleteSelected=a.handleDeleteSelected.bind(Object(i.a)(a)),a}return Object(o.a)(l,[{key:"handleDeleteSelected",value:function(){var e=this.state.listSelected;e.length>0&&(e.map((function(e){return e.classList.toggle("selected",!1)})),this.setState({goodSelected:"",listSelected:[],prevSelected:null}))}},{key:"handleSelected",value:function(e){var t=this.state,l=t.goodSelected,a=t.listSelected,n=t.prevSelected,c=e.target.closest(".content"),s=c.textContent.slice(0,c.textContent.length-1),d=l.length>0?l.split(", "):[],o=a.length>0?a:[];d.includes(s)||(e.metaKey?(d.push(s),c.classList.add("selected"),o.push(c)):(d.push(s),0===l.length?this.setState({prevSelected:c}):n.classList.toggle("selected",!1),c.classList.add("selected"),this.setState({prevSelected:c}),o.push(c))),this.setState({goodSelected:d.join(", "),listSelected:o})}},{key:"render",value:function(){var e=this,t=this.state.goodSelected;return n.a.createElement("div",{className:"App"},n.a.createElement("h1",null,"Selected good: -"),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"header"},n.a.createElement("p",null,t)),n.a.createElement("button",{type:"button",className:"delete",onClick:this.handleDeleteSelected},"Delete"),n.a.createElement("div",null,n.a.createElement("ul",null,h.map((function(t){return n.a.createElement("li",{key:t,className:"content",onClick:e.handleSelected},t)}))))))}}]),l}(n.a.Component);s.a.render(n.a.createElement(S,null),document.getElementById("root"))},8:function(e,t,l){e.exports=l(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.128fa765.chunk.js.map