(window["webpackJsonptodo-redux"]=window["webpackJsonptodo-redux"]||[]).push([[0],{71:function(e,t,n){e.exports=n(83)},83:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),i=n.n(o),l=n(16),c=n(12),u=n(19),s=n(20),d=n(24),m=n(127),p=n(124),f=n(35),h=n(138),v=n(137),E=n(139),g=n(61),y=n.n(g);var b=function(){function e(){Object(l.a)(this,e)}return Object(c.a)(e,null,[{key:"listAllTodo",value:function(){return function(e){var t=[{id:Math.random().toString(36).substr(2,9),text:"To Make Coffee",done:!1,date:new Date("2019-09-22T03:24:00")},{id:Math.random().toString(36).substr(2,9),text:"Buy Book",done:!1,date:new Date("2019-09-22T10:20:00")},{id:Math.random().toString(36).substr(2,9),text:"Study 1 hour of English",done:!0,date:new Date("2019-09-19T05:14:00")},{id:Math.random().toString(36).substr(2,9),text:"Buy milk",done:!0,date:new Date("2019-09-18T01:14:00")}];return e({type:"TODOLIST",data:t}),t}}},{key:"addItem",value:function(e){return function(t){t(function(e){return{type:"ADDITEM",item:e}}(e))}}},{key:"removeAllTodo",value:function(){return function(e){e({type:"REMOVEALL"})}}},{key:"removeItem",value:function(e){return function(t){return t(function(e){return{type:"REMOVEITEM",id:e}}(e)),e}}},{key:"changeStatus",value:function(e){return function(t){return t(function(e){return{type:"CHANGESTATUS",id:e}}(e)),e}}}]),e}(),I=n(128),O=n(140),T=n(126),x=n(84),j=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).removeAll=function(e){e.preventDefault(),n.props.removeAll()},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"addNewItem",value:function(e){e.preventDefault(),""!==this.inputText.value.replace(/\s/g,"")&&(this.props.addItem(this.inputText.value),this.inputText.value=""),this.inputText.focus()}},{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement("section",{style:{position:"relative",marginTop:20}},r.a.createElement(p.a,{maxWidth:"sm"},r.a.createElement("form",{onSubmit:function(t){return e.addNewItem(t)}},r.a.createElement(T.a,{container:!0,spacing:3},r.a.createElement(T.a,{item:!0,xs:12},r.a.createElement(O.a,{fullWidth:!0,id:"outlined-name",label:"Add Task",margin:"normal",inputRef:function(t){return e.inputText=t}})),r.a.createElement(T.a,{item:!0,xs:7,container:!0,alignItems:"center",justify:"flex-end"},r.a.createElement(I.a,{className:t.addBt,variant:"contained",size:"small",color:"primary",type:"submit"},"add")),r.a.createElement(T.a,{item:!0,xs:5,container:!0,alignItems:"center",justify:"flex-end"},r.a.createElement(I.a,{className:t.deleteBt,variant:"contained",size:"small",color:"secondary",onClick:this.removeAll},"clean all"))))))}}]),t}(a.Component),w=Object(x.a)((function(e){return{deleteBt:{background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",border:0,borderRadius:3,boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",color:"white",height:48,padding:"0 30px"},addBt:{background:"linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",border:0,borderRadius:3,boxShadow:"0 3px 5px 2px rgba(33, 203, 243, .3)",color:"white",height:48,padding:"0 30px"}}}))(j),S=n(135),k=n(136),A=n(129),D=n(58),C=n.n(D),M=n(130),B=n(142),N=n(134),R=n(132),L=n(133),z=n(131),F=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).removeItem=function(){n.props.removeItem(n.props.todoItem.id),n.setState({openDialog:!1})},n.handleClickOpen=function(){n.setState({openDialog:!0})},n.handleClose=function(){n.setState({openDialog:!1})},n.state={openDialog:!1},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"removeItemDialog",value:function(e){e.preventDefault(),this.setState({openDialog:!0})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(A.a,null,r.a.createElement(M.a,{edge:"end","aria-label":"delete",onClick:function(t){return e.removeItemDialog(t)}},r.a.createElement(C.a,null))),r.a.createElement(B.a,{open:this.state.openDialog,onClose:this.handleClose,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(z.a,{id:"alert-dialog-title"},"Delete Item"),r.a.createElement(R.a,null,r.a.createElement(L.a,{id:"alert-dialog-description"},"Are you sure you want to remove the item:  ",r.a.createElement("strong",null,this.props.todoItem.text),"?")),r.a.createElement(N.a,null,r.a.createElement(I.a,{onClick:this.handleClose,color:"primary"},"No"),r.a.createElement(I.a,{onClick:this.removeItem,color:"primary",autoFocus:!0},"Yes"))))}}]),t}(a.Component),V=n(59),G=n.n(V),H=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).changeStatus=function(e){n.props.changeStatus(n.props.todoItem.id)},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(S.a,{button:!0,key:this.props.todoItem.id},r.a.createElement(k.a,{onClick:function(t){return e.changeStatus(t)},primary:r.a.createElement("span",{style:!0===this.props.todoItem.done?{textDecoration:"line-through"}:{}},this.props.todoItem.text),secondary:G()(this.props.todoItem.date).fromNow()}),r.a.createElement(F,this.props))}}]),t}(a.Component),W=n(42),J=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.listAllTodo()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(v.a,{position:"static"},r.a.createElement(h.a,null,r.a.createElement(f.a,{variant:"h6"},"THINGS TO DO"),r.a.createElement("section",{style:{marginLeft:"auto",marginRight:10,position:"relative"}},r.a.createElement(E.a,{badgeContent:this.props.todo.filter((function(e){return!1===e.done})).size,color:"secondary"},r.a.createElement(y.a,null))))),r.a.createElement(w,{addItem:this.props.addItem,removeAll:this.props.removeAllTodo}),r.a.createElement(p.a,{maxWidth:"sm",style:{marginTop:30}},r.a.createElement(m.a,{style:{position:"relative"}},0===this.props.todo.size?r.a.createElement("span",{style:{color:"red",fontSize:16,display:"flex",alignItems:"center",justifyContent:"center"}},"No activity to show now! :)"):this.props.todo.map((function(t){return r.a.createElement(H,{todoItem:t,removeItem:e.props.removeItem,changeStatus:e.props.changeStatus,key:t.id})})))))}}]),t}(a.Component),U=Object(W.b)((function(e){return{todo:e.todo}}),(function(e){return{listAllTodo:function(){e(b.listAllTodo())},removeAllTodo:function(){e(b.removeAllTodo())},removeItem:function(t){e(b.removeItem(t))},addItem:function(t){e(b.addItem(t))},changeStatus:function(t){e(b.changeStatus(t))}}}))(J),Y=n(143);var q=function(){return r.a.createElement("section",null,r.a.createElement(Y.a,null),r.a.createElement(U,null))},K=n(34),P=n(62),Q=n(29),X=function(e){return e.sort((function(e,t){return e.date<t.date}))};var Z=Object(K.c)({todo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Q.a,t=arguments.length>1?arguments[1]:void 0;if("TODOLIST"===t.type)return X(new Q.a(X(t.data)));if("ADDITEM"===t.type){var n=e.toArray();return n.push({id:Math.random().toString(36).substr(2,9),text:t.item,done:!1,date:new Date}),X(new Q.a(X(n)))}if("REMOVEITEM"===t.type){var a=e.filter((function(e){return e.id!==t.id}));return 0===a.size?new Q.a:X(new Q.a(X(a)))}if("CHANGESTATUS"===t.type){var r=e.map((function(e){return e.done=e.id===t.id?!e.done:e.done,e})).toArray();return new Q.a(X(r))}return"REMOVEALL"===t.type?new Q.a:e}}),$=Object(K.d)(Z,Object(K.a)(P.a));i.a.render(r.a.createElement(W.a,{store:$},r.a.createElement(q,null)),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.d0ad181a.chunk.js.map