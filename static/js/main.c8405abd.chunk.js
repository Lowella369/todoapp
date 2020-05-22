(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,a){},28:function(e,t,a){e.exports=a(39)},33:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n,l=a(0),i=a.n(l),c=a(11),r=a.n(c),o=a(13),s=a(2),m=(a(33),function(e){return i.a.createElement(o.b,{style:{margin:"2rem",textDecoration:"none",fontSize:"1rem",color:"#f6fbfa",display:"inline"},activeStyle:{color:"#bafae7",fontWeight:"bold"},to:e.to},e.label)}),u=(a(21),function(){return i.a.createElement("div",{className:"navBar"},i.a.createElement("div",{className:"logo"},"Todo List App "),i.a.createElement(m,{to:"/about",label:"About"}),i.a.createElement(m,{to:"/todos",label:"Todos"}),i.a.createElement(m,{to:"/contact",label:"Contact"}))}),d=function(){return i.a.createElement("div",{className:"about"},"A simple React Redux app that allows user to add, delete and mark a todo list complete.")},p=function(){return i.a.createElement("h2",{className:"error"},"Page Not Found (404)")},h=a(22),b=a(23),E=a(27),f=a(25),O=a(3),C=a(26),v=a(9),k=a(18),y=function(e){return{type:"ADD_TODO",text:e,isCheck:!1,Id:I++,isVisible:!0}},N=function(e){return{type:"TOGGLE_TODO",Id:e}},g=function(){return{type:"SHOW_ALL"}},j=function(){return{type:"SHOW_ACTIVE"}},T=function(){return{type:"SHOW_COMPLETED"}},D=function(e){return{type:"DELETE_TODO",Id:e}},A=Object(v.b)({todoreducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TODO":return[].concat(Object(C.a)(e),[{text:t.text,isCheck:t.isCheck,Id:t.Id,isVisible:t.isVisible}]).map(function(e){return Object(O.a)(Object(O.a)({},e),{},{isVisible:!0})});case"TOGGLE_TODO":return e.map(function(e){return e.Id===t.Id?Object(O.a)(Object(O.a)({},e),{},{isCheck:!e.isCheck}):e});case"SHOW_ACTIVE":return e.map(function(e){return e.isCheck?Object(O.a)(Object(O.a)({},e),{},{isVisible:!1}):Object(O.a)(Object(O.a)({},e),{},{isVisible:!0})});case"SHOW_COMPLETED":return e.map(function(e){return e.isCheck?Object(O.a)(Object(O.a)({},e),{},{isVisible:!0}):Object(O.a)(Object(O.a)({},e),{},{isVisible:!1})});case"SHOW_ALL":return e.map(function(e){return Object(O.a)(Object(O.a)({},e),{},{isVisible:!0})});case"DELETE_TODO":return e.filter(function(e){return e.Id!==t.Id});default:return e}}}),I=0,w=function(e){Object(E.a)(a,e);var t=Object(f.a)(a);function a(e){var l;return Object(h.a)(this,a),(l=t.call(this,e)).handleChange=function(e){var t=e.target.value;l.setState({value:t})},l.handleKeyUp=function(e,t){"Enter"===t.key&&l.handleSubmit()},l.handleSubmit=function(){var e=l.state.value;l.props.todos.find(function(t){return t.text===e})?n="Todo list already exists!":(e.trim().length>0&&l.props.dispatch(y(e)),n=""),l.setState({value:""})},l.handleClearIcon=function(){l.setState({value:""})},l.handleCheckboxClick=function(e){l.props.dispatch(N(e))},l.showActive=function(){l.props.dispatch(j())},l.showCompleted=function(){l.props.dispatch(T())},l.showAll=function(){l.props.dispatch(g())},l.handleDeletClick=function(e){l.props.dispatch(D(e))},l.state={value:""},l}return Object(b.a)(a,[{key:"render",value:function(){var e=this,t=this.state.value,a=this.props.todos,l=a.filter(function(e){return e.isVisible});return i.a.createElement(i.a.Fragment,null,i.a.createElement("h1",{className:"heading"},"Enter a todo list"),i.a.createElement("div",{className:"todoApp"},i.a.createElement("div",{className:"todoContainer"},i.a.createElement("div",{className:"inputFields"},i.a.createElement("input",{className:"inputs",type:"text",value:t,onChange:this.handleChange,onKeyUp:this.handleKeyUp.bind(this,t)}),i.a.createElement("span",{className:"input-clear-icon ".concat(""!==t?"clear-icon--show":""," "),onClick:this.handleClearIcon}," ","X")),i.a.createElement("button",{className:"btn",type:"button",onClick:this.handleSubmit.bind(this,t)},"Submit")),i.a.createElement("p",{className:"errorMsg"}," ",n),l.length>0&&i.a.createElement("ul",{className:"list"},a.map(function(t,a){return t.isVisible&&i.a.createElement("li",{className:"listItem",key:t.Id},i.a.createElement("label",{className:"list-label ".concat(t.isCheck?"line-through":"")},i.a.createElement("input",{defaultChecked:t.isCheck,type:"checkbox",onClick:e.handleCheckboxClick.bind(e,t.Id)}),t.text),i.a.createElement("span",{className:"delete-btn",role:"button",onClick:e.handleDeletClick.bind(e,t.Id)},"Delete"))})),0===a.length?i.a.createElement("p",null,"Add a TODO List"):0===l.length?i.a.createElement("p",null,"This Filter is empty"):"",i.a.createElement("div",{className:"filterContainer"},"Show:",i.a.createElement("input",{type:"radio",name:"filter",id:"allFilter",className:"filter-input",onClick:this.showAll,disabled:0===a.length,defaultChecked:!0}),i.a.createElement("label",{htmlFor:"allFilter",className:"filterLabel"},"All"),i.a.createElement("input",{type:"radio",name:"filter",id:"activeFilter",className:"filter-input",onClick:this.showActive,disabled:0===a.length}),i.a.createElement("label",{htmlFor:"activeFilter",className:"filterLabel"},"Active"),i.a.createElement("input",{type:"radio",name:"filter",id:"completedFilter",className:"filter-input",onClick:this.showCompleted,disabled:0===a.length}),i.a.createElement("label",{htmlFor:"completedFilter",className:"filterLabel"},"Completed"))))}}]),a}(i.a.Component),x=Object(k.b)(function(e){return{todos:e.todoreducer}})(w),L=Object(v.c)(A),S=function(){return i.a.createElement(k.a,{store:L},i.a.createElement(x,null))},F=function(){return i.a.createElement("div",{className:"contact-container"},i.a.createElement("h1",null,"Contact"),i.a.createElement("div",{className:"contact"},i.a.createElement("form",{action:"https://formspree.io/email@domain.tld",method:"POST"},i.a.createElement("input",{type:"text",name:"fname",id:"fname",placeholder:"First Name",required:!0}),i.a.createElement("input",{type:"text",name:"lname",id:"lname",placeholder:"Last Name",required:!0}),i.a.createElement("input",{type:"email",name:"email",id:"email",placeholder:"email",required:!0}),i.a.createElement("textarea",{name:"message",id:"message",placeholder:"message",required:!0}),i.a.createElement("input",{type:"submit",name:"send",id:"submit",value:"send"}))))},V=function(){return i.a.createElement(o.a,null,i.a.createElement("div",{className:"App"},i.a.createElement(u,null),i.a.createElement(s.d,null,i.a.createElement(s.a,{exact:!0,path:"/",to:"/about"}),i.a.createElement(s.b,{path:"/about",component:d}),i.a.createElement(s.b,{path:"/todos",component:S}),i.a.createElement(s.b,{path:"/contact",component:F}),i.a.createElement(s.b,{component:p})),i.a.createElement("div",{className:"footer"},i.a.createElement("p",null,"Copyright Lowella 2020"))))};r.a.render(i.a.createElement(V,null),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.c8405abd.chunk.js.map