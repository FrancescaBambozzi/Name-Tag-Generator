(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(16)},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),m=a(8),c=a.n(m),s=a(9),o=a(1),i=a(2),l=a(4),u=a(3),d=a(5),p=function(e){return r.a.createElement("div",{className:"name-tag"},r.a.createElement("h3",{className:"title"},"HELLO"),r.a.createElement("p",{className:"subtitle"},"my name is"),r.a.createElement("h2",{className:"name"},e.name),r.a.createElement("span",{onClick:function(){return e.removeName(e.index)},className:"name-tag__delete"},"x"))},v=(a(7),function(e){var t=e.names.map(function(t,a){return r.a.createElement(p,{name:t,key:t,removeName:e.removeName,index:a})});return r.a.createElement("main",null,t)}),f=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),m=0;m<n;m++)r[m]=arguments[m];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={name:""},a.updateName=function(e){return a.setState({name:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),a.props.addName(a.state.name),a.setState({name:""})},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",placeholder:"Add a new name here...",value:this.state.name,onChange:this.updateName}),r.a.createElement("input",{type:"submit",value:"Create Name Tag"}))}}]),t}(n.Component),h=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),m=0;m<n;m++)r[m]=arguments[m];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={names:[]},a.addName=function(e){var t=[e].concat(Object(s.a)(a.state.names));a.setState({names:t})},a.removeName=function(e){var t=a.state.names.filter(function(t,a){return a!==e});a.setState({names:t})},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidUpdate",value:function(){var e=JSON.stringify(this.state.names);localStorage.setItem("savedNames",e)}},{key:"componentDidMount",value:function(){var e=localStorage.getItem("savedNames");if(e){var t=JSON.parse(e);this.setState({names:t})}}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Name Tag Generator"),r.a.createElement(f,{addName:this.addName}),r.a.createElement(v,{names:this.state.names,removeName:this.removeName}))}}]),t}(n.Component),N=document.getElementById("root");c.a.render(r.a.createElement(h,null),N)},7:function(e,t,a){}},[[10,1,2]]]);
//# sourceMappingURL=main.7ed01fd9.chunk.js.map